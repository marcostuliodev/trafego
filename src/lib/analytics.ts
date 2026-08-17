/**
 * Camada de analytics — preparada para Google Tag Manager / GA4.
 *
 * Todos os eventos são empurrados para `window.dataLayer` com a chave `event`,
 * o padrão esperado pelo GTM. IDs/classes consistentes nos CTAs facilitam
 * a criação de triggers no GTM sem alterar o código.
 *
 * Eventos previstos:
 * - page_view
 * - hero_cta_click
 * - content_cta_click
 * - offer_cta_click
 * - final_cta_click
 * - faq_open
 * - checkout_start
 * - purchase
 */

export type AnalyticsEvent =
  | "page_view"
  | "hero_cta_click"
  | "content_cta_click"
  | "offer_cta_click"
  | "final_cta_click"
  | "sticky_cta_click"
  | "faq_open"
  | "checkout_start"
  | "purchase";

type DataLayer = Array<Record<string, unknown>>;

declare global {
  interface Window {
    dataLayer?: DataLayer;
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  properties: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  const dataLayer = window.dataLayer || (window.dataLayer = []);
  dataLayer.push({ event, ...properties });
}
