import type { NextConfig } from "next";

// ============================================================
// Avisos de configuração em tempo de build.
// Evita ir a produção sem CHECKOUT_URL / SITE_URL / PRICE.
// ============================================================
if (process.env.NODE_ENV === "production") {
  if (!process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim()) {
    console.warn(
      "\n⚠️  [CONFIG] NEXT_PUBLIC_CHECKOUT_URL não definida! " +
        "Todos os CTAs apontarão para a âncora interna #oferta e NENHUMA compra será possível.\n" +
        "Defina a variável no ambiente de produção (veja .env.local.example).\n",
    );
  }
  if (!process.env.NEXT_PUBLIC_SITE_URL?.trim()) {
    console.warn(
      "\n⚠️  [CONFIG] NEXT_PUBLIC_SITE_URL não definida! " +
        "Canonical e Open Graph usarão o domínio placeholder (orquideas.example.com).\n" +
        "Defina a URL real do site (veja .env.local.example).\n",
    );
  }
  if (!process.env.NEXT_PUBLIC_PRICE?.trim()) {
    console.warn(
      "\n⚠️  [CONFIG] NEXT_PUBLIC_PRICE não definida! " +
        "A seção de oferta será exibida sem preço.\n" +
        "Defina o preço real do e-book (veja .env.local.example).\n",
    );
  }
}

const nextConfig: NextConfig = {
  // Static export — permite deploy em qualquer hospedagem estática (Vercel, Netlify, Nginx, etc.)
  output: "export",
  trailingSlash: true,
  images: {
    // Landing page 100% estática: imagens servidas como estão em /public.
    // Para fotos de produção, comprimir antes de adicionar (WebP/AVIF).
    unoptimized: true,
  },
};

export default nextConfig;