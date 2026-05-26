import { useState } from "react";
import { motion } from "motion/react";
import { Lightbox } from "./Lightbox";

export function ScreenshotGrid({ screenshots }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(screenshot.image)}
          >
            <img
              src={screenshot.image}
              alt={screenshot.title}
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white">
                <p className="text-sm font-semibold">{screenshot.title}</p>
                {screenshot.badge && (
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C8A96E]">{screenshot.badge}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Lightbox
        image={selectedImage}
        title={screenshots.find((s) => s.image === selectedImage)?.title || ""}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
