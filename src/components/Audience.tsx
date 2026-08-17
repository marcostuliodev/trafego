import { audience } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { IconCheck } from "@/components/icons";

/**
 * SEÇÕES 9 e 10 — PARA QUEM É / PARA QUEM NÃO É
 * Honestidade na oferta aumenta credibilidade.
 */
export function Audience() {
  return (
    <section
      id="para-quem"
      aria-labelledby="audience-title"
      className="bg-cream-50 py-16 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-5 sm:px-8">
        <SectionHeading title={audience.title} align="center" id="audience-title" />

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {/* PARA QUEM É */}
          <div className="rounded-3xl border border-forest-100 bg-white p-8 shadow-sm sm:p-10">
            <h3 className="mb-6 font-serif text-xl text-ink-900 sm:text-2xl">
              {audience.forTitle}
            </h3>
            <ul className="flex flex-col gap-4">
              {audience.for.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-base leading-relaxed text-ink-900 sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* PARA QUEM NÃO É */}
          <div className="rounded-3xl border border-forest-100 bg-cream-100 p-8 sm:p-10">
            <h3 className="mb-6 font-serif text-xl text-ink-700 sm:text-2xl">
              {audience.notForTitle}
            </h3>
            <ul className="flex flex-col gap-4">
              {audience.notFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-400/40 text-ink-400"
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
                  <span className="text-base leading-relaxed text-ink-500 sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}