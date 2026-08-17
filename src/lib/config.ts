/**
 * Configuração central do produto.
 *
 * IMPORTANTE:
 * - CHECKOUT_URL: URL real do checkout (defina via NEXT_PUBLIC_CHECKOUT_URL).
 *   Nunca hardcodar a URL de checkout em múltiplos componentes — sempre passar por aqui.
 * - PRICE: preço real do e-book (defina via NEXT_PUBLIC_PRICE).
 *   O preço só aparece na página quando configurado.
 * - SITE_URL: URL pública do site (para SEO/canonical).
 */

const DEFAULT_CHECKOUT_URL = "#oferta";

export const checkoutUrl: string =
  process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim() || DEFAULT_CHECKOUT_URL;

export const price: string | null = process.env.NEXT_PUBLIC_PRICE?.trim() || null;

export const siteUrl: string =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://orquideas.example.com";

/** O link do checkout é uma âncora interna (fallback de desenvolvimento)? */
export const isInternalCheckout = checkoutUrl.startsWith("#");
