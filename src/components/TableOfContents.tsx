import { tableOfContents } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";

/**
 * SEÇÃO 5 — CONTEÚDO EM DETALHES (índice premium)
 * Lista vertical dos 6 capítulos com tópicos em chips.
 */
export function TableOfContents() {
  return (
    <section
      id="indice"
      aria-labelledby="toc-title"
      className="bg-cream-100 py-16 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-5 sm:px-8">
        <SectionHeading
          eyebrow={tableOfContents.eyebrow}
          title={tableOfContents.title}
          align="center"
          id="toc-title"
        />

        <ol className="w-full divide-y divide-forest-200/70 rounded-3xl border border-forest-200/70 bg-white shadow-sm">
          {tableOfContents.chapters.map((chapter) => (
            <li
              key={chapter.number}
              className="flex flex-col gap-3 p-6 transition-colors hover:bg-cream-50 sm:flex-row sm:items-start sm:gap-8 sm:p-8"
            >
              <span className="font-serif text-4xl leading-none text-gold-600 sm:w-16 sm:text-5xl">
                {String(chapter.number).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="font-serif text-xl text-ink-900 sm:text-2xl">
                  {chapter.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {chapter.topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-full border border-forest-200 bg-forest-50 px-3.5 py-1.5 text-xs font-medium text-ink-700 sm:text-sm"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}