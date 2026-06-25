import React from "react";

export default function PullQuote({ children }) {
  return (
    <blockquote className="border-l-4 border-orange-500 pl-5 my-8 italic text-2xl leading-snug text-gray-800 font-light">
      {children}
    </blockquote>
  );
}
