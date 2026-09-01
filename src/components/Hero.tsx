import { hero, heroVariantB } from "@/data/content";
import { price, anchorPrice } from "@/lib/config";
import { CTAButton } from "@/components/cta-button";
import { TrustBadges } from "@/components/TrustBadges";

/**
 * SEÇÃO 1 — HERO (primeira dobra)
 * Fundo verde profundo, mockup do e-book com leve perspectiva,
 * flor decorativa ao fundo. CTA dourado acima da dobra.
 *
 * Removido CTA secundário "BAIXAR AMOSTRA GRÁTIS (CAP. 2)" a pedido do stakeholder.
 * Mantido apenas CTA primário "QUERO MEU E-BOOK POR R$9,90" + badge preço + TrustBadges.
 *
 * VARIANTE B (frio): eyebrow alerta + headline dor Phalaenopsis/Cattleya.
 * Feature flag: NEXT_PUBLIC_HERO_VARIANT = 'A' | 'B' | undefined (50/50).
 */
function getHeroContent() {
  const flag = (process.env.NEXT_PUBLIC_HERO_VARIANT || "").trim().toUpperCase();
  if (flag === "B") return heroVariantB;
  if (flag === "A") return hero;
  return hero;
}

export function Hero() {
  const content = getHeroContent();
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-forest-950"
    >
      {/* Fundo: gradiente profundo + brilho radial sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(42,87,57,0.55),transparent_55%),linear-gradient(160deg,#0a1d12_0%,#163523_55%,#0c2013_100%)]"
      />
      {/* Flor decorativa ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.14] lg:block"
      >
        <img
          src="/images/orchid-flower.svg"
          alt=""
          width={560}
          height={560}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-24">
        {/* Coluna de texto */}
        <div className="flex flex-col items-start gap-6 text-left">
          <p
            data-hero-eyebrow
            data-variant-a={hero.eyebrow}
            data-variant-b={heroVariantB.eyebrow}
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-300"
          >
            {content.eyebrow}
          </p>

          <h1
            id="hero-title"
            data-hero-headline
            data-variant-a={hero.headline}
            data-variant-b={heroVariantB.headline}
            className="font-serif text-4xl leading-[1.12] text-cream-50 sm:text-5xl lg:text-[3.6rem]"
          >
            {content.headline}
          </h1>

          <p
            data-hero-subheadline
            data-variant-a={hero.subheadline}
            data-variant-b={heroVariantB.subheadline}
            className="max-w-xl text-base leading-relaxed text-forest-100/85 sm:text-lg"
          >
            {content.subheadline}
          </p>

          {/* Preço acima da dobra — ancoragem De R$47 → R$9,90 */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-sm font-medium tracking-wide text-forest-200/50 line-through" aria-label={`Preço original ${anchorPrice}`}>
              De {anchorPrice}
            </span>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gold-300">por apenas</span>
              <span className="font-serif text-xl font-bold text-gold-300" aria-label={`Preço ${price}`}>
                {price}
              </span>
              <span className="hidden text-xs text-forest-200/60 sm:inline">• acesso imediato</span>
            </div>
            <p className="text-xs text-forest-200/60 sm:text-sm">Pagamento único • Garantia 7 dias • Pagamento 100% seguro</p>
          </div>

          <div className="mt-1 flex w-full flex-col items-start gap-3 sm:w-auto">
            <CTAButton
              id="cta-hero"
              eventName="hero_cta_click"
              variant="gold"
              size="lg"
            >
              {content.cta}
            </CTAButton>
            <p className="text-xs text-forest-200/70 sm:text-sm">
              {content.microtext}
            </p>
            <TrustBadges variant="dark" className="mt-1" compact />
          </div>
        </div>

        {/* Coluna mídia — vídeo avatar + mockup */}
        <div className="relative flex flex-col items-center justify-center gap-6">
          <div
            aria-hidden="true"
            className="absolute h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
          />
         

          {/* Mockup capa */}
          <div className="relative w-48 rotate-2 rounded-lg shadow-2xl shadow-black/50 transition-transform duration-300 hover:rotate-0 sm:w-56 lg:w-60">
            <img
              src="/images/ebook-cover.svg"
              alt="Capa do e-book Orquídeas — Princípios básicos para cultivar"
              width={400}
              height={600}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="h-auto w-full rounded-lg"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-white/5 to-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
