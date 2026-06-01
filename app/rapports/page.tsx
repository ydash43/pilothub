"use client";
import Sidebar from "../components/Sidebar";

const rapports = [
  {
    date: "Lundi 2 juin 2026",
    titre: "Rapport hebdomadaire — Semaine 23",
    resume: "Ventes en hausse de +18%. Stock critique sur 3 produits. ROAS Meta Ads à 3.2x.",
    recommandations: [
      "Réapprovisionner Produit A, D et F avant jeudi",
      "Augmenter le budget campagne #1 de 20%",
      "Surveiller la promo -20% du Concurrent C",
    ],
    score: "Bonne semaine",
    couleur: "green",
  },
  {
    date: "Lundi 26 mai 2026",
    titre: "Rapport hebdomadaire — Semaine 22",
    resume: "Ventes stables. Baisse du ROAS à 2.8x. Nouveau concurrent détecté sur le marché.",
    recommandations: [
      "Revoir le ciblage de la campagne Retargeting",
      "Analyser les prix du nouveau concurrent E",
      "Relancer les clients inactifs depuis 30 jours",
    ],
    score: "Semaine correcte",
    couleur: "yellow",
  },
];

export default function Rapports() {
  return (
    <div className="min-h-screen bg-[#0e0f11] text-white flex">
      <Sidebar />
      <main className="ml-56 flex-1 p-7">
        <h1 className="text-2xl font-semibold text-white">Rapports IA</h1>
        <p className="text-gray-400 mt-1 text-sm mb-6">Générés automatiquement chaque lundi</p>

        <div className="flex flex-col gap-5">
          {rapports.map((r) => (
            <div key={r.date} className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-purple-400 font-semibold tracking-widest mb-1">✦ RAPPORT IA</div>
                  <div className="text-lg font-semibold text-white">{r.titre}</div>
                  <div className="text-xs text-gray-500 mt-1">{r.date}</div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  r.couleur === "green" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"
                }`}>{r.score}</span>
              </div>

              <p className="text-sm text-gray-300 leading-7 mb-4">{r.resume}</p>

              <div className="bg-purple-500/10 border-l-2 border-purple-500 rounded-r-lg p-4">
                <div className="text-xs font-semibold text-purple-400 mb-2">💡 Recommandations</div>
                <ul className="flex flex-col gap-1.5">
                  {r.recommandations.map((rec, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">→</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}