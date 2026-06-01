export async function GET() {
  const store = process.env.SHOPIFY_STORE;
  const token = process.env.SHOPIFY_TOKEN;

  if (!store || !token) {
    return Response.json({ error: "Clés API manquantes" }, { status: 500 });
  }

  try {
    const response = await fetch(`https://${store}/admin/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": token,
      },
      body: JSON.stringify({
        query: `{
          orders(first: 10) {
            edges {
              node {
                id
                totalPriceSet { shopMoney { amount } }
                createdAt
              }
            }
          }
          products(first: 10) {
            edges {
              node { id title }
            }
          }
        }`
      }),
    });

    const data = await response.json();
    return Response.json(data);

  } catch {
    return Response.json({ error: "Erreur API Shopify" }, { status: 500 });
  }
}