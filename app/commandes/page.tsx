"use client";
import Sidebar from "../components/Sidebar";

const commandes = [
  { id: "#1042", client: "Marie Dupont", produit: "Produit A x2", total: "89.90 €", statut: "Expédié", date: "01 juin" },
  { id: "#1041", client: "Thomas Martin", produit: "Produit B x1", total: "45.00 €", statut: "En cours", date: "01 juin" },
  { id: "#1040", client: "Sophie Bernard", produit: "Produit C x3", total: "134.70 €", statut: "En cours", date: "31 mai" },
  { id: "#1039", client: "Lucas Petit", produit: "Produit A x1", total: "44.95 €", statut: "Livré", date: "30 mai" },
  { id: "#1038", client: "Emma Leroy", produit: "Produit D x2", total: "67.80 €", statut: "Livré", date: "30 mai" },
  { id: "#1037", client: "Hugo Simon", produit: "Produit B x4", total: "180.00 €", statut: "Livré", date: "29 mai" },
];

export default function Commandes() {
  return (
    <div className="min-h-screen bg-[#0e0f11] text-white flex">
      <Sidebar />
      <main className="ml-56 flex-1 p-7">
        <h1 className="text-2xl font-semibold text-white">Commandes</h1>
        <p className="text-gray-400 mt-1 text-sm mb-6">14 commandes en cours</p>

        <div className="bg-[#16181c] border border-white/10 rounded-xl overflow-hidden">
          <div className="grid grid-cols-6 px-5 py-3 border-b border-white/10 text-xs text-gray-500 uppercase tracking-wider">
            <span>ID</span>
            <span>Client</span>
            <span>Produit</span>
            <span>Total</span>
            <span>Statut</span>
            <span>Date</span>
          </div>
          {commandes.map((c) => (
            <div key={c.id} className="grid grid-cols-6 px-5 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all text-sm">
              <span className="text-purple-400 font-mono">{c.id}</span>
              <span className="text-white">{c.client}</span>
              <span className="text-gray-400">{c.produit}</span>
              <span className="text-white font-mono">{c.total}</span>
              <span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  c.statut === "Livré" ? "bg-green-500/10 text-green-400" :
                  c.statut === "Expédié" ? "bg-blue-500/10 text-blue-400" :
                  "bg-orange-500/10 text-orange-400"
                }`}>{c.statut}</span>
              </span>
              <span className="text-gray-500">{c.date}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}