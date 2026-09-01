import { benefits } from "@/data/content";
import { SectionHeading } from "@/components/section-heading";
import { CTAButton } from "@/components/cta-button";
import { TrustBadges } from "@/components/TrustBadges";
import {
  IconDrop,
  IconLeaf,
  IconPot,
  IconShield,
  IconSprout,
  IconSun,
} from "@/components/icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ambiente: IconLeaf,
  luz: IconSun,
  rega: IconDrop,
  substrato: IconPot,
  adubacao: IconSprout,
  prevencao: IconShield,
};

/**
 * SEÇÃO 6 — VOCÊ VAI APRENDER (benefícios)
 */
export function Benefits() {
  return (
    <section
      id="beneficios"
      aria-labelledby="benefits-title"
      className="bg-forest-50 py-16 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-5 sm:px-8">
        <SectionHeading
          eyebrow={benefits.eyebrow}
          title={benefits.title}
          align="center"
          id="benefits-title"
        />

        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item) => {
            const Icon = iconMap[item.id] ?? IconLeaf;
            return (
              <li
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-forest-100 bg-white p-7 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-100 text-forest-700">
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

        {/* CTA pós-conteúdo — captura o visitante já convencido pelo valor */}
        <div className="flex flex-col items-center gap-3">
          <CTAButton
            id="cta-benefits"
            eventName="content_cta_click"
            variant="primary"
            size="lg"
          >
            {benefits.ctaLabel}
          </CTAButton>
          <p className="text-xs text-ink-400 sm:text-sm">por apenas R$ 9,90 • acesso imediato</p>
          <TrustBadges variant="light" compact className="mt-1" />
        </div>
      </div>
    </section>
  );
}