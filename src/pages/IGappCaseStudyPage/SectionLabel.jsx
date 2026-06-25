import React from "react";

export default function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 border border-gray-300 inline-block px-2 py-0.5 rounded-sm">
      {children}
    </p>
  );
}
