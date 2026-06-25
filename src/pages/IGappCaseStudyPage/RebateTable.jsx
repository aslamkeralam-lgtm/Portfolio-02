import React from "react";

const rebateRows = [
  { tier: 1, trade: 10, index: 1, fx: 1, bonds: 5, gold: 5, energies: 10, metals: 20, crypto: 20, softComm: 20 },
  { tier: 2, trade: 25, index: 2, fx: 2, bonds: 7, gold: 7, energies: 14, metals: 40, crypto: 40, softComm: 40 },
  { tier: 3, trade: 50, index: 2, fx: 5, bonds: 10, gold: 10, energies: 18, metals: 60, crypto: 60, softComm: 60 },
  { tier: 4, trade: 100, index: 5, fx: 7, bonds: 12, gold: 12, energies: 22, metals: 70, crypto: 70, softComm: 70 },
  { tier: 5, trade: 200, index: 7, fx: 10, bonds: 15, gold: 15, energies: 25, metals: 75, crypto: 75, softComm: 75 },
];

export default function RebateTable() {
  const headers = [
    "Tier",
    "Trade Above (Notional £m)",
    "Index",
    "FX",
    "Bonds",
    "Gold",
    "Energies",
    "Metals",
    "Crypto",
    "Soft Commodities",
  ];

  return (
    <div className="my-8 rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
        <p className="text-center text-sm font-medium text-blue-600 italic">
          Volume Based Rebates for different instruments
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-center">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {headers.map((header) => (
                <th key={header} className="px-3 py-2.5 font-semibold text-gray-600 text-xs">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rebateRows.map((row, index) => (
              <tr key={index} className={`border-b border-gray-100 ${index % 2 === 1 ? "bg-gray-50/50" : "bg-white"}`}>
                <td className="px-3 py-2.5 font-medium text-gray-700">{row.tier}</td>
                <td className="px-3 py-2.5 text-gray-600">{row.trade}</td>
                <td className="px-3 py-2.5 text-gray-600">{row.index}</td>
                <td className="px-3 py-2.5 text-gray-600">{row.fx}</td>
                <td className="px-3 py-2.5 text-gray-600">{row.bonds}</td>
                <td className="px-3 py-2.5 text-gray-600">{row.gold}</td>
                <td className="px-3 py-2.5 text-gray-600">{row.energies}</td>
                <td className="px-3 py-2.5 text-gray-600">{row.metals}</td>
                <td className="px-3 py-2.5 text-gray-600">{row.crypto}</td>
                <td className="px-3 py-2.5 text-gray-600">{row.softComm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-xs text-gray-400 py-2 border-t border-gray-100">
        Payment amounts are £/m traded
      </p>
    </div>
  );
}
