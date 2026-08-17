import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  /** id aplicado ao <h2> — usado por aria-labelledby nas seções. */
  id?: string;
  /** tone="dark" para fundos escuros (ajusta contraste do eyebrow). */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Cabeçalho padrão de seção: eyebrow (rótulo pequeno), título serifado
 * e descrição opcional. Mantém hierarquia e consistência visual.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "text-center items-center" : "text-left items-start";

  const eyebrowClasses =
    tone === "dark"
      ? "text-gold-400"
      : "text-gold-700";

  return (
    <div className={`flex flex-col gap-4 ${alignClasses} ${className}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.28em] ${eyebrowClasses}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="max-w-3xl font-serif text-3xl leading-tight text-ink-900 sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}