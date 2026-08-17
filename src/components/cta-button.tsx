"use client";

import type { ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import { checkoutUrl, isInternalCheckout } from "@/lib/config";

type CTAButtonProps = {
  children: ReactNode;
  /** Evento de analytics disparado no clique (ex.: hero_cta_click). */
  eventName: AnalyticsEvent;
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
    "bg-forest-800 text-cream-50 shadow-lg shadow-forest-900/25 hover:bg-forest-700 hover:shadow-xl hover:shadow-forest-900/30 active:translate-y-px",
  gold: "bg-gold-500 text-forest-950 shadow-lg shadow-gold-700/25 hover:bg-gold-400 active:translate-y-px",
  outline:
    "border-2 border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-cream-50 active:translate-y-px",
};

/**
 * Botão de CTA único para toda a página.
 * - Usa a URL de checkout centralizada em src/lib/config.ts (CHECKOUT_URL).
 * - Dispara eventos de analytics consistentes (data-analytics-event + dataLayer).
 */
export function CTAButton({
  children,
  eventName,
  id,
  variant = "primary",
  size = "lg",
  className = "",
}: CTAButtonProps) {
  const isAnchor = isInternalCheckout;

  const handleClick = () => {
    trackEvent(eventName, { cta_id: id });
    trackEvent("checkout_start", { cta_id: id });
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (isAnchor) {
    return (
      <a id={id} href={checkoutUrl} data-analytics-event={eventName} onClick={handleClick} className={classes}>
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
      onClick={handleClick}
      className={classes}
    >
      {children}
    </a>
  );
}