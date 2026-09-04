import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ebook.especialorquideas.com";
const metaPixelId = "1825338818848282";
const clarityId = "";
const heroVariantFlag = "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Como Cultivar Orquídeas: Guia Prático para Iniciantes",
    template: "%s | Guia de Cultivo de Orquídeas",
  },
  description:
    "Aprenda os princípios básicos para cultivar orquídeas: ambiente, luminosidade, rega, adubação, substratos, pragas e fungos.",
  keywords: [
    "como cuidar de orquídeas",
    "como cultivar orquídeas",
    "cultivo de orquídeas",
    "cuidados com orquídeas",
    "rega de orquídeas",
    "luminosidade das orquídeas",
    "adubação de orquídeas",
    "substrato para orquídeas",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Guia de Cultivo de Orquídeas",
    title: "Como Cultivar Orquídeas: Guia Prático para Iniciantes",
    description:
      "Aprenda os princípios básicos para cultivar orquídeas: ambiente, luminosidade, rega, adubação, substratos, pragas e fungos.",
    // A imagem Open Graph é gerada automaticamente em build via src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Como Cultivar Orquídeas: Guia Prático para Iniciantes",
    description:
      "Aprenda os princípios básicos para cultivar orquídeas: ambiente, luminosidade, rega, adubação, substratos, pragas e fungos.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

/**
 * Scripts inline (vanilla, sem React) que substituem a hidratação client:
 * - Analytics: delegação de eventos em [data-analytics-event] (CTAs) → dataLayer + fbq.
 * - FAQ: escuta `toggle` dos <details> e dispara faq_open.
 * - Sticky CTA: renderizado e fixo desde o carregamento.
 * - ViewContent: IntersectionObserver na #oferta → dataLayer + fbq ViewContent (frio).
 * - Hero variant coin-flip 50/50 quando NEXT_PUBLIC_HERO_VARIANT não definido.
 * - (Removido) Lead/amostra grátis — não há mais evento lead/sample_cta_click.
 * Usam o padrão document.readyState para funcionar independentemente de
 * onde o navegador executa o script (head ou body).
 * Guard: sem libs, vanilla puro, strip-runtime mantido.
 */
const inlineScripts = `
(function () {
  var dl = function () {
    return window.dataLayer || (window.dataLayer = []);
  };

  // Analytics — cliques em CTAs (data-analytics-event) + fbq + Clarity
  // Mapeamento manual pros eventos padrão do Meta Pixel.
  function trackMetaEvent(eventName, payload) {
    var map = {
      hero_cta_click: 'InitiateCheckout',
      offer_cta_click: 'InitiateCheckout',
      final_cta_click: 'InitiateCheckout',
      checkout_start: 'InitiateCheckout',
      add_payment_info: 'AddPaymentInfo',
      add_to_cart: 'AddToCart',
      add_to_wishlist: 'AddToWishlist',
      complete_registration: 'CompleteRegistration',
      contact: 'Contact',
      customize_product: 'CustomizeProduct',
      donate: 'Donate',
      find_location: 'FindLocation',
      lead: 'Lead',
      purchase: 'Purchase',
      schedule: 'Schedule',
      search: 'Search',
      start_trial: 'StartTrial',
      submit_application: 'SubmitApplication',
      subscribe: 'Subscribe',
      view_content: 'ViewContent'
    };
    var standardEvent = map[eventName];
    if (!standardEvent || !window.fbq) return;
    window.fbq('track', standardEvent, payload || {});
  }

  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-analytics-event]') : null;
    if (!el) return;
    var eventName = el.getAttribute('data-analytics-event');
    var id = el.id || '';
    var payload = { content_name: 'Orquideas Ebook', value: 9.90, currency: 'BRL', cta_id: id };
    dl().push({ event: eventName, cta_id: id });
    dl().push({ event: 'checkout_start', cta_id: id });
    trackMetaEvent(eventName, payload);
    trackMetaEvent('checkout_start', payload);
  });

  function initFaq() {
    var items = document.querySelectorAll('details[data-question]');
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener('toggle', function () {
        if (this.open) {
          dl().push({ event: 'faq_open', question: this.getAttribute('data-question') });
        }
      });
    }
  }

  function initViewContent() {
    var offer = document.getElementById('oferta');
    if (!offer || !('IntersectionObserver' in window)) return;
    var fired = false;
    var obs = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting && !fired) {
          fired = true;
          dl().push({ event: 'view_content', content_name: 'offer', content_ids: ['ebook-orquideas-9-90'], value: 9.90, currency: 'BRL' });
          if (window.fbq) {
            window.fbq('track', 'ViewContent', { content_name: 'Orquideas Ebook', content_ids: ['ebook-orquideas-9-90'], value: 9.90, currency: 'BRL' });
          }
          try { obs.disconnect(); } catch (e) {}
        }
      }
    }, { threshold: 0.5 });
    try { obs.observe(offer); } catch (e) {}
  }

  function initHeroVariant() {
    var flag = document.documentElement.getAttribute('data-hero-variant') || '';
    if (flag === 'A' || flag === 'B') {
      dl().push({ event: 'hero_variant_view', variant: flag });
      return;
    }
    var stored = null;
    try { stored = localStorage.getItem('hero_variant'); } catch (e) {}
    var isB = stored ? stored === 'B' : Math.random() < 0.5;
    if (!stored) { try { localStorage.setItem('hero_variant', isB ? 'B' : 'A'); } catch (e) {} }
    if (isB) {
      var eyebrow = document.querySelector('[data-hero-eyebrow]');
      var headline = document.querySelector('[data-hero-headline]');
      var sub = document.querySelector('[data-hero-subheadline]');
      if (eyebrow && eyebrow.getAttribute('data-variant-b')) eyebrow.textContent = eyebrow.getAttribute('data-variant-b');
      if (headline && headline.getAttribute('data-variant-b')) headline.textContent = headline.getAttribute('data-variant-b');
      if (sub && sub.getAttribute('data-variant-b')) sub.textContent = sub.getAttribute('data-variant-b');
      dl().push({ event: 'hero_variant_view', variant: 'B' });
      if (window.fbq) window.fbq('trackCustom', 'HeroVariantView', { variant: 'B' });
    } else {
      dl().push({ event: 'hero_variant_view', variant: 'A' });
      if (window.fbq) window.fbq('trackCustom', 'HeroVariantView', { variant: 'A' });
    }
  }

  function init() {
    initFaq();
    initViewContent();
    initHeroVariant();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-hero-variant={heroVariantFlag}
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect ao checkout externo (Hotmart) — reduz tempo de negociação TLS/DNS no clique */}
        <link rel="preconnect" href="https://pay.hotmart.com" />
        <link rel="dns-prefetch" href="https://pay.hotmart.com" />
        {/* LCP preload é injetado automaticamente pelo Next.js via fetchPriority="high" em Hero.
            Não duplicar aqui para evitar 2x download de hint (antes havia duplicata). */}
        {/* Meta Pixel base — só carrega se NEXT_PUBLIC_META_PIXEL_ID definido (evita erro sem consentimento/ID) */}
        {metaPixelId ? (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');window.addEventListener('load', function(){ if (window.fbq) { window.fbq('init','${metaPixelId}'); window.fbq('track','PageView'); } });`,
              }}
            />
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height={1}
                width={1}
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        ) : null}
        {/* Microsoft Clarity — condicional via NEXT_PUBLIC_CLARITY_ID, vanilla, async, <2kb — Decisão 6 */}
        {clarityId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${clarityId}");`,
            }}
          />
        ) : null}
      </head>
      <body className="flex min-h-full flex-col bg-cream-50 font-sans text-ink-900">
        {children}
        <script dangerouslySetInnerHTML={{ __html: inlineScripts }} />
      </body>
    </html>
  );
}