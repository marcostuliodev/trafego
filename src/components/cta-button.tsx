import type { ReactNode } from "react";
import { checkoutUrl, isInternalCheckout } from "@/lib/config";

type CTAButtonProps = {
  children: ReactNode;
  /** Evento de analytics disparado no clique (ex.: hero_cta_click). */
  eventName: string;
  /** ID consistente para tracking (ex.: cta-hero, cta-offer). */
  id: string;
  variant?: "primary" | "gold" | "outline";
  size?: "md" | "lg";
  className?: string;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold tracking-wide text-center transition-all duration-200 select-none";

const sizeClasses: Record<NonNullable<CTAButtonProps["size"]>, string> = {
  md: "min-h-12 px-7 text-sm",
  lg: "min-h-14 px-8 text-base sm:min-h-16 sm:px-10 sm:text-lg",
};

const variantClasses: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-gold-500 text-cream-500 shadow-lg shadow-forest-900/25 hover:bg-gold-400 hover:shadow-xl hover:shadow-forest-900/30 active:translate-y-px",
  gold: "bg-gold-500 text-forest-950 shadow-lg shadow-gold-700/25 hover:bg-gold-400 active:translate-y-px",
  outline:
    "border-2 border-forest-800 text-forest-800 hover:bg-amber-400 hover:text-cream-50 active:translate-y-px",
};

/**
 * Botão de CTA único para toda a página.
 * - Usa a URL de checkout centralizada em src/lib/config.ts (CHECKOUT_URL).
 * - Componente de servidor (zero JavaScript): o tracking de analytics é feito
 *   por um script inline de delegação de eventos (ver src/app/layout.tsx),
 *   que escuta cliques em `[data-analytics-event]` e empurra para o dataLayer.
 */
export function CTAButton({
  children,
  eventName,
  id,
  variant = "primary",
  size = "lg",
  className = "",
}: CTAButtonProps) {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (isInternalCheckout) {
    return (
      <a id={id} href={checkoutUrl} data-analytics-event={eventName} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <a
      id={id}
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics-event={eventName}
      className={classes}
    >
      {children}
    </a>
  );
}