"use client";
import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Vérifier les commandes", done: true, tag: "Fait", urgent: false },
  { id: 2, text: "Relancer fournisseur produit A", done: false, tag: "Urgent", urgent: true },
  { id: 3, text: "Lancer campagne Meta #2", done: false, tag: "Aujourd'hui", urgent: false },
  { id: 4, text: "Répondre aux avis clients", done: false, tag: "Aujourd'hui", urgent: false },
];

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggle = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="bg-[#16181c] border border-white/10 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-sm font-semibold text-white">Tâches du jour</div>
          <div className="text-xs text-gray-500">{tasks.filter(t => t.done).length} / {tasks.length} complétées</div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {tasks.map((t) => (
          <div key={t.id} className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
            <button
              onClick={() => toggle(t.id)}
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${t.done ? "bg-green-500 border-green-500 text-white text-xs" : "border-white/20"}`}
            >
              {t.done && "✓"}
            </button>
            <span className={`flex-1 text-sm ${t.done ? "line-through text-gray-500" : "text-white"}`}>{t.text}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${t.urgent ? "bg-red-500/10 text-red-400" : t.done ? "bg-white/5 text-gray-500" : "bg-blue-500/10 text-blue-400"}`}>
              {t.done ? "Fait" : t.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}