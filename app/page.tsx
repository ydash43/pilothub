"use client";
import Sidebar from "./components/Sidebar";
import MetricCard from "./components/MetricCard";
import SalesChart from "./components/SalesChart";
import MetaAds from "./components/MetaAds";
import Tasks from "./components/Tasks";
import AIReport from "./components/AIReport";
import Competitors from "./components/Competitors";

const metrics = [
  { icon: "🛍", label: "Ventes du jour", value: "1 240 €", trend: "+18%", trendUp: true },
  { icon: "📦", label: "Stock critique", value: "3", trend: "3 alertes", trendUp: false },
  { icon: "📢", label: "Budget pub dépensé", value: "85 €", trend: "ROAS 3.2x", trendUp: true },
  { icon: "🛒", label: "Commandes en cours", value: "14", trend: "+5%", trendUp: true },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0f11] text-white flex">
      <Sidebar />
      <main className="ml-56 flex-1 p-7">
        <h1 className="text-2xl font-semibold text-white">Vue d'ensemble</h1>
        <p className="text-gray-400 mt-1 text-sm mb-6">Lundi 2 juin 2026 · Mis à jour il y a 3 min</p>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2">
            <SalesChart />
          </div>
          <div>
            <MetaAds />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Tasks />
          </div>
          <div>
            <Competitors />
          </div>
          <AIReport />
        </div>
      </main>
    </div>
  );
}