import { contents } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import {
  IconBug,
  IconDrop,
  IconFlask,
  IconMushroom,
  IconSun,
  IconThermometer,
} from "@/components/icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ambiente: IconThermometer,
  luminosidade: IconSun,
  rega: IconDrop,
  adubacao: IconFlask,
  pragas: IconBug,
  fungos: IconMushroom,
};

/**
 * SEÇÃO 4 — O QUE VOCÊ VAI ENCONTRAR NO E-BOOK (6 cards)
 */
export function Contents() {
  return (
    <section
      id="conteudo"
      aria-labelledby="contents-title"
      className="bg-cream-50 py-16 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-5 sm:px-8">
        <SectionHeading
          eyebrow={contents.eyebrow}
          title={contents.title}
          align="center"
          id="contents-title"
        />

        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contents.items.map((item) => {
            const Icon = iconMap[item.id] ?? IconLeafFallback;
            return (
              <li
                key={item.id}
                className="group flex flex-col gap-4 rounded-2xl border border-forest-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-100 text-forest-700 transition-colors group-hover:bg-gold-100 group-hover:text-gold-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-serif text-xl text-ink-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-500 sm:text-base">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function IconLeafFallback({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15Z" />
      <path d="M5 19c3-6 7-10 12-12" />
    </svg>
  );
}