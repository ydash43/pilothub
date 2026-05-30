export async function GET() {
  const store = process.env.SHOPIFY_STORE;
  const token = process.env.SHOPIFY_TOKEN;

  if (!store || !token) {
    return Response.json({ error: "Clés API manquantes" }, { status: 500 });
  }

  try {
    const [ordersRes, productsRes] = await Promise.all([
      fetch(`https://${store}/admin/api/2024-01/orders.json?status=any&limit=50`, {
        headers: { "X-Shopify-Access-Token": token },
      }),
      fetch(`https://${store}/admin/api/2024-01/products.json?limit=50`, {
        headers: { "X-Shopify-Access-Token": token },
      }),
    ]);

    const { orders } = await ordersRes.json();
    const { products } = await productsRes.json();

    const todaySales = orders
      .filter((o: any) => new Date(o.created_at).toDateString() === new Date().toDateString())
      .reduce((sum: number, o: any) => sum + parseFloat(o.total_price), 0);

    return Response.json({
      todaySales: todaySales.toFixed(2),
      totalOrders: orders.length,
      totalProducts: products.length,
    });

  } catch {
    return Response.json({ error: "Erreur API Shopify" }, { status: 500 });
  }
}