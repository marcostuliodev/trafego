import { highlights } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

/**
 * SEÇÃO 7 — DADOS CONCRETOS
 * Referências retiradas do conteúdo do guia (não são promessas).
 */
export function Highlights() {
  return (
    <section
      id="dados"
      aria-labelledby="highlights-title"
      className="relative overflow-hidden bg-forest-900 py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(42,87,57,0.5),transparent_60%)]"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-5 sm:px-8">
        <SectionHeading
          eyebrow={highlights.eyebrow}
          title={highlights.title}
          align="center"
          id="highlights-title"
          tone="dark"
          className="[&_h2]:text-cream-50"
        />

        <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.items.map((item) => (
            <div
              key={item.value}
              className="flex flex-col gap-3 rounded-2xl border border-forest-700/60 bg-forest-950/40 p-7 text-center"
            >
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-serif text-3xl leading-tight text-gold-400 sm:text-4xl">
                {item.value}
              </dd>
              <p className="text-sm leading-relaxed text-forest-100/80">
                {item.label}
              </p>
            </div>
          ))}
        </dl>

        <p className="max-w-3xl text-center text-xs leading-relaxed text-forest-200/60 sm:text-sm">
          {highlights.disclaimer}
        </p>
      </div>
    </section>
  );
}