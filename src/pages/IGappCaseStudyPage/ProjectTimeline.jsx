import React from "react";

const timelineItems = [
  { month: 1, label: "Discovery Phase", icon: "🔍" },
  { month: 2, label: "1st Design Ideation", icon: "🎨" },
  { month: 2, label: "MVP Release in UK", icon: "🚀" },
  { month: 3, label: "2nd Phase Design Ideation", icon: "✏️" },
  { month: 3, label: "Final Hi-Fi Design", icon: "🛠️" },
  { month: 4, label: "Design for other regions", icon: "⚙️" },
  { month: 4, label: "Hand-off", icon: "📦" },
];

export default function ProjectTimeline() {
  const colSpanMap = {
    1: "col-start-1",
    2: "col-start-2",
    3: "col-start-3",
    4: "col-start-4",
  };

  return (
    <div className="w-full overflow-x-auto my-8">
      <div className="min-w-[600px]">
        <div className="grid grid-cols-4 border-b border-dashed border-gray-300 pb-2 mb-4">
          {['Month 1', 'Month 2', 'Month 3', 'Month 4'].map((month) => (
            <div key={month} className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center">
              {month}
            </div>
          ))}
        </div>

        <div className="relative space-y-3">
          {timelineItems.map((item, index) => (
            <div key={index} className="grid grid-cols-4">
              <div className={`${colSpanMap[item.month]} flex items-center gap-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm w-fit`}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
