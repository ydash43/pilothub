type Props = {
  icon: string;
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
};

export default function MetricCard({ icon, label, value, trend, trendUp }: Props) {
  return (
    <div className="bg-[#16181c] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="w-9 h-9 rounded-lg bg-purple-600/15 flex items-center justify-center text-base">
          {icon}
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-mono ${trendUp ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
          {trend}
        </span>
      </div>
      <div className="text-2xl font-semibold font-mono text-white mb-1">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}