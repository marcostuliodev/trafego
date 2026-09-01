import { CTAButton } from "@/components/cta-button";
import { price } from "@/lib/config";

/**
 * Sticky CTA — mobile + desktop (determinação 8).
 *
 * Mobile: barra inferior fixa (md:hidden) com preço e CTA unificado.
 * Desktop: pill flutuante discreta (hidden md:flex) bottom-right.
 * Fica visível desde o carregamento, sem depender de hidratação ou scroll.
 *
 * Trade-off: desktop não invade com barra full-width; pill é menos agressivo,
 * mantém Offer/FinalCTA como CTAs principais, mas garante recall constante.
 */
export function StickyCTA() {
  return (
    <>
      {/* Mobile bar */}
      <div
        id="sticky-cta"
        className="sticky-cta fixed inset-x-0 bottom-0 z-50 border-t border-gold-500/30 bg-forest-950/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-all duration-300 ease-out md:hidden"
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-400">por apenas</span>
            <span className="font-serif text-lg font-bold leading-none text-cream-50">{price}</span>
          </div>
          <CTAButton
            id="cta-sticky"
            eventName="sticky_cta_click"
            variant="gold"
            size="md"
            className="flex-1 text-sm"
          >
            QUERO MEU E-BOOK POR R$ 9,90
          </CTAButton>
        </div>
        <p className="mt-2 text-center text-[10px] leading-none text-forest-200/60">
          Pagamento seguro via Hotmart • Acesso imediato
        </p>
      </div>

      {/* Desktop floating pill */}
      <div
        id="sticky-cta-desktop"
        className="sticky-cta-desktop fixed bottom-6 right-6 z-50 hidden items-center gap-3 rounded-full border border-gold-500/20 bg-forest-950/95 px-2 py-2 shadow-2xl shadow-black/30 backdrop-blur transition-all duration-300 ease-out md:flex"
      >
        <div className="pl-4 pr-1 text-left leading-none">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-400">E-book por apenas</p>
          <p className="font-serif text-lg font-bold leading-none text-cream-50">{price}</p>
        </div>
        <CTAButton
          id="cta-sticky-desktop"
          eventName="sticky_desktop_cta_click"
          variant="gold"
          size="md"
          className="rounded-full px-6 text-sm"
        >
          QUERO MEU E-BOOK POR R$ 9,90
        </CTAButton>
      </div>
    </>
  );
}