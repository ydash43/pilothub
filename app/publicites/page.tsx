"use client";
import Sidebar from "../components/Sidebar";

const campagnes = [
  { nom: "Campagne Printemps", budget: "200 €", depense: "185 €", clics: 542, conversions: 28, roas: "3.8x", statut: "Active" },
  { nom: "Retargeting", budget: "100 €", depense: "98 €", clics: 318, conversions: 19, roas: "2.9x", statut: "Active" },
  { nom: "Prospection", budget: "150 €", depense: "112 €", clics: 480, conversions: 40, roas: "3.1x", statut: "Active" },
  { nom: "Soldes Hiver", budget: "300 €", depense: "300 €", clics: 920, conversions: 67, roas: "4.2x", statut: "Terminée" },
];

export default function Publicites() {
  return (
    <div className="min-h-screen bg-[#0e0f11] text-white flex">
      <Sidebar />
      <main className="ml-56 flex-1 p-7">
        <h1 className="text-2xl font-semibold text-white">Publicités</h1>
        <p className="text-gray-400 mt-1 text-sm mb-6">Meta Ads — Performance des campagnes</p>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Budget total", value: "595 €" },
            { label: "Total clics", value: "1 340" },
            { label: "Conversions", value: "87" },
            { label: "ROAS moyen", value: "3.2x" },
          ].map((m) => (
            <div key={m.label} className="bg-[#16181c] border border-white/10 rounded-xl p-5">
              <div className="text-xs text-gray-500 mb-2">{m.label}</div>
              <div className="text-2xl font-semibold font-mono text-white">{m.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#16181c] border border-white/10 rounded-xl overflow-hidden">
          <div className="grid grid-cols-7 px-5 py-3 border-b border-white/10 text-xs text-gray-500 uppercase tracking-wider">
            <span className="col-span-2">Campagne</span>
            <span>Budget</span>
            <span>Dépensé</span>
            <span>Clics</span>
            <span>ROAS</span>
            <span>Statut</span>
          </div>
          {campagnes.map((c) => (
            <div key={c.nom} className="grid grid-cols-7 px-5 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all text-sm">
              <span className="col-span-2 text-white font-medium">{c.nom}</span>
              <span className="text-gray-400 font-mono">{c.budget}</span>
              <span className="text-white font-mono">{c.depense}</span>
              <span className="text-white font-mono">{c.clics}</span>
              <span className="text-green-400 font-mono">{c.roas}</span>
              <span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  c.statut === "Active" ? "bg-green-500/10 text-green-400" : "bg-gray-500/10 text-gray-400"
                }`}>{c.statut}</span>
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}