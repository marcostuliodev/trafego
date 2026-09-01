import { hero } from "@/data/content";
import { price } from "@/lib/config";
import { CTAButton } from "@/components/cta-button";
import { TrustBadges } from "@/components/TrustBadges";

/**
 * SEÇÃO 1 — HERO (primeira dobra)
 * Fundo verde profundo, mockup do e-book com leve perspectiva,
 * flor decorativa ao fundo. CTA dourado acima da dobra.
 */
export function Hero() {
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

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-24">
        {/* Coluna de texto */}
        <div className="flex flex-col items-start gap-6 text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-300">
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="font-serif text-4xl leading-[1.12] text-cream-50 sm:text-5xl lg:text-[3.6rem]"
          >
            {hero.headline}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-forest-100/85 sm:text-lg">
            {hero.subheadline}
          </p>

          {/* Preço acima da dobra — determinação 2 */}
          <div className="flex flex-col items-start gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gold-300">por apenas</span>
              <span className="font-serif text-xl font-bold text-gold-300" aria-label={`Preço ${price}`}>
                {price}
              </span>
              <span className="hidden text-xs text-forest-200/60 sm:inline">• acesso imediato</span>
            </div>
            <p className="text-xs text-forest-200/60 sm:text-sm">Pagamento único • Garantia 7 dias</p>
          </div>

          <div className="mt-1 flex flex-col items-start gap-3">
            <CTAButton
              id="cta-hero"
              eventName="hero_cta_click"
              variant="gold"
              size="lg"
            >
              {hero.cta}
            </CTAButton>
            <p className="text-xs text-forest-200/70 sm:text-sm">
              {hero.microtext}
            </p>
            <TrustBadges variant="dark" className="mt-1" compact />
          </div>
        </div>

        {/* Coluna do mockup */}
        <div className="relative flex items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
          />
          <div className="relative w-56 rotate-2 rounded-lg shadow-2xl shadow-black/50 transition-transform duration-300 hover:rotate-0 sm:w-64 lg:w-72">
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
            {/* Brilho sutil na capa */}
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