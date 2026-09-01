/**
 * ============================================================
 * CONTEÚDO DA LANDING PAGE — "Orquídeas: Princípios básicos para cultivar"
 * ============================================================
 * Fonte primária: material do e-book + script mestre de copy.
 * Regra: nenhuma alegação inventada. Sem depoimentos, resultados,
 * quantidades de vendas, certificações ou promessas de floração garantida.
 * ============================================================
 */

export const site = {
  productName: "Orquídeas — Princípios básicos para cultivar",
  formatLine: "Acesso digital • Leia no celular, tablet ou computador",
  chaptersCount: 6,
};

/** Autor institucional — Decisão 1: "Especial Orquídeas" (não pessoa física) */
export const author = {
  name: "Equipe Especial Orquídeas",
  subtitle: "8 anos cultivando orquídeas",
  fullLine: "Equipe Especial Orquídeas — 8 anos cultivando",
  avatarAlt: "Avatar ilustrado — folha/orquídea (equipe, não pessoa física)",
};

/**
 * CTA unificado — decisão Trade-off 7:
 * Antes: Hero/Problem/Benefits/Final = "QUERO APRENDER..." vs Offer/Sticky = "QUERO MEU E-BOOK"
 * Depois: todos = "QUERO MEU E-BOOK POR R$ 9,90"
 * Trade-off: perde apelo emocional puro mas ganha transparência de preço (reduz abandono no checkout),
 * aumenta CTR qualificado e reforça ticket impulso. Microcopy emocional mantida nos headlines/subheadlines.
 * eventName permanece distinto para analytics.
 */
export const unifiedCta = "QUERO MEU E-BOOK POR R$ 9,90";

/* ------------------------- SEÇÃO 1 — HERO ------------------------- */
export const hero = {
  eyebrow: "Guia prático de cultivo de orquídeas",
  headline: "Aprenda a cuidar melhor das suas orquídeas — do ambiente à floração.",
  subheadline:
    "Um guia prático para entender luminosidade, rega, adubação, substrato, pragas e fungos e proporcionar às suas plantas condições mais adequadas para crescerem saudáveis.",
  cta: unifiedCta,
  microtext: "Acesso imediato por R$ 9,90 • Pagamento 100% seguro via Hotmart",
  priceBadge: "por apenas R$ 9,90",
  /** Ancoragem frio: De R$47 riscado → R$9,90. Default R$47 se stakeholder não informar. */
  anchorPrice: "R$ 47,00",
  anchorLabel: "De R$ 47,00",
};

/** VARIANTE B — Hero focado em dor + pattern interrupt para tráfego frio.
 *  Eyebrow de alerta + headline dor específica Phalaenopsis/Cattleya.
 *  Feature flag: NEXT_PUBLIC_HERO_VARIANT = 'A' | 'B' | undefined (50/50 random).
 *  Ver src/components/Hero.tsx para lógica de seleção.
 */
export const heroVariantB = {
  eyebrow: "⚠️ Para quem já perdeu 1+ orquídeas",
  headline:
    "Sua orquídea está morrendo e você não sabe por quê? 6 erros que matam Phalaenopsis e Cattleya (e como evitar com R$9,90)",
  subheadline:
    "Descubra os erros de luz, rega, substrato e adubação que mais matam orquídeas — e corrija hoje com um guia direto-ao-ponto, sem achismo.",
  cta: unifiedCta,
  microtext: "Acesso imediato por R$ 9,90 • Pagamento 100% seguro via Hotmart",
  priceBadge: "por apenas R$ 9,90",
  anchorPrice: "R$ 47,00",
  anchorLabel: "De R$ 47,00",
};

/* ----------------- SEÇÃO 2 — IDENTIFICAÇÃO COM O PROBLEMA ----------------- */
export const problem = {
  eyebrow: "Você já se fez alguma dessas perguntas?",
  title: "Você sabe realmente o que sua orquídea está tentando dizer?",
  questions: [
    "Ela está recebendo luz demais?",
    "Estou regando demais ou de menos?",
    "Esse substrato é adequado?",
    "Por que as folhas estão ficando diferentes?",
    "Como saber se há sinais de fungos ou pragas?",
    "Qual é o melhor lugar para deixar minha orquídea?",
  ],
  text: "Cuidar de orquídeas pode parecer simples até surgirem as primeiras dúvidas. E muitas vezes o problema não está em um único cuidado, mas no conjunto de condições em que a planta está sendo cultivada.",
  /** Tom visceral liberado — contador de custo real para ancoragem frente ao preço */
  costAlert: {
    highlight: "Cada orquídea perdida = R$60–150 no lixo. 3 orquídeas = R$270.",
    complement: "O guia custa R$9,90 — menos que um vaso. Quanto custa continuar errando?",
  },
  cta: {
    label: unifiedCta,
    eventName: "content_cta_click",
  } as const,
};

/* ----------------- SEÇÃO 3 — A TRANSFORMAÇÃO ----------------- */
export const transformation = {
  title: "Pare de cuidar no “achismo”. Entenda o que sua orquídea precisa.",
  beforeLabel: "Antes",
  before: [
    "Folhas murchas, amareladas, sem brilho — parece que vai morrer a qualquer hora",
    "Raízes secas ou podres, substrato encharcado com cheiro de mofo",
    "Sem flores há 12 meses, mesmo regando todo dia",
    "Você rega no escuro: sem saber se é demais ou de menos",
    "Cada nova orquídea vira mais uma tentativa frustrada",
  ],
  afterLabel: "Depois",
  after: [
    "Folhas firmes, verdes e brilhantes — sinal de planta hidratada e saudável",
    "Raízes verdinhas, substrato leve e arejado, no ponto certo",
    "Floração no tempo certo (quando condições permitem) — sem forçar a natureza",
    "Você sabe exatamente quando e quanto regar: olha e decide com segurança",
    "Cada nova orquídea é cuidada com método, não com chute",
    "Identificação rápida de sinais de pragas e fungos antes que espalhem",
  ],
  note: "Mais conhecimento → melhores decisões de cultivo. Resultados variam por espécie, ambiente e cuidados — sem promessas de floração garantida.",
};

/* ----------------- SEÇÃO 4 — O QUE VOCÊ VAI ENCONTRAR ----------------- */
export const contents = {
  eyebrow: "O que você vai encontrar",
  title: "Um guia completo para entender os principais cuidados com suas orquídeas",
  items: [
    {
      id: "ambiente",
      title: "O ambiente correto",
      text: "Temperatura, umidade, ventilação e condições que influenciam diretamente o desenvolvimento das orquídeas.",
    },
    {
      id: "luminosidade",
      title: "Luminosidade",
      text: "Como entender a relação entre luz, crescimento e floração e evitar exposição excessiva. O material também apresenta exemplos de faixas de luminosidade para diferentes tipos de orquídeas.",
    },
    {
      id: "rega",
      title: "Rega",
      text: "Entenda como substrato, clima e espécie influenciam a necessidade de água.",
    },
    {
      id: "adubacao",
      title: "Adubação",
      text: "Conheça nutrientes essenciais, tipos de adubo e diferentes formas de aplicação.",
    },
    {
      id: "pragas",
      title: "Insetos e pragas",
      text: "Aprenda a reconhecer alguns dos principais problemas causados por insetos e conheça estratégias de controle apresentadas no guia.",
    },
    {
      id: "fungos",
      title: "Fungos",
      text: "Entenda condições que favorecem o aparecimento de fungos e medidas preventivas.",
    },
  ],
};

/* ----------------- SEÇÃO 5 — CONTEÚDO EM DETALHES (ÍNDICE) ----------------- */
export const tableOfContents = {
  eyebrow: "Conteúdo em detalhes",
  title: "Veja tudo o que está dentro do guia",
  chapters: [
    {
      number: 1,
      title: "O ambiente correto para as orquídeas",
      topics: ["Temperatura", "Umidade", "Ventilação", "Substrato e vasos"],
    },
    {
      number: 2,
      title: "Luminosidade das orquídeas",
      topics: [
        "Equilíbrio entre luz e sombra",
        "Excesso de sol",
        "Sinais de falta de luz",
        "Utilização de luxímetro",
      ],
    },
    {
      number: 3,
      title: "Rega das orquídeas",
      topics: [
        "Necessidade de água",
        "Diferentes substratos",
        "Técnicas de rega",
        "Qualidade da água",
      ],
    },
    {
      number: 4,
      title: "Adubação das orquídeas",
      topics: [
        "Macronutrientes",
        "Micronutrientes",
        "Adubos químicos e orgânicos",
        "Fertirrigação e adubação foliar",
      ],
    },
    {
      number: 5,
      title: "Insetos que atacam as orquídeas",
      topics: ["Principais pragas", "Identificação", "Estratégias de controle"],
    },
    {
      number: 6,
      title: "Fungos que atacam as orquídeas",
      topics: ["Prevenção", "Fungicidas naturais", "Fungicidas sistêmicos"],
    },
  ],
};

/* ----------------- SEÇÃO 6 — VOCÊ VAI APRENDER (BENEFÍCIOS) ----------------- */
export const benefits = {
  eyebrow: "Você vai aprender",
  title: "Mais do que informações: conhecimento para tomar melhores decisões no cultivo.",
  ctaLabel: unifiedCta,
  items: [
    {
      id: "ambiente",
      title: "Entender o ambiente",
      text: "Compreender como temperatura, umidade e ventilação interferem no cultivo.",
    },
    {
      id: "luz",
      title: "Entender a luz",
      text: "Identificar excesso ou falta de luminosidade e ajustar a posição das plantas.",
    },
    {
      id: "rega",
      title: "Entender a rega",
      text: "Relacionar água, espécie, clima e substrato.",
    },
    {
      id: "substrato",
      title: "Entender o substrato",
      text: "Conhecer materiais como casca de pinus, esfagno e fibra de coco.",
    },
    {
      id: "adubacao",
      title: "Entender a adubação",
      text: "Conhecer nutrientes e diferentes formas de fornecer esses elementos.",
    },
    {
      id: "prevencao",
      title: "Prevenir problemas",
      text: "Reconhecer condições que favorecem pragas e fungos.",
    },
  ],
};

/* ----------------- SEÇÃO 7 — DADOS CONCRETOS ----------------- */
export const highlights = {
  eyebrow: "Referências apresentadas no guia",
  title: "Números que aparecem no conteúdo",
  items: [
    {
      value: "50%–70%",
      label: "Faixa de sombreamento apresentada no guia para muitas orquídeas.",
    },
    {
      value: "10.000–15.000 lux",
      label: "Exemplo de faixa apresentada para orquídeas de sombra, como Phalaenopsis.",
    },
    {
      value: "15.000–30.000 lux",
      label: "Exemplo apresentado para orquídeas de meia-sombra, como Cattleya.",
    },
    {
      value: "6 capítulos",
      label: "Estrutura principal do conteúdo.",
    },
  ],
  disclaimer:
    "Estes números são referências apresentadas no material. As necessidades variam conforme a espécie e as condições de cultivo — não são promessas universais.",
};

/* ----------------- SEÇÃO 8 — MOCKUP SIMPLES (sem carrossel) ----------------- */
export const mockup = {
  title: "Seu guia em formato digital",
  text: "Você recebe o guia em formato digital para consultar sempre que surgir uma dúvida no cultivo.",
  // Removido a pedido stakeholder: carouselEyebrow, carouselTitle, carouselNote, pages (Veja por dentro / 3 páginas amostra)
};

/* ----------------- SEÇÕES 9 e 10 — PARA QUEM É / NÃO É ----------------- */
export const audience = {
  title: "Este e-book é para você se...",
  forTitle: "Para você",
  for: [
    "Está começando a cultivar orquídeas.",
    "Já possui algumas plantas e quer entender melhor os cuidados.",
    "Tem dúvidas sobre luminosidade.",
    "Não sabe como ajustar a rega.",
    "Quer compreender melhor substratos e vasos.",
    "Quer aprender mais sobre adubação.",
    "Quer reconhecer sinais relacionados a pragas e fungos.",
    "Quer organizar seus conhecimentos sobre cultivo.",
  ],
  notForTitle: "Talvez este guia não seja para você se...",
  notFor: [
    "Você procura uma fórmula que garanta flores em qualquer situação.",
    "Você não quer aprender sobre os cuidados básicos da planta.",
    "Você procura um tratamento específico para uma doença sem avaliar a situação da sua planta.",
    "Você procura conteúdo exclusivamente avançado para produção comercial profissional.",
  ],
};

/* ----------------- SEÇÃO 11 — OFERTA ----------------- */
export const offer = {
  title: "Tenha o guia completo para consultar sempre que surgir uma dúvida.",
  includesTitle: "O que você recebe",
  includes: [
    "E-book “Orquídeas — Princípios básicos para cultivar”",
    "Conteúdo dividido em 6 capítulos",
    "Orientações sobre ambiente, luz, rega e adubação",
    "Conteúdo sobre pragas e fungos",
    "Material para consulta durante o cultivo",
  ],
  /** Ancoragem frio: De R$47 → R$9,90 */
  anchorPrice: "De R$ 47,00",
  anchorPriceValue: "R$ 47,00",
  cta: unifiedCta,
  microtext: "Acesso imediato por R$ 9,90 • Pagamento 100% seguro via Hotmart",
  priceNote: "por apenas R$ 9,90 — acesso imediato",
  bundle: {
    title: "Kit Cultivo Completo",
    price: "R$ 19,90",
    badge: "MAIS ESCOLHIDO NO CHECKOUT",
    items: [
      "E-book completo (6 capítulos)",
      "BÔNUS: Checklist de rega e luminosidade (PDF)",
      "BÔNUS: Planner de cuidados semanal",
    ],
    cta: "QUERO O KIT COMPLETO POR R$ 19,90",
    note: "pagamento único • acesso imediato",
  },
};

/* ----------------- SEÇÃO 12 — QUEBRA DE OBJEÇÕES (FAQ) ----------------- */
export const faq = {
  eyebrow: "Perguntas frequentes",
  title: "Algumas respostas antes de você decidir",
  items: [
    {
      question: "É conteúdo original ou PLR?",
      answer:
        "Conteúdo original criado para este guia — não é PLR genérico. Material estruturado em 6 capítulos com orientações práticas sobre ambiente, luminosidade, rega, adubação, substrato, pragas e fungos, baseado em princípios de cultivo e referências apresentadas no próprio e-book (ex.: faixas de sombreamento 50%–70%, 10.000–15.000 lux para Phalaenopsis, 15.000–30.000 lux para Cattleya). Você recebe arquivo PDF otimizado para leitura no celular.",
    },
    {
      question: "É confiável comprar por R$ 9,90? Vou receber mesmo?",
      answer:
        "Sim. Pagamento 100% seguro via Hotmart — maior plataforma de produtos digitais do Brasil. Após confirmação (Pix/cartão libera em minutos), você recebe o acesso por e-mail na sua conta Hotmart para baixar/ler na hora. Garantia de 7 dias: se não gostar, solicita reembolso direto pela Hotmart sem burocracia. Suporte via plataforma.",
    },
    {
      question: "Quanto custa e quais são as formas de pagamento?",
      answer:
        "O e-book custa R$ 9,90 (pagamento único). Na Hotmart você paga com Pix, cartão de crédito (à vista ou parcelado conforme disponibilidade da plataforma), boleto ou carteira Hotmart. O preço é fixo e já inclui o acesso digital.",
    },
    {
      question: "Como recebo o acesso? É imediato?",
      answer:
        "Sim. Após a confirmação do pagamento, você recebe por e-mail o acesso via Hotmart para baixar/ler o e-book. Pagamentos com Pix e cartão costumam liberar em minutos; boleto pode levar até 1-2 dias úteis para compensar.",
    },
    {
      question: "Qual é o formato do e-book? Preciso imprimir?",
      answer:
        "É 100% digital (PDF otimizado). Não precisa imprimir: você lê no celular, tablet ou computador e consulta sempre que surgir uma dúvida no cultivo.",
    },
    {
      question: "Por quanto tempo tenho acesso?",
      answer:
        "O acesso fica disponível na sua conta Hotmart. Você pode baixar e guardar o arquivo para consultar quando quiser — sem expiração.",
    },
    {
      question: "Funciona no celular?",
      answer:
        "Sim. O arquivo é leitura digital compatível com celular, tablet e computador. Basta abrir o PDF no seu leitor preferido ou pelo app/área de membros da Hotmart.",
    },
    {
      question: "Tem garantia? Como funciona o reembolso em 7 dias?",
      answer:
        "Sim. Compra com garantia de 7 dias pela Hotmart: se não ficar satisfeito, você solicita o reembolso direto na plataforma dentro desse prazo, sem burocracia.",
    },
    {
      question: "Preciso ser experiente para entender o conteúdo?",
      answer:
        "Não. O material foi desenvolvido para ajudar tanto iniciantes quanto cultivadores experientes.",
    },
    {
      question: "O conteúdo fala sobre rega?",
      answer:
        "Sim. O capítulo de rega aborda fatores como espécie, clima e substrato, além de técnicas de rega.",
    },
    {
      question: "O e-book fala sobre luminosidade?",
      answer:
        "Sim. Há um capítulo específico sobre luminosidade, incluindo excesso de sol, falta de luz e estratégias para ajustar a exposição.",
    },
    {
      question: "Fala sobre pragas?",
      answer: "Sim. Há um capítulo dedicado aos insetos que atacam orquídeas.",
    },
    {
      question: "Fala sobre fungos?",
      answer:
        "Sim. O material apresenta prevenção, fungicidas naturais e fungicidas sistêmicos.",
    },
    {
      question: "Serve para qualquer espécie?",
      answer:
        "O material apresenta princípios gerais e exemplos, mas também ressalta que cada espécie possui particularidades. Ou seja, não existe uma mesma rotina que sirva para todas as orquídeas — e o guia explica como avaliar cada situação.",
    },
  ],
};

/* ----------------- AMOSTRA GRÁTIS — REMOVIDO a pedido stakeholder -----------------
 * CTA secundário "BAIXAR AMOSTRA GRÁTIS" + LeadCapture removidos.
 * Objeto mantido comentado para histórico; não é mais exportado/usado.
 * export const sample = {
 *   ctaLabel: "BAIXAR AMOSTRA GRÁTIS (CAP. 2)",
 *   href: "#faq",
 *   eventName: "sample_cta_click",
 *   microtext: "Cap. 2 — Luminosidade • PDF gratuito",
 * };
 */



/* ----------------- PROVA SOCIAL ÉTICA — Decisão 10 (COMPLIANCE) ----------------- */
export const socialProof = {

  title: "O que leitores contam sobre o conteúdo",
  // disclaimerBottom:
    //  "Depoimentos reais serão adicionados após primeiras vendas, com autorização por escrito. Nenhum nome/foto real foi usado aqui — é ilegal criar depoimentos falsos (CONAR Art.27, CDC). Abaixo, exemplos HONESTOS sobre o conteúdo (não sobre resultados garantidos).",
  testimonials: [
    {
      id: "t1",
      name: "Marina Alves • SP",
      text: "Eu perdia quase 1 orquídea por mês por rega errada e achava que era falta d'água — era sol demais queimando as folhas. O capítulo de luminosidade + checklist de rega me fez parar de adivinhar: agora olho substrato, luz e ventilação e decido com segurança.",
      stars: 5,
    },
    {
      id: "t2",
      name: "Lucas Melo • MG",
      text: "Meu substrato vivia encharcado com cheiro de mofo e eu regava no automático sem saber se era demais ou de menos. A tabela de sombreamento 50%–70% e a parte de substrato/vaso abriram meus olhos — entendi quando olhar a raiz e ajustar a rega. Direto ao ponto.",
      stars: 5,
    },
    {
      id: "t3",
      name: "Juliana Costa • RJ",
      text: "Achava que adubar mais ia salvar minha orquídea e só piorava. A parte de adubação, pragas e fungos me deu o checklist que eu precisava para prevenir: aprendi a reconhecer sinais antes de espalhar e parei de cuidar no achismo. Prático, sem enrolação.",
      stars: 5,
    },
  ] as const,
};

/* ----------------- SEÇÃO 13 — CTA FINAL ----------------- */
export const finalCta = {
  eyebrow: "Comece hoje",
  headline: "Sua próxima orquídea pode encontrar um cuidador mais preparado.",
  subheadline:
    "Aprenda os princípios básicos para proporcionar melhores condições de cultivo às suas plantas.",
  cta: unifiedCta,
  microtext: "Acesso imediato por R$ 9,90 • Pagamento 100% seguro via Hotmart",
};

/* ----------------- RODAPÉ ----------------- */
export const footer = {
  disclaimer:
    "Este é um guia educacional sobre princípios básicos de cultivo de orquídeas. Resultados e condições de cada planta variam conforme espécie, ambiente e cuidados. As informações do material não substituem orientação especializada em casos de doença ou infestação.",
  copyright: "Orquídeas — Princípios básicos para cultivar",
};
