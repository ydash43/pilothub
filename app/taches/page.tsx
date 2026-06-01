"use client";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Vérifier les commandes", done: true, tag: "Urgent", date: "Aujourd'hui" },
  { id: 2, text: "Relancer fournisseur produit A", done: false, tag: "Urgent", date: "Aujourd'hui" },
  { id: 3, text: "Lancer campagne Meta #2", done: false, tag: "Cette semaine", date: "03 juin" },
  { id: 4, text: "Répondre aux avis clients", done: false, tag: "Cette semaine", date: "04 juin" },
  { id: 5, text: "Analyser les stats pub", done: false, tag: "Cette semaine", date: "05 juin" },
];

export default function Taches() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [newDate, setNewDate] = useState("");

  const toggle = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, {
      id: Date.now(),
      text: newTask,
      done: false,
      tag: "Cette semaine",
      date: newDate || "À définir"
    }]);
    setNewTask("");
    setNewDate("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0e0f11] text-white flex">
      <Sidebar />
      <main className="ml-56 flex-1 p-7">
        <h1 className="text-2xl font-semibold text-white">Tâches</h1>
        <p className="text-gray-400 mt-1 text-sm mb-6">{tasks.filter(t => t.done).length} / {tasks.length} complétées</p>

        <div className="bg-[#16181c] border border-white/10 rounded-xl p-5 mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Nouvelle tâche..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              className="flex-1 bg-[#0e0f11] border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500"
            />
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="bg-[#0e0f11] border border-white/10 rounded-lg px-4 py-2 text-sm text-white outline-none focus:border-purple-500"
            />
            <button
              onClick={addTask}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-all"
            >
              + Ajouter
            </button>
          </div>
        </div>

        <div className="bg-[#16181c] border border-white/10 rounded-xl p-5">
          {tasks.map((t) => (
            <div key={t.id} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
              <button
                onClick={() => toggle(t.id)}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${t.done ? "bg-green-500 border-green-500 text-white text-xs" : "border-white/20"}`}
              >
                {t.done && "✓"}
              </button>
              <span className={`flex-1 text-sm ${t.done ? "line-through text-gray-500" : "text-white"}`}>{t.text}</span>
              <span className="text-xs text-gray-500">{t.date}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${t.tag === "Urgent" ? "bg-red-500/10 text-red-400" : "bg-blue-500/10 text-blue-400"}`}>
                {t.tag}
              </span>
              <button onClick={() => deleteTask(t.id)} className="text-gray-500 hover:text-red-400 text-xs transition-all">✕</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}