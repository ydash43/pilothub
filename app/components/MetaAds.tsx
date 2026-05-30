const stats = [
  { label: "Budget total", value: "595 €" },
  { label: "Impressions", value: "48 200" },
  { label: "Clics", value: "1 340" },
  { label: "Conversions", value: "87" },
  { label: "ROAS", value: "3.2x", green: true },
  { label: "Coût / conv.", value: "6.84 €" },
];

export default function MetaAds() {
  return (
    <div className="bg-[#16181c] border border-white/10 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-sm font-semibold text-white">Meta Ads</div>
          <div className="text-xs text-gray-500">Performance semaine</div>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">Actif</span>
      </div>
      <div className="flex flex-col divide-y divide-white/5">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center justify-between py-2.5 text-sm">
            <span className="text-gray-400">{s.label}</span>
            <span className={`font-mono font-medium ${s.green ? "text-green-400" : "text-white"}`}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}