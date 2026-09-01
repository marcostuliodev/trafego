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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://orquideas.example.com";

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
 * - Analytics: delegação de eventos em [data-analytics-event] (CTAs) → dataLayer.
 * - FAQ: escuta `toggle` dos <details> e dispara faq_open.
 * - Sticky CTA: alterna visibilidade conforme o scroll (mobile).
 * Usam o padrão document.readyState para funcionar independentemente de
 * onde o navegador executa o script (head ou body).
 */
const inlineScripts = `
(function () {
  var dl = function () {
    return window.dataLayer || (window.dataLayer = []);
  };

  // Analytics — cliques em CTAs (data-analytics-event)
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-analytics-event]') : null;
    if (!el) return;
    var eventName = el.getAttribute('data-analytics-event');
    var id = el.id || '';
    dl().push({ event: eventName, cta_id: id });
    dl().push({ event: 'checkout_start', cta_id: id });
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

  function initSticky() {
    var bar = document.getElementById('sticky-cta');
    var desk = document.getElementById('sticky-cta-desktop');
    function toggle(el, visible) {
      if (!el) return;
      el.classList.toggle('is-visible', visible);
      el.setAttribute('aria-hidden', visible ? 'false' : 'true');
      if (visible) {
        el.removeAttribute('inert');
      } else {
        el.setAttribute('inert', '');
      }
    }
    function onScroll() {
      var visible = window.scrollY > window.innerHeight * 0.8;
      toggle(bar, visible);
      toggle(desk, visible);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function init() {
    initFaq();
    initSticky();
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect ao checkout externo (Hotmart) — reduz tempo de negociação TLS/DNS no clique */}
        <link rel="preconnect" href="https://pay.hotmart.com" />
        <link rel="dns-prefetch" href="https://pay.hotmart.com" />
        {/* LCP preload é injetado automaticamente pelo Next.js via fetchPriority="high" em Hero.
            Não duplicar aqui para evitar 2x download de hint (antes havia duplicata). */}
      </head>
      <body className="flex min-h-full flex-col bg-cream-50 font-sans text-ink-900">
        {children}
        <script dangerouslySetInnerHTML={{ __html: inlineScripts }} />
      </body>
    </html>
  );
}