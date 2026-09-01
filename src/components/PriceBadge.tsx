import { price } from "@/lib/config";

type PriceBadgeProps = {
  variant?: "hero" | "card" | "inline";
  className?: string;
};

/**
 * PriceBadge — exibe R$ 9,90 de forma consistente.
 * Usa config.price (default R$ 9,90) — nunca hardcodado.
 * Variantes: hero (destaque acima da dobra), card (grande no Offer), inline (microcopy)
 */
export function PriceBadge({ variant = "inline", className = "" }: PriceBadgeProps) {
  if (variant === "hero") {
    return (
      <div
        className={`inline-flex flex-col items-start gap-1 ${className}`}
        aria-label={`Preço: ${price}`}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-300 sm:text-sm">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
          por apenas
          <span className="font-serif text-base font-bold text-gold-300 sm:text-lg">{price}</span>
        </span>
        <span className="text-xs text-forest-200/60">acesso imediato • pagamento único</span>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className={`flex flex-col items-center gap-1 text-center ${className}`} aria-label={`Preço: ${price}`}>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">por apenas</span>
        <span className="font-serif text-5xl font-bold text-gold-400 sm:text-6xl">{price}</span>
        <span className="text-xs text-forest-200/70">pagamento único • acesso imediato</span>
      </div>
    );
  }

  // inline
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 ${className}`}>
      <span>por apenas</span>
      <span className="font-serif text-lg font-bold">{price}</span>
    </span>
  );
}

export function PriceCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-gold-500/30 bg-gradient-to-br from-forest-800 to-forest-900 px-6 py-5 text-center shadow-lg ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Oferta especial</p>
      <p className="mt-2 font-serif text-4xl font-bold text-gold-400">{price}</p>
      <p className="mt-1 text-xs text-forest-200/70">acesso imediato • garantia 7 dias Hotmart</p>
    </div>
  );
}
