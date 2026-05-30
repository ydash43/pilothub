export default function AIReport() {
  return (
    <div className="col-span-2 bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-semibold tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">✦ RAPPORT IA · LUNDI</span>
      </div>
      <p className="text-sm text-gray-300 leading-7">
        Cette semaine, tes ventes ont progressé de <strong className="text-white">+18%</strong> — bonne dynamique. 
        Le produit A est en <strong className="text-white">stock critique</strong> (4 unités), réapprovisionne avant jeudi pour éviter une rupture.
      </p>
      <div className="mt-4 p-3 bg-purple-500/10 border-l-2 border-purple-500 rounded-r-lg text-sm text-gray-300 leading-6">
        💡 <strong className="text-white">Recommandation :</strong> Augmenter le budget de la campagne #1 de 20% cette semaine. 
        Le concurrent C a lancé une promo — surveiller l'impact sur tes conversions.
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span>Généré automatiquement · lundi 2 juin 2026</span>
        <span className="text-purple-400 cursor-pointer hover:text-purple-300">Voir rapport complet →</span>
      </div>
    </div>
  );
}