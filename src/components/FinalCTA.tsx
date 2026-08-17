import Image from "next/image";
import { finalCta } from "@/data/content";
import { CTAButton } from "@/components/cta-button";

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
        <Image
          src="/images/orchid-flower.svg"
          alt=""
          width={480}
          height={480}
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
        <div className="mt-2 flex flex-col items-center gap-3">
          <CTAButton
            id="cta-final"
            eventName="final_cta_click"
            variant="gold"
            size="lg"
          >
            {finalCta.cta}
          </CTAButton>
          <p className="text-xs text-forest-200/70 sm:text-sm">
            {finalCta.microtext}
          </p>
        </div>
      </div>
    </section>
  );
}