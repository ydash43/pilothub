"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: "◻", label: "Vue d'ensemble", href: "/" },
  { icon: "📦", label: "Commandes", href: "/commandes" },
  { icon: "🏷", label: "Produits & Stock", href: "/produits" },
  { icon: "📢", label: "Publicités", href: "/publicites" },
  { icon: "✅", label: "Tâches", href: "/taches" },
  { icon: "👁", label: "Veille", href: "/veille" },
  { icon: "🤖", label: "Rapports IA", href: "/rapports" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-56 bg-[#16181c] border-r border-white/10 flex flex-col py-6">
      <div className="px-5 pb-6 border-b border-white/10 mb-5">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-base mb-2">⚡</div>
        <div className="text-sm font-semibold text-white">PilotHub</div>
        <div className="text-xs text-gray-500 mt-0.5">Tableau de bord</div>
      </div>

      <nav className="flex-1 px-3">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm mb-1 transition-all ${
              pathname === item.href
                ? "bg-purple-600/20 text-purple-400"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span className="w-4 text-center">{item.icon}</span>
            {item.label}
          </Link>
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