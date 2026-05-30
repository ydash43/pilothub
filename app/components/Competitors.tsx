const competitors = [
  { name: "Concurrent A", status: "Nouveau produit", alert: true },
  { name: "Concurrent B", status: "Aucun changement", alert: false },
  { name: "Concurrent C", status: "Promo -20%", alert: true },
  { name: "Concurrent D", status: "Aucun changement", alert: false },
];

export default function Competitors() {
  return (
    <div className="bg-[#16181c] border border-white/10 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-sm font-semibold text-white">Veille concurrents</div>
          <div className="text-xs text-gray-500">2 alertes détectées</div>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">Auto</span>
      </div>
      <div className="flex flex-col divide-y divide-white/5">
        {competitors.map((c) => (
          <div key={c.name} className="flex items-center justify-between py-3">
            <div>
              <div className="text-sm font-medium text-white">{c.name}</div>
              <div className="text-xs text-gray-500 mt-0.5">{c.status}</div>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${c.alert ? "bg-orange-500/10 text-orange-400" : "bg-green-500/10 text-green-400"}`}>
              {c.alert ? "⚡ Alerte" : "✓ Stable"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}