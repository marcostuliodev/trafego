import { offer } from "@/data/content";
import { price, anchorPrice } from "@/lib/config";
import { SectionHeading } from "@/components/section-heading";
import { CTAButton } from "@/components/cta-button";
import { IconCheck } from "@/components/icons";
import { TrustBadges } from "@/components/TrustBadges";
import { GuaranteeSeal } from "@/components/GuaranteeSeal";

/**
 * SEÇÃO 11 — OFERTA
 * Determinações atendidas:
 * - 1 & 2: Preço R$9,90 fixo sempre visível, com microcopy "por apenas" próximo ao CTA.
 * - 6: Selos de confiança próximos a TODOS CTAs.
 * - 8: Selo garantia grande ao lado do CTA (Decisão 8).
 * - 9: Order bump Hotmart será feito depois por outra equipe — NÃO implementar UI de bundle no front.
 *       Flag enableBundle mantida em src/lib/config.ts mas sem UI visível (vide DECISIONS.md).
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
          title={offer.title}
          align="center"
          id="offer-title"
          tone="dark"
          className="[&_h2]:text-cream-50"
        />

        {/* ===== OFERTA ÚNICA ENXUTA (default) — bundle oculto por decisão 9 ===== */}
        <div className="w-full max-w-3xl rounded-3xl border border-gold-500/40 bg-forest-800 p-8 shadow-2xl shadow-black/30 sm:p-12">
          <div className="flex flex-col items-center gap-8">
            {/* Mockup da capa */}
            <div className="w-44 rotate-1 rounded-lg shadow-xl shadow-black/40 transition-transform duration-300 hover:rotate-0 sm:w-52">
              <img
                src="/images/ebook-cover.svg"
                alt="Capa do e-book Orquídeas — Princípios básicos para cultivar"
                width={400}
                height={600}
                loading="lazy"
                decoding="async"
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
                    <span className="text-base leading-relaxed text-cream-50 sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preço fixo R$9,90 sempre visível + ancoragem De R$47 */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-medium tracking-wide text-forest-200/50 line-through" aria-label={`Preço original ${anchorPrice}`}>
                De {anchorPrice}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">por apenas</span>
              <p className="font-serif text-5xl font-bold text-gold-400 sm:text-6xl" aria-label={`Preço ${price}`}>
                {price}
              </p>
              <span className="text-xs text-forest-200/70">pagamento único • acesso imediato • Pagamento 100% seguro</span>
            </div>

            {/* CTA + Selo Garantia lado a lado — Decisão 8 */}
            <div className="flex w-full flex-col items-center gap-5">
              <div className="flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
                <CTAButton
                  id="cta-offer"
                  eventName="offer_cta_click"
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {offer.cta}
                </CTAButton>
                <GuaranteeSeal size="md" />
              </div>
              <p className="text-xs text-forest-200/70 sm:text-sm">{offer.microtext}</p>
              <TrustBadges variant="dark" className="mt-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
