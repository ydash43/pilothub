"use client";
import { useState } from "react";

const navItems = [
  { icon: "◻", label: "Vue d'ensemble", active: true },
  { icon: "📦", label: "Commandes", active: false },
  { icon: "🏷", label: "Produits & Stock", active: false },
  { icon: "📢", label: "Publicités", active: false },
  { icon: "✅", label: "Tâches", active: false },
  { icon: "👁", label: "Veille", active: false },
  { icon: "🤖", label: "Rapports IA", active: false },
];

export default function Sidebar() {
  const [active, setActive] = useState("Vue d'ensemble");

  return (
    <aside className="fixed top-0 left-0 h-screen w-56 bg-[#16181c] border-r border-white/10 flex flex-col py-6">
      <div className="px-5 pb-6 border-b border-white/10 mb-5">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-base mb-2">⚡</div>
        <div className="text-sm font-semibold text-white">PilotHub</div>
        <div className="text-xs text-gray-500 mt-0.5">Tableau de bord</div>
      </div>

      <nav className="flex-1 px-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm mb-1 transition-all ${
              active === item.label
                ? "bg-purple-600/20 text-purple-400"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span className="w-4 text-center">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-5 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-xs font-semibold text-white">AC</div>
          <div>
            <div className="text-xs font-medium text-white">Amine Chiakh</div>
            <div className="text-xs text-gray-500">Administrateur</div>
          </div>
        </div>
      </div>
    </aside>
  );
}