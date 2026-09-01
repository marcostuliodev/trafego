/**
 * Configuração central do produto.
 *
 * IMPORTANTE:
 * - CHECKOUT_URL: URL real do checkout (defina via NEXT_PUBLIC_CHECKOUT_URL).
 *   Nunca hardcodar a URL de checkout em múltiplos componentes — sempre passar por aqui.
 * - PRICE: preço fixo do e-book. Default R$ 9,90 (ticket impulso). Sobrescreva via NEXT_PUBLIC_PRICE.
 * - SITE_URL: URL pública do site (para SEO/canonical).
 * - ENABLE_BUNDLE: feature flag para bundle/upsell no site (default false).
 *   Estratégia low-ticket: manter oferta única enxuta no site + order bump no Hotmart.
 *   Quando ENABLE_BUNDLE=true, Offer exibe card duplo (Solo vs Kit).
 */

const DEFAULT_CHECKOUT_URL = "https://pay.hotmart.com/H107166000P";

/** Preço padrão — fixo R$ 9,90 conforme determinação stakeholder. */
const DEFAULT_PRICE = "R$ 9,90";

export const checkoutUrl: string =
  process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim() || DEFAULT_CHECKOUT_URL;

export const price: string =
  process.env.NEXT_PUBLIC_PRICE?.trim() || DEFAULT_PRICE;

/** Preço do bundle/upsell futuro (order bump Hotmart). */
export const bundlePrice: string =
  process.env.NEXT_PUBLIC_BUNDLE_PRICE?.trim() || "R$ 19,90";

export const siteUrl: string =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://ebook.especialorquideas.com.br";

/** O link do checkout é uma âncora interna (fallback de desenvolvimento)? */
export const isInternalCheckout = checkoutUrl.startsWith("#");

/**
 * Feature flag: habilita oferta em bundle no site.
 * Default: false — mantém conversão máxima no ticket R$9,90.
 * Trade-off documentado em src/components/Offer.tsx e DECISIONS.md
 * Para ativar: NEXT_PUBLIC_ENABLE_BUNDLE=true
 */
export const enableBundle: boolean =
  process.env.NEXT_PUBLIC_ENABLE_BUNDLE?.trim() === "true";
