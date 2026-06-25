import React from "react";

const findings = [
  { label: "Current Tier Display:", desc: "Shows the user's current rebate tier (e.g., Tier 1, Tier 2), giving a sense of status and progression." },
  { label: "Next Tier Goal:", desc: "Clearly indicates how much more trading volume is needed to reach the next tier, adding a gamified goal-oriented element." },
  { label: "Real-Time Progress Bar:", desc: "A dynamic visual tracker updates instantly as users trade, offering immediate feedback and enhancing motivation." },
  { label: "Rebate Amount Earned:", desc: "Displays the total cashback earned so far (in currency or percentage), reinforcing the value of the program and driving continued engagement." },
  { label: "User Impact:", desc: "Users described this combination as giving them \"a sense of control and clarity,\" turning the rebate from a passive benefit into an active motivator." },
  { label: "Rebate Calculation:", desc: "Users described this combination as giving them \"a sense of control and clarity,\" turning the rebate into an active motivator." },
];

export default function FindingsList() {
  return (
    <ul className="space-y-3 mb-8 pl-1">
      {findings.map((item, index) => (
        <li key={index} className="flex gap-2 text-base text-gray-700">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5" />
          <span>
            <strong>{item.label}</strong> {item.desc}
          </span>
        </li>
      ))}
    </ul>
  );
}
