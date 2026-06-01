"use client";
import Sidebar from "../components/Sidebar";

const produits = [
  { nom: "Produit A", sku: "SKU-001", stock: 4, prix: "44.95 €", statut: "Critique" },
  { nom: "Produit B", sku: "SKU-002", stock: 45, prix: "45.00 €", statut: "OK" },
  { nom: "Produit C", sku: "SKU-003", stock: 12, prix: "44.90 €", statut: "OK" },
  { nom: "Produit D", sku: "SKU-004", stock: 3, prix: "33.90 €", statut: "Critique" },
  { nom: "Produit E", sku: "SKU-005", stock: 28, prix: "59.99 €", statut: "OK" },
  { nom: "Produit F", sku: "SKU-006", stock: 2, prix: "29.99 €", statut: "Critique" },
];

export default function Produits() {
  return (
    <div className="min-h-screen bg-[#0e0f11] text-white flex">
      <Sidebar />
      <main className="ml-56 flex-1 p-7">
        <h1 className="text-2xl font-semibold text-white">Produits & Stock</h1>
        <p className="text-gray-400 mt-1 text-sm mb-6">3 produits en stock critique</p>

        <div className="bg-[#16181c] border border-white/10 rounded-xl overflow-hidden">
          <div className="grid grid-cols-5 px-5 py-3 border-b border-white/10 text-xs text-gray-500 uppercase tracking-wider">
            <span>Produit</span>
            <span>SKU</span>
            <span>Stock</span>
            <span>Prix</span>
            <span>Statut</span>
          </div>
          {produits.map((p) => (
            <div key={p.sku} className="grid grid-cols-5 px-5 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all text-sm">
              <span className="text-white font-medium">{p.nom}</span>
              <span className="text-gray-400 font-mono">{p.sku}</span>
              <span className={`font-mono ${p.stock <= 5 ? "text-red-400" : "text-white"}`}>{p.stock} unités</span>
              <span className="text-white font-mono">{p.prix}</span>
              <span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  p.statut === "Critique" ? "bg-red-500/10 text-red-400" : "bg-green-500/10 text-green-400"
                }`}>{p.statut}</span>
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}