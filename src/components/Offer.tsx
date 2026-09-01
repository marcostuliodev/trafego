import { offer } from "@/data/content";
import { price, enableBundle } from "@/lib/config";
import { SectionHeading } from "@/components/section-heading";
import { CTAButton } from "@/components/cta-button";
import { IconCheck } from "@/components/icons";
import { TrustBadges } from "@/components/TrustBadges";

/**
 * SEÇÃO 11 — OFERTA
 * Determinações atendidas:
 * - 1 & 2: Preço R$9,90 fixo sempre visível, com microcopy "por apenas" próximo ao CTA.
 * - 6: Selos de confiança próximos a TODOS CTAs.
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

        {enableBundle ? (
          /* ===== BUNDLE ATIVO — grade dual ===== */
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Card Solo */}
            <div className="flex flex-col rounded-3xl border-2 border-gold-500 bg-forest-800 p-8 shadow-2xl shadow-black/30 sm:p-8">
              <div className="flex flex-col items-center gap-6">
                <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-forest-950">
                  Recomendado para começar
                </span>
                <div className="w-36 rotate-1 rounded-lg shadow-xl shadow-black/40 sm:w-40">
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
                <h3 className="text-center font-serif text-xl text-cream-50">E-book Solo</h3>
                <ul className="flex w-full flex-col gap-2.5">
                  {offer.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-cream-50">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-center">
                  <span className="text-xs uppercase tracking-widest text-gold-400">por apenas</span>
                  <span className="font-serif text-4xl font-bold text-gold-400">{price}</span>
                  <span className="text-xs text-forest-200/60">pagamento único</span>
                </div>
                <CTAButton id="cta-offer-solo" eventName="offer_cta_click" variant="gold" size="lg" className="w-full">
                  {offer.cta}
                </CTAButton>
                <TrustBadges variant="dark" compact className="mt-1" />
              </div>
            </div>

            {/* Card Kit */}
            <div className="flex flex-col rounded-3xl border border-forest-600 bg-forest-800/80 p-8 shadow-xl sm:p-8">
              <div className="flex flex-col items-center gap-6">
                <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-300">
                  {offer.bundle.badge}
                </span>
                <h3 className="text-center font-serif text-xl text-cream-50">{offer.bundle.title}</h3>
                <ul className="flex w-full flex-col gap-2.5">
                  {offer.bundle.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-cream-50">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-center">
                  <span className="text-xs uppercase tracking-widest text-forest-200/60">kit completo por</span>
                  <span className="font-serif text-4xl font-bold text-gold-400">{offer.bundle.price}</span>
                  <span className="text-xs text-forest-200/60">{offer.bundle.note}</span>
                </div>
                <CTAButton id="cta-offer-bundle" eventName="offer_bundle_cta_click" variant="primary" size="lg" className="w-full bg-cream-50 text-forest-900 hover:bg-white">
                  {offer.bundle.cta}
                </CTAButton>
              </div>
            </div>
          </div>
        ) : (
          /* ===== OFERTA ÚNICA ENXUTA (default) ===== */
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

              {/* Preço fixo R$9,90 sempre visível */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">por apenas</span>
                <p className="font-serif text-5xl font-bold text-gold-400 sm:text-6xl" aria-label={`Preço ${price}`}>
                  {price}
                </p>
                <span className="text-xs text-forest-200/70">pagamento único • acesso imediato</span>
              </div>

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
                <p className="text-xs text-forest-200/70 sm:text-sm">{offer.microtext}</p>
                <TrustBadges variant="dark" className="mt-1" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}