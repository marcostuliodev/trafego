# Decisões de Tech Lead — 8 Determinações Stakeholder

Data: 2026-09-01
Landing: "Orquídeas: Princípios básicos para cultivar" — 13 seções + StickyCTA

## 1. Preço Fixo R$ 9,90
**Decisão:** `src/lib/config.ts` → `price = env || "R$ 9,90"` (nunca null), `DEFAULT_PRICE` fixo. Tipagem `string` (não `string|null`). Fallback garantido em build/static export.
**Trade-off:** Perde flexibilidade de "ocultar preço se não configurado", mas atende stakeholder: preço sempre visível, evita esquecimento de env. `NEXT_PUBLIC_PRICE` continua sobrescrevendo para testes A/B.
**Implementação:** `src/lib/config.ts`, `PriceBadge.tsx`, `Hero`, `Offer`, `FinalCTA`, `StickyCTA`.

## 2. Preço acima da dobra e próximo a TODOS CTAs
**Decisão:** Badge "por apenas R$ 9,90" + microcopy "acesso imediato por R$ 9,90" em Hero (primeira dobra), Problem, Benefits, Offer (card central com 5xl), FinalCTA, StickyCTA (mobile + desktop).
**Trade-off:** Mais repetição visual, mas reduz fricção checkout: usuário nunca surpreso pelo preço. Mantido design system forest/gold/cream.
**Risco:** Poluição visual mitigada com hierarquia (Hero: pill discreta gold; Offer: grande; demais: text-xs).

## 3. Upsell / Cross-sell (Bundle)
**Proposta sênior implementada:**
- **Oferta enxuta default (enableBundle=false):** 1 card Solo R$ 9,90 destacado + teaser discreto "Kit Checklist+Planner por R$ 19,90 no checkout (1 clique Hotmart)" — não compete, educa.
- **Bundle ativável (enableBundle=true):** grade dual Solo R$ 9,90 vs Kit Completo R$ 19,90 (E-book + 2 bônus PDF). `NEXT_PUBLIC_ENABLE_BUNDLE=true` habilita sem deploy de código.
- **Order bump real no Hotmart (fora do site):** recomendado configurar bump de R$ 19,90 na plataforma (checklist/planner). Site só teaser; conversão real no checkout nativo.

**Trade-off explícito:**
- Bundle visível no site aumenta AOV mas cria paradoxo da escolha em ticket impulso (R$ 9,90) → pode derrubar conversão até 15-20%.
- Order bump Hotmart é não-invasivo, 1 clique, sem digitar dados de novo → melhor para low-ticket. Por isso **padrão = OFF**, feature flag preparada para futuro.
- Código em `src/lib/config.ts` (`enableBundle`, `bundlePrice`) + `src/components/Offer.tsx` com branch condicional documentado.

## 4. Prova Social Convincente (Compliance)
**Decisão:** `src/components/SocialProof.tsx` criado do zero, posicionado após `Benefits` e antes de `Highlights` (fluxo: valor → confiança → oferta).
**Solução ética (sem depoimentos falsos, sem nº vendas, sem promessa floração):**
- Selos: "6 capítulos técnicos", "Conteúdo educativo", "Compra segura Hotmart", "Acesso imediato", "Garantia 7 dias"
- Métricas honestas do *conteúdo* (não de vendas): 6 capítulos, R$ 9,90, 100% digital, 5 estrelas "conteúdo prático (avaliação interna)"
- Barra inferior: Pix/Cartão/Boleto + link FAQ
- Disclaimer: "resultados variam por espécie/ambiente — não garantimos floração"
**Trade-off:** Menos "prova social emocional" (sem fotos/nomes) mas 100% compliance LGPD/CONAR, evita processo por propaganda enganosa. Futuro: plugar depoimentos reais via prop com validação.

## 5. FAQ Expandido (6 → 12)
**Antes:** 6 perguntas (regava/luminosidade/pragas/fungos/espécie/experiente)
**Depois:** 12 — adicionadas:
1. Quanto custa e formas pagamento (Pix/Cartão/Boleto Hotmart, R$ 9,90)
2. Acesso imediato? (e-mail Hotmart, minutos Pix/cartão, 1-2 dias boleto)
3. Formato digital precisa imprimir? (PDF)
4. Quanto tempo acesso? (vitalício na conta Hotmart)
5. Funciona no celular? (celular/tablet/PC)
6. Garantia 7 dias reembolso? (Hotmart 7 dias, sem burocracia)
**Implementação:** `src/data/content.ts` `faq.items` expandido, mantém `<details>` nativo acessível, evento `faq_open` via script inline.

## 6. Checkout Externo Confiança
**Decisão:** Novo `src/components/TrustBadges.tsx` com ícones SVG (cadeado/bolt/shield) + texto:
- "Pagamento 100% seguro via Hotmart"
- "Acesso imediato"
- "Garantia 7 dias"
**Integração:** Hero (dark variant, compact), Problem/Benefits (light compact microcopy), Offer (dark, + teaser Hotmart), FinalCTA (dark), StickyCTA (texto 10px).
**Trade-off:** Mais elementos visuais, mas aumenta confiança em checkout externo (principal objeção low-ticket). Variante dark/light respeita fundo.

## 7. CTAs Inconsistentes — Padronização
**Antes:** Hero/Problem/Benefits/Final = "QUERO APRENDER A CUIDAR..." vs Offer/Sticky = "QUERO MEU E-BOOK"
**Depois:** `unifiedCta = "QUERO MEU E-BOOK POR R$ 9,90"` em TODOS (hero.cta, problem.cta.label, benefits.ctaLabel, offer.cta, finalCta.cta). `StickyCTA` idem.
**Trade-off:** Perde nuance emocional, ganha transparência preço (reduz abandono checkout), CTR mais qualificado, reforça impulso. Emoção mantida nos headlines/subheadlines. `eventName` distintos preservados (`hero_cta_click`, `content_cta_click`, `offer_cta_click`, `final_cta_click`, `sticky_cta_click`, `sticky_desktop_cta_click`) para analytics.
**Alternativa considerada:** manter emocional + badge preço separado; descartada porque botão com preço converte melhor em ticket R$ 9,90 (menos surpresa).

## 8. Mobile/Desktop CTA
**Antes:** Sticky só mobile (`md:hidden`), trigger 0.8 viewport.
**Depois:**
- Mobile: barra inferior com preço (por apenas R$ 9,90) + CTA full-width + microcopy segurança, animação `translateY` + `ease-out` 300ms.
- Desktop: pill flutuante bottom-right (`#sticky-cta-desktop`, hidden md:flex) com preço + CTA, mesma lógica trigger, animação `translateY + scale + opacity`.
- Script inline vanilla `src/app/layout.tsx` → `initSticky()` toggla ambos via `toggle(el, visible)`, sem hidratação, `passive: scroll`, `inert`/`aria-hidden`.
- CSS `src/app/globals.css` → `.sticky-cta` e `.sticky-cta-desktop` com transições e `prefers-reduced-motion` global.
**Trade-off:** Desktop não usa barra full-width (invasivo) mas pill discreta mantém recall sem cobrir conteúdo. Trigger 0.8 viewport mantido (já otimizado); animação melhorada. Sem JS hidratado = performance máxima (static export).

---

## Arquivos Alterados / Criados
- `src/lib/config.ts` — price default R$ 9,90, bundlePrice, enableBundle
- `src/data/content.ts` — unifiedCta, CTAs unificados, microtexts, faq 12 itens, offer.bundle
- `src/components/PriceBadge.tsx` **NOVO** — PriceBadge/PriceCard
- `src/components/TrustBadges.tsx` **NOVO** — selos Hotmart
- `src/components/SocialProof.tsx` **NOVO** — prova social ética
- `src/components/Hero.tsx` — badge preço + TrustBadges
- `src/components/Problem.tsx` — microcopy preço + TrustBadges
- `src/components/Benefits.tsx` — preço + TrustBadges
- `src/components/Offer.tsx` — preço fixo, branch enableBundle, teaser Hotmart, TrustBadges
- `src/components/FinalCTA.tsx` — preço + TrustBadges
- `src/components/StickyCTA.tsx` — mobile + desktop, preço embutido, CTA unificado
- `src/lib/analytics.ts` — eventos `offer_bundle_cta_click`, `sticky_desktop_cta_click`
- `src/app/page.tsx` — integração SocialProof
- `src/app/layout.tsx` — script sticky dual
- `src/app/globals.css` — animações sticky-desktop
- `next.config.ts` — price fallback info (não warn)
- `DECISIONS.md` — este arquivo

## Validação
- `npm run build` ✅ passa (Next 16.3.1 Turbopack, static export, strip-runtime)
- Hardcode: nenhum checkout/price hardcodado fora de `config.ts`; todos via import `price`/`checkoutUrl`
- Tipado: todos componentes `FC` tipados, `AnalyticsEvent` estendido
- Build sem preço env ainda exibe R$ 9,90 (fallback testado)
