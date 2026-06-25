import React from "react";

const uiPatterns = [
  { label: "Pop-ups", desc: "Great for ", bold: "grabbing attention", rest: ", but risked feeling ", bold2: "interruptive", rest2: "." },
  { label: "Modals", desc: "Allowed for ", bold: "guided walkthroughs", rest: ", but didn't suit ", bold2: "frequent interactions", rest2: "." },
  { label: "Full dashboards", desc: "Provided ", bold: "depth", rest: " but lacked ", bold2: "daily visibility", rest2: "." },
  { label: "Inline cards", desc: "Lightweight and persistent, offering ", bold: "at-a-glance updates", rest: " without disrupting flow.", bold2: "", rest2: "" },
  { label: "Chart View", desc: "Explored as a ", bold: "visual breakdown", rest: " of instrument-level contributions. While ", bold2: "engaging", rest2: ", it worked better as a secondary element in the detailed view rather than a primary layout." },
];

export default function UIPatternList() {
  return (
    <ul className="space-y-3 mb-8 pl-1">
      {uiPatterns.map((pattern, index) => (
        <li key={index} className="flex gap-2 text-base text-gray-700">
          <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5" />
          <span>
            <strong>{pattern.label}</strong> – {pattern.desc}
            {pattern.bold && <strong>{pattern.bold}</strong>}
            {pattern.rest}
            {pattern.bold2 && <strong>{pattern.bold2}</strong>}
            {pattern.rest2}
          </span>
        </li>
      ))}
    </ul>
  );
}
