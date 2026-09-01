import { mockup } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

/**
 * SEÇÃO 8 — MOCKUP SIMPLES
 * Stakeholder solicitou remoção do carrossel "Veja por dentro" (3 páginas amostra).
 * Versão simplificada: apenas 1 mockup central da capa + texto "Seu guia em formato digital".
 * Sem grid carrossel, sem mockup.pages, sem page-amostra-*.svg.
 * loading=lazy decoding=async mantidos para performance.
 */
export function Mockup() {
  return (
    <section
      id="mockup"
      aria-labelledby="mockup-title"
      className="bg-cream-50 py-16 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-5 sm:px-8">
        <SectionHeading
          eyebrow={mockup.eyebrow}
          title={mockup.title}
          align="center"
          id="mockup-title"
        />

        {/* Mockup único — capa central */}
        <div className="relative flex w-full justify-center">
          <div
            aria-hidden="true"
            className="absolute h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"
          />
          <div className="relative w-56 overflow-hidden rounded-2xl border border-forest-100 bg-white p-3 shadow-xl shadow-forest-900/10 sm:w-64">
            <img
              src="/images/ebook-cover.svg"
              alt="Capa do e-book Orquídeas — Princípios básicos para cultivar"
              width={400}
              height={600}
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <p className="max-w-2xl text-center text-base leading-relaxed text-ink-500 sm:text-lg">
          {mockup.text}
        </p>
      </div>
    </section>
  );
}
