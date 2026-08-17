import { problem } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { CTAButton } from "@/components/cta-button";
import { IconLeaf } from "@/components/icons";

/**
 * SEÇÃO 2 — IDENTIFICAÇÃO COM O PROBLEMA
 * Perguntas que o visitante já se fez + texto de conexão + CTA.
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

        <CTAButton
          id="cta-content"
          eventName="content_cta_click"
          variant="primary"
          size="lg"
        >
          {problem.cta.label}
        </CTAButton>
      </div>
    </section>
  );
}