import React from "react";

export default function PlaceholderImage({ label, caption, aspectRatio = "16/9", bg = "#e8edf2" }) {
  return (
    <figure className="my-8">
      <div
        className="w-full rounded-lg flex items-center justify-center text-sm text-gray-400 font-medium"
        style={{ background: bg, aspectRatio }}
      >
        [ {label} ]
      </div>
      {caption && (
        <figcaption className="mt-2 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
          <span>Image</span>
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
