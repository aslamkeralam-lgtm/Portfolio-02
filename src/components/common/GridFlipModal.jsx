import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
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


gsap.registerPlugin(Flip);

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
    { id: "eleven", src: Eleven }
];

export default function GridFlipModal() {
  const containerRef = useRef(null);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  const modalOverlayRef = useRef(null);
  const boxIndexRef = useRef(undefined);

  const closeModal = () => {
    const modal = modalRef.current;
    const modalOverlay = modalOverlayRef.current;
    const boxes = gsap.utils.toArray(".box", containerRef.current);
    const activeBox = modalContentRef.current?.firstElementChild;

    if (!activeBox || boxIndexRef.current === undefined) {
      return;
    }

    const state = Flip.getState(activeBox);
    boxes[boxIndexRef.current].appendChild(activeBox);
    boxIndexRef.current = undefined;

    gsap.to([modal, modalOverlay], {
      autoAlpha: 0,
      ease: "power1.inOut",
      duration: 0.35,
    });

    Flip.from(state, {
      duration: 0.7,
      ease: "power1.inOut",
      absolute: true,
      onComplete: () => gsap.set(activeBox, { zIndex: "auto" }),
    });

    gsap.set(activeBox, { zIndex: 1002 });
  };

  useEffect(() => {
    const modal = modalRef.current;
    const modalContent = modalContentRef.current;
    const modalOverlay = modalOverlayRef.current;
    const boxes = gsap.utils.toArray(".box", containerRef.current);
    const boxesContent = gsap.utils.toArray(".box-content", containerRef.current);

    const cleanupFns = [];

    boxesContent.forEach((box, i) => {
      const handleClick = () => {
        if (boxIndexRef.current !== undefined) {
          closeModal();
          return;
        }

        const state = Flip.getState(box);
        modalContent.appendChild(box);
        boxIndexRef.current = i;

        gsap.set(modal, { autoAlpha: 1 });

        Flip.from(state, {
          duration: 0.7,
          ease: "power1.inOut",
        });

        gsap.to(modalOverlay, { autoAlpha: 0.65, duration: 0.35 });
      };

      box.addEventListener("click", handleClick);
      cleanupFns.push(() => box.removeEventListener("click", handleClick));
    });

    return () => cleanupFns.forEach((fn) => fn());
  }, []);

  return (
    <div className="grid-flip-wrapper" ref={containerRef}>
      <div className="boxes-container">
        {images.map((img) => (
          <div className="box" key={img.id}>
            <div
              className={`box-content ${img.id}`}
              style={{ backgroundImage: `url(${img.src})` }}
            />
          </div>
        ))}
      </div>

      <div className="modal" ref={modalRef}>
        <div className="overlay" ref={modalOverlayRef}></div>
        <button
          type="button"
          className="modal-close"
          onClick={closeModal}
          aria-label="Close image"
        >
          ×
        </button>
        <div className="content" ref={modalContentRef}></div>
      </div>
    </div>
  );
}
