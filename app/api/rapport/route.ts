export async function POST() {
  const rapport = {
    resume: "Cette semaine, les ventes ont progressé de +18% pour atteindre 7 210€. Les campagnes Meta Ads affichent un ROAS de 3.2x, au-dessus du seuil rentable. 3 produits sont en stock critique et nécessitent un réapprovisionnement urgent.",
    points_positifs: [
      "Ventes en hausse de +18% vs semaine dernière",
      "ROAS Meta Ads à 3.2x — campagnes rentables",
      "87 conversions générées cette semaine"
    ],
    points_attention: [
      "3 produits en stock critique (A, D, F)",
      "Le concurrent C a lancé une promo -20%"
    ],
    recommandations: [
      "Réapprovisionner Produit A, D et F avant jeudi",
      "Augmenter le budget campagne #1 de 20%",
      "Surveiller l'impact de la promo concurrent C sur les conversions"
    ],
    score: "Bonne semaine"
  };

  return Response.json(rapport);
}