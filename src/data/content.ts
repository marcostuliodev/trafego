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

/* ------------------------- SEÇÃO 1 — HERO ------------------------- */
export const hero = {
  eyebrow: "Guia prático de cultivo de orquídeas",
  headline: "Aprenda a cuidar melhor das suas orquídeas — do ambiente à floração.",
  subheadline:
    "Um guia prático para entender luminosidade, rega, adubação, substrato, pragas e fungos e proporcionar às suas plantas condições mais adequadas para crescerem saudáveis.",
  cta: "QUERO APRENDER A CUIDAR DAS MINHAS ORQUÍDEAS",
  microtext: site.formatLine,
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
  cta: {
    label: "QUERO APRENDER A CUIDAR DAS MINHAS ORQUÍDEAS",
    eventName: "content_cta_click",
  } as const,
};

/* ----------------- SEÇÃO 3 — A TRANSFORMAÇÃO ----------------- */
export const transformation = {
  title: "Pare de cuidar no “achismo”. Entenda o que sua orquídea precisa.",
  beforeLabel: "Antes",
  before: [
    "Dúvidas",
    "Regas sem critério",
    "Localização inadequada",
    "Excesso de umidade",
    "Problemas não identificados",
  ],
  afterLabel: "Depois",
  after: [
    "Melhor compreensão do ambiente",
    "Maior atenção à luminosidade",
    "Rega de acordo com as condições de cultivo",
    "Melhor escolha de substrato",
    "Compreensão da adubação",
    "Identificação de sinais de pragas e fungos",
  ],
  note: "Mais conhecimento → melhores decisões de cultivo.",
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
  ctaLabel: "QUERO APRENDER A CUIDAR DAS MINHAS ORQUÍDEAS",
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

/* ----------------- SEÇÃO 8 — MOCKUPS ----------------- */
export const mockup = {
  eyebrow: "Visualize o produto",
  title: "Seu guia em formato digital",
  text: "Você recebe o guia em formato digital para consultar sempre que surgir uma dúvida no cultivo.",
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
  eyebrow: "Oferta",
  title: "Tenha o guia completo para consultar sempre que surgir uma dúvida.",
  includesTitle: "O que você recebe",
  includes: [
    "E-book “Orquídeas — Princípios básicos para cultivar”",
    "Conteúdo dividido em 6 capítulos",
    "Orientações sobre ambiente, luz, rega e adubação",
    "Conteúdo sobre pragas e fungos",
    "Material para consulta durante o cultivo",
  ],
  cta: "QUERO MEU E-BOOK",
  microtext: site.formatLine,
};

/* ----------------- SEÇÃO 12 — QUEBRA DE OBJEÇÕES (FAQ) ----------------- */
export const faq = {
  eyebrow: "Perguntas frequentes",
  title: "Algumas respostas antes de você decidir",
  items: [
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

/* ----------------- SEÇÃO 13 — CTA FINAL ----------------- */
export const finalCta = {
  eyebrow: "Comece hoje",
  headline: "Sua próxima orquídea pode encontrar um cuidador mais preparado.",
  subheadline:
    "Aprenda os princípios básicos para proporcionar melhores condições de cultivo às suas plantas.",
  cta: "QUERO APRENDER A CUIDAR DAS MINHAS ORQUÍDEAS",
  microtext: "Acesso digital • Leia no celular, tablet ou computador",
};

/* ----------------- RODAPÉ ----------------- */
export const footer = {
  disclaimer:
    "Este é um guia educacional sobre princípios básicos de cultivo de orquídeas. Resultados e condições de cada planta variam conforme espécie, ambiente e cuidados. As informações do material não substituem orientação especializada em casos de doença ou infestação.",
  copyright: "Orquídeas — Princípios básicos para cultivar",
};
