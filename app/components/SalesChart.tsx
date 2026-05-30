"use client";
import { useState } from "react";

const data = {
  "7j": { labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], values: [820, 950, 1100, 870, 1240, 990, 1240] },
  "30j": { labels: ["S1", "S2", "S3", "S4"], values: [6200, 7100, 8400, 7800] },
};

export default function SalesChart() {
  const [period, setPeriod] = useState("7j");
  const current = data[period as keyof typeof data];
  const max = Math.max(...current.values);

  return (
    <div className="bg-[#16181c] border border-white/10 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-sm font-semibold text-white">Ventes</div>
          <div className="text-xs text-gray-500">Données Shopify</div>
        </div>
        <div className="flex gap-1">
          {["7j", "30j"].map((p) => (
            <button key={p} onClick={() => setPeriod(p)}
              className={`px-3 py-1 rounded-lg text-xs transition-all ${period === p ? "bg-[#2a2d35] text-white" : "text-gray-500 hover:text-white"}`}>
              {p}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-end gap-2" style={{ height: "160px" }}>
        {current.values.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full bg-purple-600/40 rounded-t-md hover:bg-purple-500/60 transition-all"
              style={{ height: `${(v / max) * 140}px` }}
            />
            <span className="text-xs text-gray-500">{current.labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}