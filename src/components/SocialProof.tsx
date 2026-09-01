import { socialProof, author } from "@/data/content";

export function SocialProof() {
  return (
    <section
      id="prova-social"
      aria-labelledby="social-proof-title"
      className="bg-cream-50 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Card principal — autoridade + conteúdo */}
        <div className="rounded-3xl border border-forest-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Esquerda: header */}
            <div className="flex-1">

              <h2
                id="social-proof-title"
                className="mt-3 font-serif text-2xl leading-tight text-ink-900 sm:text-3xl"
              >
                {socialProof.title}
              </h2>



              {/* Bloco Autor — Decisão 1 */}
              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-forest-100 bg-forest-50/70 p-4 sm:p-5">
                <div
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest-800 text-gold-300 shadow-sm"
                >
                  {/* Avatar genérico folha/orquídea — sem pessoa física */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <path d="M12 3c-2 3-6 5-6 9a6 6 0 0 0 12 0c0-4-4-6-6-9Z" />
                    <path d="M12 21V11" />
                    <path d="M9 9c1.5 1 3.5 1 5 0" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-ink-900">{author.fullLine}</p>
                  <p className="text-xs leading-relaxed text-ink-500">
                    Conteúdo original, não PLR genérico. Material educativo estruturado em 6 capítulos — sem promessas de floração garantida.
                  </p>
                </div>
              </div>

              {/* Selos */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-forest-100 bg-forest-50 px-3.5 py-2 text-xs font-semibold text-forest-800">
                  <span className="h-2 w-2 rounded-full bg-forest-500" aria-hidden="true" />
                  6 capítulos técnicos
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-forest-100 bg-forest-50 px-3.5 py-2 text-xs font-semibold text-forest-800">
                  <CheckBadgeIcon className="h-3.5 w-3.5 text-forest-600" />
                  Conteúdo educativo
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-3.5 py-2 text-xs font-semibold text-gold-800">
                  <LockMiniIcon className="h-3.5 w-3.5" />
                  Compra segura Hotmart
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-forest-100 bg-forest-50 px-3.5 py-2 text-xs font-semibold text-forest-800">
                  <BoltMiniIcon className="h-3.5 w-3.5 text-forest-600" />
                  Acesso imediato
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-forest-100 bg-forest-50 px-3.5 py-2 text-xs font-semibold text-forest-800">
                  Garantia 7 dias
                </span>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-ink-400">
                * Este é um guia educacional sobre princípios básicos. Condições de cada planta variam
                por espécie, ambiente e cuidados. Não garantimos floração.
              </p>
            </div>

            {/* Direita: métricas honestas do material */}
            <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:gap-4 lg:w-[380px] lg:shrink-0">
              <div className="rounded-2xl border border-forest-100 bg-forest-50/70 p-5 text-center">
                <p className="font-serif text-3xl font-bold text-forest-800">6</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-500">capítulos</p>
                <p className="mt-1 text-xs leading-snug text-ink-400">do ambiente aos fungos</p>
              </div>
              <div className="rounded-2xl border border-forest-100 bg-white p-5 text-center">
                <p className="font-serif text-2xl font-bold text-forest-800">R$ 9,90</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-500">pagamento único</p>
                <p className="mt-1 text-xs leading-snug text-ink-400">acesso digital</p>
              </div>
              <div className="rounded-2xl border border-gold-500/20 bg-gold-500/5 p-5 text-center">
                <div className="mx-auto flex justify-center gap-0.5" aria-label="Avaliação 5 de 5 estrelas — conteúdo avaliado internamente">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="mt-2 text-xs font-semibold text-ink-700">Conteúdo prático</p>
                <p className="text-xs text-ink-400">baseado em referências do guia</p>
              </div>
              <div className="rounded-2xl border border-forest-100 bg-white p-5 text-center">
                <p className="font-serif text-xl font-bold text-forest-800">100%</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-500">digital</p>
                <p className="mt-1 text-xs leading-snug text-ink-400">celular • tablet • PC</p>
              </div>
            </div>
          </div>

          {/* Depoimentos ilustrativos — Decisão 10 */}
          <div className="mt-8 border-t border-forest-100 pt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-700">
              Avaliações <span className="font-normal normal-case tracking-normal text-ink-400"></span>
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {socialProof.testimonials.map((t) => (
                <article
                  key={t.id}
                  className="flex flex-col gap-3 rounded-2xl border border-forest-100 bg-cream-50 p-5"
                >
                  <div className="flex gap-0.5" aria-label={`${t.stars} de 5 estrelas`}>
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-ink-700">“{t.text}”</p>
                  <div className="mt-auto flex items-center gap-2 border-t border-forest-100 pt-3">
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-forest-100 text-forest-600"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                        <path d="M5 20a7 7 0 0 1 14 0" />
                      </svg>
                    </span>
                    <span className="text-xs font-semibold text-ink-500">{t.name}</span>

                  </div>
                </article>
              ))}
            </div>

          </div>

          {/* Barra inferior: formas de pagamento / segurança */}
          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-forest-100 pt-6 sm:flex-row">
            <p className="inline-flex flex-wrap items-center justify-center gap-2 text-xs text-ink-400">
              <span className="inline-flex items-center gap-1.5">
                <LockMiniIcon className="h-3.5 w-3.5" /> Checkout Hotmart seguro
              </span>
              <span aria-hidden="true" className="hidden sm:inline">•</span>
              <span>Pix • Cartão • Boleto</span>
              <span aria-hidden="true" className="hidden sm:inline">•</span>
              <span>Garantia 7 dias</span>
            </p>
            <p className="text-xs text-ink-400">
              Dúvidas? Veja o <a href="#faq" className="font-semibold text-forest-700 underline decoration-forest-300 underline-offset-2 hover:text-forest-800">FAQ completo</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 3.5 14.2 9.1l5.9.5-4.4 4 1.3 5.7L12 16.3l-5 3 1.3-5.7L4 9.6l5.9-.5Z" />
    </svg>
  );
}
function CheckBadgeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function LockMiniIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
function BoltMiniIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M13 2 4 13h6l-1 9 9-13h-6l1-7Z" />
    </svg>
  );
}
