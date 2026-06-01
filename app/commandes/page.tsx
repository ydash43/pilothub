"use client";
import Sidebar from "../components/Sidebar";

export default function Commandes() {
  return (
    <div className="min-h-screen bg-[#0e0f11] text-white flex">
      <Sidebar />
      <main className="ml-56 flex-1 p-7">
        <h1 className="text-2xl font-semibold text-white">Commandes</h1>
        <p className="text-gray-400 mt-1 text-sm mb-6">14 commandes en cours</p>
        <div className="bg-[#16181c] border border-white/10 rounded-xl p-5">
          <p className="text-gray-400 text-sm">Module en cours de développement...</p>
        </div>
      </main>
    </div>
  );
}