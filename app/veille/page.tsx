"use client";
import Sidebar from "../components/Sidebar";

const concurrents = [
  { nom: "Concurrent A", site: "concurrent-a.com", changement: "Nouveau produit lancé", type: "Produit", date: "01 juin", alerte: true },
  { nom: "Concurrent B", site: "concurrent-b.com", changement: "Aucun changement détecté", type: "—", date: "01 juin", alerte: false },
  { nom: "Concurrent C", site: "concurrent-c.com", changement: "Promotion -20% lancée", type: "Prix", date: "31 mai", alerte: true },
  { nom: "Concurrent D", site: "concurrent-d.com", changement: "Aucun changement détecté", type: "—", date: "31 mai", alerte: false },
  { nom: "Concurrent E", site: "concurrent-e.com", changement: "Nouvelle publicité Meta", type: "Pub", date: "30 mai", alerte: true },
];

const tendances = [
  { mot: "produit naturel", volume: "12 400", evolution: "+34%", alerte: true },
  { mot: "livraison rapide", volume: "8 200", evolution: "+12%", alerte: false },
  { mot: "eco responsable", volume: "6 800", evolution: "+28%", alerte: true },
  { mot: "made in france", volume: "5 100", evolution: "+8%", alerte: false },
];

export default function Veille() {
  return (
    <div className="min-h-screen bg-[#0e0f11] text-white flex">
      <Sidebar />
      <main className="ml-56 flex-1 p-7">
        <h1 className="text-2xl font-semibold text-white">Veille concurrentielle</h1>
        <p className="text-gray-400 mt-1 text-sm mb-6">3 alertes détectées cette semaine</p>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-sm font-semibold text-white mb-3">Concurrents suivis</h2>
            <div className="bg-[#16181c] border border-white/10 rounded-xl overflow-hidden">
              {concurrents.map((c) => (
                <div key={c.nom} className="flex items-center justify-between px-5 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all">
                  <div>
                    <div className="text-sm font-medium text-white">{c.nom}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{c.changement}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500">{c.date}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${c.alerte ? "bg-orange-500/10 text-orange-400" : "bg-green-500/10 text-green-400"}`}>
                      {c.alerte ? "⚡ Alerte" : "✓ Stable"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white mb-3">Tendances du marché</h2>
            <div className="bg-[#16181c] border border-white/10 rounded-xl overflow-hidden">
              {tendances.map((t) => (
                <div key={t.mot} className="flex items-center justify-between px-5 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all">
                  <div>
                    <div className="text-sm font-medium text-white">{t.mot}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{t.volume} recherches/mois</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono ${t.alerte ? "text-green-400" : "text-gray-400"}`}>{t.evolution}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${t.alerte ? "bg-green-500/10 text-green-400" : "bg-gray-500/10 text-gray-400"}`}>
                      {t.alerte ? "↑ Tendance" : "Stable"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}