import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const shop = searchParams.get("shop");

  if (!code || !shop) {
    return Response.json({ error: "Paramètres manquants" }, { status: 400 });
  }

  return Response.json({ code, shop });
}