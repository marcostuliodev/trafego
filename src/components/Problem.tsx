import { problem } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { CTAButton } from "@/components/cta-button";
import { IconLeaf } from "@/components/icons";
import { TrustBadges } from "@/components/TrustBadges";

/**
 * SEÇÃO 2 — IDENTIFICAÇÃO COM O PROBLEMA
 * Perguntas que o visitante já se fez + texto de conexão + contador visceral + CTA.
 * Decisão 7: tom visceral liberado + contador financeiro.
 */
export function Problem() {
  return (
    <section
      id="problema"
      aria-labelledby="problem-title"
      className="bg-cream-50 py-16 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-5 sm:px-8">
        <SectionHeading
          eyebrow={problem.eyebrow}
          title={problem.title}
          align="center"
          id="problem-title"
        />

        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problem.questions.map((question) => (
            <li
              key={question}
              className="flex items-start gap-4 rounded-2xl border border-forest-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                <IconLeaf className="h-5 w-5" />
              </span>
              <p className="font-serif text-lg leading-snug text-ink-900">
                {question}
              </p>
            </li>
          ))}
        </ul>

        <p className="max-w-2xl text-center text-base leading-relaxed text-ink-500 sm:text-lg">
          {problem.text}
        </p>

        {/* Contador visceral — Decisão 7 */}
        <div className="w-full max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5 text-center shadow-sm sm:px-8">
          <p className="text-sm font-bold leading-relaxed text-amber-900 sm:text-base">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">💸</span>
              {problem.costAlert.highlight}
            </span>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-amber-800 sm:text-[15px]">
            {problem.costAlert.complement}
          </p>
          <p className="mt-1 text-xs text-amber-700/70">
            * Valores médios de mercado (floriculatura/viveiros) — referência ilustrativa.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <CTAButton
            id="cta-content"
            eventName="content_cta_click"
            variant="primary"
            size="lg"
          >
            {problem.cta.label}
          </CTAButton>
          <p className="text-xs text-ink-400 sm:text-sm">por apenas R$ 9,90 • acesso imediato via Hotmart</p>
          <TrustBadges variant="light" compact />
        </div>
      </div>
    </section>
  );
}
