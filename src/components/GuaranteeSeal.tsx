/**
 * GuaranteeSeal — selo circular dourado "7 DIAS GARANTIA INCONDICIONAL"
 * Decisão 8: selo grande ao lado do CTA em Offer e FinalCTA.
 * Sem libs, CSS puro, acessível, <2kb.
 */
type GuaranteeSealProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "h-20 w-20 text-[0.6rem] sm:h-24 sm:w-24 sm:text-[0.65rem]",
  md: "h-24 w-24 text-[0.65rem] sm:h-28 sm:w-28 sm:text-xs",
  lg: "h-28 w-28 text-xs sm:h-32 sm:w-32 sm:text-[0.7rem]",
};

export function GuaranteeSeal({ size = "md", className = "" }: GuaranteeSealProps) {
  return (
    <div
      aria-label="7 dias garantia incondicional — reembolso total pela Hotmart"
      className={`relative flex shrink-0 items-center justify-center rounded-full border-2 border-gold-600 bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 text-center font-sans font-bold uppercase leading-tight text-forest-950 shadow-lg shadow-gold-700/30 ${sizeMap[size]} ${className}`}
    >
      {/* Anel interno decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-1.5 rounded-full border border-white/40"
      />
      <div className="relative flex flex-col items-center justify-center px-2">
        <span className="text-[1.7em] leading-none">7 DIAS</span>
        <span className="mt-0.5 text-[0.95em] leading-none tracking-wide">GARANTIA</span>
        <span className="text-[0.75em] leading-none tracking-[0.14em] opacity-90">INCONDICIONAL</span>
        <span
          aria-hidden="true"
          className="mt-1 h-px w-8 bg-forest-900/30"
        />
        <span className="mt-1 text-[0.6em] font-semibold normal-case tracking-wide opacity-70">
          Reembolso total
        </span>
      </div>
    </div>
  );
}
