import { finalCta } from "@/data/content";
import { price } from "@/lib/config";
import { CTAButton } from "@/components/cta-button";
import { TrustBadges } from "@/components/TrustBadges";

/**
 * SEÇÃO 13 — CTA FINAL
 * Visual limpo, headline forte, CTA dourado.
 */
export function FinalCTA() {
  return (
    <section
      id="cta-final-section"
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-forest-950 py-20 sm:py-28"
    >
      {/* Flor decorativa */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 opacity-[0.12]"
      >
        <img
          src="/images/orchid-flower.svg"
          alt=""
          width={480}
          height={480}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(42,87,57,0.45),transparent_60%)]"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-7 px-5 text-center sm:px-8">
        <h2
          id="final-cta-title"
          className="font-serif text-3xl leading-tight text-cream-50 sm:text-4xl md:text-5xl"
        >
          {finalCta.headline}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-forest-100/85 sm:text-lg">
          {finalCta.subheadline}
        </p>
        {/* Preço próximo ao CTA — determinação 2 */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">por apenas</span>
          <span className="font-serif text-4xl font-bold text-gold-400 sm:text-5xl" aria-label={`Preço ${price}`}>
            {price}
          </span>
          <span className="text-xs text-forest-200/60">pagamento único • garantia 7 dias</span>
        </div>
        <div className="mt-2 flex flex-col items-center gap-3">
          <CTAButton
            id="cta-final"
            eventName="final_cta_click"
            variant="gold"
            size="lg"
          >
            {finalCta.cta}
          </CTAButton>
          <p className="text-xs text-forest-200/70 sm:text-sm">{finalCta.microtext}</p>
          <TrustBadges variant="dark" className="mt-2" />
        </div>
      </div>
    </section>
  );
}