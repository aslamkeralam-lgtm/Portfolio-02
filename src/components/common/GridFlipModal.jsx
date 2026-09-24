import { useState } from "react";
import "../../pages/GridFlipModal.css";
import One from "../../Images/Archives/One/Tradinglogo.png";
import Two from "../../Images/Archives/One/LogoDark.png";
import Three from "../../Images/Archives/One/Logolight.png";
import Four from "../../Images/Archives/One/LogoUsage.png";
import Five from "../../Images/Archives/One/MOne.png";
import Six from "../../Images/Archives/Two/Logo1.png";
import Seven from "../../Images/Archives/Two/Logo2.png";
import Eight from "../../Images/Archives/Two/Logo3.png";
import Nine from "../../Images/Archives/Two/Logo4.png";
import Ten from "../../Images/Archives/One/BrandGuid.png";
import Eleven from "../../Images/Archives/One/MTwo.png";
import Twelve from "../../Images/Archives/1.png";
import Thirteen from "../../Images/Archives/2.png";
import Fourteen from "../../Images/Archives/3.png";
import Fifteen from "../../Images/Archives/4.png";
import Sixteen from "../../Images/Archives/5.png";
import Seventeen from "../../Images/Archives/6.png";
import Eighteen from "../../Images/Archives/7.png";
import Nineteen from "../../Images/Archives/8.png";
import Twenty from "../../Images/Archives/9.png";
import TwentyOne from "../../Images/Archives/10.png";
import TwentyTwo from "../../Images/Archives/11.png";
import TwentyThree from "../../Images/Archives/12.png";

const images = [
  { id: "one", src: One },
  { id: "two", src: Two },
  { id: "three", src: Three },
  { id: "four", src: Four },
  { id: "five", src: Five },
  { id: "six", src: Six },
  { id: "seven", src: Seven },
  { id: "eight", src: Eight },
  { id: "nine", src: Nine },
  { id: "ten", src: Ten },
  { id: "eleven", src: Eleven },
  { id: "twelve", src: Twelve },
  { id: "thirteen", src: Thirteen },
  { id: "fourteen", src: Fourteen },
  { id: "fifteen", src: Fifteen },
  { id: "sixteen", src: Sixteen },
  { id: "seventeen", src: Seventeen },
  { id: "eighteen", src: Eighteen },
  { id: "nineteen", src: Nineteen },
  { id: "twenty", src: Twenty },
  { id: "twenty-one", src: TwentyOne },
  { id: "twenty-two", src: TwentyTwo },
  { id: "twenty-three", src: TwentyThree },
];

const shuffleImages = (items) => {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
};

const shuffledImages = shuffleImages(images);

export default function GridFlipModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? shuffledImages.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === shuffledImages.length - 1 ? 0 : current + 1));
  };

  const currentImage = shuffledImages[activeIndex];

  return (
    <div className="grid-flip-wrapper">
      <div className="boxes-container">
        {shuffledImages.map((img, index) => (
          <button
            type="button"
            className="box"
            key={img.id}
            onClick={() => openModal(index)}
            aria-label={`Open image ${index + 1}`}
          >
            <div
              className={`box-content ${img.id}`}
              style={{ backgroundImage: `url(${img.src})` }}
            />
          </button>
        ))}
      </div>

      <div className={`modal ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <div className="overlay" onClick={closeModal} role="button" tabIndex={0} onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            closeModal();
          }
        }} />

        <button
          type="button"
          className="modal-close"
          onClick={closeModal}
          aria-label="Close gallery"
        >
          ×
        </button>

        <div className="modal-carousel" aria-live="polite">
          <button
            type="button"
            className="modal-nav left"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            ←
          </button>

          <div className="content">
            <div
              className="box-content active"
              style={{ backgroundImage: `url(${currentImage.src})` }}
            />
          </div>

          <button
            type="button"
            className="modal-nav right"
            onClick={goToNext}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
