"use client";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Rapports() {
  const [rapport, setRapport] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const genererRapport = async () => {
    setLoading(true);
    const res = await fetch("/api/rapport", { method: "POST" });
    const data = await res.json();
    setRapport(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0e0f11] text-white flex">
      <Sidebar />
      <main className="ml-56 flex-1 p-7">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-white">Rapports IA</h1>
            <p className="text-gray-400 mt-1 text-sm">Générés automatiquement chaque lundi</p>
          </div>
          <button
            onClick={genererRapport}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
          >
            {loading ? "Génération en cours..." : "✦ Générer un rapport"}
          </button>
        </div>

        {!rapport && !loading && (
          <div className="bg-[#16181c] border border-white/10 rounded-xl p-10 text-center">
            <div className="text-4xl mb-4">🤖</div>
            <p className="text-gray-400 text-sm">Clique sur "Générer un rapport" pour analyser les données de la semaine</p>
          </div>
        )}

        {loading && (
          <div className="bg-[#16181c] border border-white/10 rounded-xl p-10 text-center">
            <div className="text-4xl mb-4 animate-spin">⚙️</div>
            <p className="text-gray-400 text-sm">Analyse en cours...</p>
          </div>
        )}

        {rapport && (
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs text-purple-400 font-semibold tracking-widest mb-1">✦ RAPPORT IA</div>
                <div className="text-lg font-semibold text-white">Rapport hebdomadaire</div>
                <div className="text-xs text-gray-500 mt-1">{new Date().toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400">{rapport.score}</span>
            </div>

            <p className="text-sm text-gray-300 leading-7 mb-4">{rapport.resume}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                <div className="text-xs font-semibold text-green-400 mb-2">✅ Points positifs</div>
                <ul className="flex flex-col gap-1.5">
                  {rapport.points_positifs.map((p: string, i: number) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-green-400">+</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
                <div className="text-xs font-semibold text-orange-400 mb-2">⚠️ Points d'attention</div>
                <ul className="flex flex-col gap-1.5">
                  {rapport.points_attention.map((p: string, i: number) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-orange-400">!</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-purple-500/10 border-l-2 border-purple-500 rounded-r-lg p-4">
              <div className="text-xs font-semibold text-purple-400 mb-2">💡 Recommandations</div>
              <ul className="flex flex-col gap-1.5">
                {rapport.recommandations.map((r: string, i: number) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-purple-400">→</span>{r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}