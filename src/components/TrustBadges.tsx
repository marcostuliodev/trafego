/**
 * TrustBadges — selos de confiança próximos aos CTAs.
 * Atende determinação 6: "Pagamento 100% seguro via Hotmart", "Acesso imediato", "Garantia 7 dias"
 * Ícones inline SVG sem dependências, design system forest/gold/cream.
 */

type TrustBadgesProps = {
  variant?: "light" | "dark";
  className?: string;
  compact?: boolean;
};

export function TrustBadges({ variant = "light", className = "", compact = false }: TrustBadgesProps) {
  const textClass = variant === "dark" ? "text-forest-200/70" : "text-ink-500";
  const iconWrap =
    variant === "dark"
      ? "bg-gold-500/15 text-gold-400 border-gold-500/20"
      : "bg-forest-50 text-forest-700 border-forest-100";

  const items = [
    {
      icon: LockIcon,
      label: "Pagamento 100% seguro via Hotmart",
    },
    {
      icon: BoltIcon,
      label: "Acesso imediato",
    },
    {
      icon: ShieldCheckIcon,
      label: "Garantia 7 dias",
    },
  ];

  if (compact) {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-3 text-xs ${textClass} ${className}`} aria-label="Garantias de compra">
        {items.map((item) => (
          <span key={item.label} className="inline-flex items-center gap-1.5">
            <item.icon className="h-3.5 w-3.5 shrink-0 opacity-80" />
            {item.label}
          </span>
        ))}
      </div>
    );
  }

  return (
    <ul className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`} aria-label="Garantias de compra">
      {items.map((item) => (
        <li
          key={item.label}
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${iconWrap} ${textClass}`}
        >
          <item.icon className="h-3.5 w-3.5 shrink-0" />
          {item.label}
        </li>
      ))}
    </ul>
  );
}

export function TrustBadgesInline({ variant = "light", className = "" }: { variant?: "light" | "dark"; className?: string }) {
  return <TrustBadges variant={variant} compact className={className} />;
}

// Ícones minimalistas
function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.5" r="1.5" />
    </svg>
  );
}
function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M13 2 4 13h6l-1 9 9-13h-6l1-7Z" />
    </svg>
  );
}
function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function PixIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M12 3 8 7l4 3 4-3-4-4ZM8 7 4 11l4 3-0 4 4-4-4-4Z M16 7l4 4-4 3 0 4-4-4 4-4Z" />
    </svg>
  );
}
