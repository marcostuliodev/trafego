import { transformation } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { IconCheck } from "@/components/icons";

/**
 * SEÇÃO 3 — A TRANSFORMAÇÃO (antes/depois)
 * Fundo verde escuro, painel "Depois" com destaque dourado.
 * Sem promessas de floração — a transformação é conhecimento → decisões.
 */
export function Transformation() {
  return (
    <section
      id="transformacao"
      aria-labelledby="transformation-title"
      className="relative overflow-hidden bg-forest-900 py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(42,87,57,0.5),transparent_60%)]"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-5 sm:px-8">
        <SectionHeading
          title={transformation.title}
          align="center"
          id="transformation-title"
          tone="dark"
          className="[&_h2]:text-cream-50"
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {/* ANTES */}
          <div className="rounded-3xl border border-forest-700/60 bg-forest-950/40 p-8 sm:p-10">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-forest-300/70">
              {transformation.beforeLabel}
            </p>
            <ul className="flex flex-col gap-4">
              {transformation.before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-forest-500/40 text-forest-300/70"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </span>
                  <span className="text-lg text-forest-100/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DEPOIS */}
          <div className="rounded-3xl border border-gold-500/40 bg-forest-800 p-8 shadow-xl shadow-black/20 sm:p-10">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
              {transformation.afterLabel}
            </p>
            <ul className="flex flex-col gap-4">
              {transformation.after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-lg text-cream-50">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center font-serif text-xl italic text-gold-300 sm:text-2xl">
          {transformation.note}
        </p>
      </div>
    </section>
  );
}