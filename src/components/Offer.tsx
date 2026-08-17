import Image from "next/image";
import { offer } from "@/data/content";
import { price } from "@/lib/config";
import { SectionHeading } from "@/components/section-heading";
import { CTAButton } from "@/components/cta-button";
import { IconCheck } from "@/components/icons";

/**
 * SEÇÃO 11 — OFERTA
 * Uma das seções mais fortes: card premium com mockup, lista de
 * entregáveis, preço real (via NEXT_PUBLIC_PRICE) e CTA dourado.
 */
export function Offer() {
  return (
    <section
      id="oferta"
      aria-labelledby="offer-title"
      className="relative overflow-hidden bg-forest-900 py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(42,87,57,0.55),transparent_65%)]"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-5 sm:px-8">
        <SectionHeading
          eyebrow={offer.eyebrow}
          title={offer.title}
          align="center"
          id="offer-title"
          tone="dark"
          className="[&_h2]:text-cream-50"
        />

        <div className="w-full max-w-3xl rounded-3xl border border-gold-500/40 bg-forest-800 p-8 shadow-2xl shadow-black/30 sm:p-12">
          <div className="flex flex-col items-center gap-8">
            {/* Mockup da capa */}
            <div className="w-44 rotate-1 rounded-lg shadow-xl shadow-black/40 transition-transform duration-300 hover:rotate-0 sm:w-52">
              <Image
                src="/images/ebook-cover.svg"
                alt="Capa do e-book Orquídeas — Princípios básicos para cultivar"
                width={400}
                height={600}
                className="h-auto w-full rounded-lg"
              />
            </div>

            {/* O que você recebe */}
            <div className="w-full">
              <h3 className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
                {offer.includesTitle}
              </h3>
              <ul className="flex flex-col gap-3.5">
                {offer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <span className="text-base leading-relaxed text-cream-50 sm:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preço real (configurado via NEXT_PUBLIC_PRICE) */}
            {price ? (
              <p className="font-serif text-4xl text-gold-400 sm:text-5xl">
                {price}
              </p>
            ) : null}

            <div className="flex w-full flex-col items-center gap-3">
              <CTAButton
                id="cta-offer"
                eventName="offer_cta_click"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto"
              >
                {offer.cta}
              </CTAButton>
              <p className="text-xs text-forest-200/70 sm:text-sm">
                {offer.microtext}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}