import React from "react";

export default function UAERebateCard() {
  return (
    <div className="rounded-xl bg-gray-100 p-6 mb-2">
      <p className="text-xs text-gray-400 uppercase tracking-widest text-center mb-4">UAE Version</p>
      <div className="max-w-xs mx-auto bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <div>
            <p className="text-sm font-semibold text-gray-900">Cash Rebate July</p>
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 rounded-full px-2 py-0.5">10 days to go</span>
        </div>

        <div className="flex border-b border-gray-200 px-4">
          <button className="text-xs font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mr-4">Main rebate</button>
          <button className="text-xs text-gray-400 pb-2">Shares rebate</button>
        </div>

        <div className="px-4 py-3 space-y-1">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-xs text-gray-400">Notional Amount Traded</p>
              <p className="text-base font-bold text-gray-900">$88,456,997</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Cash Rebate (estimated)</p>
              <p className="text-base font-bold text-gray-900">
                $8,456,997 <span className="text-gray-400 font-normal text-xs">ⓘ</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Tier 3</span>
            <span>Target: $100M</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "85%" }} />
          </div>
          <p className="text-xs text-gray-400 pt-1">Trade an additional $11,554,003 notional to access tier 4 rebates.</p>
        </div>

        <div className="border-t border-gray-100 px-4 py-2 flex items-center justify-between">
          <span className="text-xs text-gray-700">View our cash rebate scheme</span>
          <span className="text-gray-400 text-xs">›</span>
        </div>
      </div>

      <p className="text-center mt-4 text-xs italic text-blue-500">
        As UAE Rebate program is different for Shares and other instruments so we added a tab switch to see the details.
      </p>
    </div>
  );
}
