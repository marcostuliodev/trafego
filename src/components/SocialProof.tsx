/**
 * SocialProof — prova social ética e em compliance.
 *
 * DETERMINAÇÃO 4 — Trade-off sênior:
 * NÃO inventamos depoimentos falsos, nº de vendas ou promessas de floração.
 * Solução: prova social por AUTORIDADE + CONTEÚDO + SEGURANÇA.
 *
 * - Bloco "Conteúdo verificado" (6 capítulos, referências técnicas)
 * - Selos: Conteúdo educativo • Compra segura Hotmart • Acesso imediato • Garantia 7 dias
 * - Métricas HONESTAS do próprio material (não de vendas): 6 capítulos, 4 faixas de luminosidade, etc.
 * - Aviso de transparência: "Conteúdo educativo — resultados variam por espécie/ambiente"
 * - Sem nomes falsos. Se futuro houver depoimentos reais, plugar via prop com validação.
 *
 * Design: forest/gold/cream, tipografia serifada, bordas suaves.
 */

export function SocialProof() {
  return (
    <section
      id="prova-social"
      aria-labelledby="social-proof-title"
      className="bg-cream-50 py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Card principal */}
        <div className="rounded-3xl border border-forest-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Esquerda: autoridade */}
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-700">
                Prova social por conteúdo • Sem promessas inventadas
              </p>
              <h2
                id="social-proof-title"
                className="mt-3 font-serif text-2xl leading-tight text-ink-900 sm:text-3xl"
              >
                Conteúdo educativo, direto e verificável
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-500 sm:text-base">
                Baseado nos 6 capítulos do guia — com referências técnicas apresentadas no próprio
                material. Compra 100% segura pela Hotmart, com acesso imediato e garantia de 7 dias.
              </p>

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
