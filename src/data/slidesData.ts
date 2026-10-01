import { SlideData, TeamMember, PhaseInfo, DeliverableItem, PricingOption } from '../types';

export const SLIDES_CONFIG: SlideData[] = [
  {
    id: 'cover',
    number: '01',
    title: 'Proposta Comercial',
    kicker: 'Sense Sales × Ciro Kastrup - Te levo lá',
    theme: 'black',
    speakerNotes: [
      'Abertura formal da reunião com Ciro Kastrup.',
      'Destacar o objetivo: transformar o conhecimento e a autoridade em um evento de alta conversão.',
      'Reforçar o início previsto para 15 de setembro de 2026.'
    ]
  },
  {
    id: 'who-we-are',
    number: '02',
    title: 'Estratégia e crescimento com base no que realmente funciona',
    kicker: 'Quem é a Sense Sales',
    theme: 'white',
    brandbar: '02 · Sense Sales',
    speakerNotes: [
      'Somos estrategistas e especialistas em crescimento unindo negócios, marketing, vendas e tecnologia.',
      'Metodologia baseada em experimentação prática e adaptação contínua, sem achismos.',
      'Abordagem sem fórmulas prontas, adaptada ao cenário real para gerar resultados mensuráveis e sustentáveis.'
    ]
  },
  {
    id: 'team',
    number: '03',
    title: 'Condução executiva e técnica',
    kicker: 'Quem conduz o projeto',
    theme: 'black',
    brandbar: '03 · Squad Dedicado',
    speakerNotes: [
      'Apresentar Renato como ponto de contato direto e sênior.',
      'Renato: Automação, Growth & Estratégia, especialista em arquitetura de infraestrutura digital e resolução de alta complexidade.'
    ]
  },
  {
    id: 'portfolio-1',
    number: '04',
    title: 'Empresas e marcas que aceleramos',
    kicker: 'Portfólio · Painel 01',
    theme: 'white',
    brandbar: '04 · Portfólio 01',
    speakerNotes: [
      'Apresentar o primeiro painel de marcas atendidas pelo nosso squad.',
      'Destaque para empresas de tecnologia, sustentabilidade e serviços B2B.',
      'Metodologia comprovada de aquisição e autoridade de marca.'
    ]
  },
  {
    id: 'portfolio-2',
    number: '05',
    title: 'Empresas e marcas que aceleramos',
    kicker: 'Portfólio · Painel 02',
    theme: 'white',
    brandbar: '05 · Portfólio 02',
    speakerNotes: [
      'Apresentar o segundo painel de marcas aceleradas.',
      'Casos de sucesso em tráfego qualificado, retenção e posicionamento comercial.',
      'Validação de modelos em diferentes mercados e verticais.'
    ]
  },
  {
    id: 'portfolio-3',
    number: '06',
    title: 'Empresas e marcas que aceleramos',
    kicker: 'Portfólio · Painel 03',
    theme: 'white',
    brandbar: '06 · Portfólio 03',
    speakerNotes: [
      'Apresentar o terceiro painel de marcas de grande porte e autoridade consolidada.',
      'Experiência em operações de alta escala e complexidade de mercado.',
      'Reforçar como essa mesma maturidade estratégica será aplicada.'
    ]
  },
  {
    id: 'context',
    number: '07',
    title: 'Reservas constantes, sem depender de indicação',
    kicker: 'Contexto & Oportunidade',
    theme: 'green-deep',
    brandbar: '07 · Contexto',
    speakerNotes: [
      'Hoje o Te Levo Lá cresce no boca a boca; o objetivo é criar fluxo previsível com tráfego pago e Instagram posicionado.',
      'Explicar o gargalo da agenda instável e a solução com tráfego e experiência real.',
      'Destacar o resultado: viajantes qualificados direto no WhatsApp do Ciro.'
    ]
  },
  {
    id: 'macro-methodology',
    number: '08',
    title: 'Três fases, da estruturação à escala',
    kicker: 'Como trabalhamos',
    theme: 'white',
    brandbar: '08 · Metodologia',
    speakerNotes: [
      'Visão macro do projeto ao longo das fases.',
      'Fase 1 (Mês 1): Estruturação da página de conversão e campanhas piloto.',
      'Fase 2 (Meses 2 e 3): Tração e comparação entre os dois caminhos.',
      'Fase 3 (Meses 4 e 5): Escala com verba concentrada no melhor caminho.'
    ]
  },
  {
    id: 'week1-discovery',
    number: '09',
    title: 'Semana 1 — Discovery & Posicionamento',
    kicker: 'Semana 1 · Início 15 de setembro',
    theme: 'black',
    brandbar: '09 · Fase 1 — Estruturação',
    speakerNotes: [
      'Na Semana 1, mapeamos o viajante ideal (perfis, desejos e medos).',
      'Análise de mercado, diferencial e o ângulo do músico brasileiro na Argentina raiz.',
      'Diagnóstico e posicionamento do Instagram (bio, destaques e linha editorial).'
    ]
  },
  {
    id: 'weeks2-3-tactical',
    number: '10',
    title: 'Semanas 2 e 3 — Infraestrutura',
    kicker: 'Semanas 2 e 3 · Tático',
    theme: 'green-deep',
    brandbar: '10 · Fase 1 — Estruturação',
    speakerNotes: [
      'Frente de Mídia & Conteúdo: orientações para Instagram, roteiros de criativos e divisão de orçamento.',
      'Frente Técnica & Automação: Landing page, rastreamento (Meta CAPI + GA4) e boas-vindas no WhatsApp.'
    ]
  },
  {
    id: 'week4-warmup',
    number: '11',
    title: 'Semana 4 — De pé para a tração',
    kicker: 'Semana 4',
    theme: 'black',
    brandbar: '11 · Fase 1 — Estruturação',
    speakerNotes: [
      'Start das Campanhas: primeiros anúncios no ar pra validar ganchos e calibrar pixel.',
      'Reunião de Sprint 01: relatório de infraestrutura, primeiros números e aprovação do plano do Mês 2.'
    ]
  },
  {
    id: 'month2-warmup',
    number: '12',
    title: 'Meses 2 e 3 — Tração',
    kicker: 'Meses 2 e 3 · Tração',
    theme: 'white',
    brandbar: '12 · Fase 2 — Tração',
    speakerNotes: [
      'Escala de Captação: Aumento controlado do investimento diário, de olho no custo por contato qualificado.',
      'Conteúdo que Sustenta o Interesse: Orientação semanal pro Instagram e nutrição no WhatsApp.',
      'Otimização Cirúrgica: Testes de vídeo vs. estático e exclusão de públicos saturados.'
    ]
  },
  {
    id: 'month3-launch',
    number: '13',
    title: 'Meses 4 e 5 — Escala',
    kicker: 'Meses 4 e 5 · Escala',
    theme: 'black',
    brandbar: '13 · Fase 3 — Escala',
    speakerNotes: [
      'Foco no que Funciona: Mais verba nos criativos e públicos vencedores.',
      'Remarketing & Sazonalidade: Reimpacto de quem visitou e não reservou, com campanhas pensadas pras épocas de viagem.',
      'Fechamos o ciclo com dados e plano de continuidade.'
    ]
  },
  {
    id: 'parallel-track',
    number: '14',
    title: 'YouTube: o canal que trabalha por você',
    kicker: 'Frente Paralela · Estruturação Orgânica',
    theme: 'black',
    brandbar: '14 · Frente Paralela',
    speakerNotes: [
      'Retenção: análise do que mantém e perde espectador, ajustes de abertura e ritmo.',
      'Roteiros: apoio na estrutura e roteiros com a voz e história do Ciro.',
      'Direcionamento: linha editorial, temas e frequência conectados ao Te Levo Lá.'
    ]
  },
  {
    id: 'vision-future',
    number: '15',
    title: 'Do roteiro à loja: o próximo passo',
    kicker: 'Visão de Futuro · Próximo Passo',
    theme: 'black',
    brandbar: '15 · Visão de Futuro',
    speakerNotes: [
      '1 · Gerar Caixa: Tráfego pago e Instagram trazem viajantes para sustentar o novo projeto.',
      '2 · Fortalecer o Canal: O YouTube ganha retenção e audiência, formando a base de pessoas interessadas em música.',
      '3 · Lançar a Loja: Com caixa e audiência, construímos o e-commerce de instrumentos.'
    ]
  },
  {
    id: 'deliverables',
    number: '16',
    title: 'Entregáveis da proposta',
    kicker: 'O que está incluso',
    theme: 'white',
    brandbar: '16 · Escopo',
    speakerNotes: [
      'Clareza total do escopo contratual sem letras miúdas.',
      'Cobrimos todas as frentes: Estratégia, Técnico, Mídia, Conversão, YouTube e Visão de Futuro.',
      'Garantia de alinhamentos semanais de sprint para prestação de contas contínua.'
    ]
  },
  {
    id: 'investment',
    number: '17',
    title: 'Todos com o mesmo objetivo: Gerar faturamento',
    kicker: 'Investimento & Condições',
    theme: 'lime',
    brandbar: '17 · Investimento',
    speakerNotes: [
      'Apresentar a modalidade de investimento recorrente.',
      'Previsibilidade e fluxo de caixa mensal.',
      'Apoio integral de Renato & Allan por todo o período.'
    ]
  },
  {
    id: 'investment-onetime',
    number: '18',
    title: 'Condição Especial · Pagamento à Vista',
    kicker: 'Investimento & Condições',
    theme: 'black',
    brandbar: '18 · Pagamento À Vista',
    speakerNotes: [
      'Apresentar a modalidade de pagamento integral à vista.',
      'Destacar a economia imediata.',
      'Garantia de prioridade e kick-off imediato.'
    ]
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: 'portfolio-1',
    slideNumber: '04',
    brandbar: '04 · Portfólio 01',
    kicker: 'Portfólio · Painel 01',
    title: 'Empresas e marcas que aceleramos',
    subtitle: 'Histórico comprovado de impacto: operações que confiaram na nossa estratégia, tráfego e tecnologia para escalar resultados.',
    image: '/1.jpeg',
    tag: 'Painel 01 · Institucional & Tecnologia'
  },
  {
    id: 'portfolio-2',
    slideNumber: '05',
    brandbar: '05 · Portfólio 02',
    kicker: 'Portfólio · Painel 02',
    title: 'Empresas e marcas que aceleramos',
    subtitle: 'Marcas aceleradas com funis de alta conversão, posicionamento estratégico de mercado e geração contínua de leads qualificados.',
    image: '/2.jpeg',
    tag: 'Painel 02 · Escala & Crescimento'
  },
  {
    id: 'portfolio-3',
    slideNumber: '06',
    brandbar: '06 · Portfólio 03',
    kicker: 'Portfólio · Painel 03',
    title: 'Empresas e marcas que aceleramos',
    subtitle: 'Grandes marcas e players de mercado atendidos com esteiras completas de automação, mídia de performance e autoridade de marca.',
    image: '/3.jpeg',
    tag: 'Painel 03 · Marcas Consolidadas'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Renato',
    initial: 'R',
    role: 'Automação & Growth',
    photo: '/link%20ceo.jpg',
    focus: 'Especialista em Arquitetura de infraestrutura digital, entregando otimizações diárias e resoluções de demandas de alta complexidade sistêmica'
  }
];

export const PHASES_DATA: PhaseInfo[] = [
  {
    id: 'fase1',
    number: '01',
    month: 'Mês 1',
    title: 'Estruturação',
    objective: 'Página de conversão com o botão de WhatsApp, configuração dos dois caminhos de anúncio (via página e direto ao WhatsApp) e campanhas piloto.',
    highlights: [
      'Página de conversão com botão de WhatsApp',
      'Configuração dos dois caminhos de anúncio',
      'Início das campanhas piloto de validação'
    ],
    kpis: 'Página no ar, caminhos configurados, campanhas ativas.'
  },
  {
    id: 'fase2',
    number: '02',
    month: 'Meses 2 e 3',
    title: 'Tração',
    objective: 'Comparação entre os dois caminhos pra descobrir qual traz mais reservas por real investido.',
    highlights: [
      'Monitoramento contínuo de conversões',
      'Comparação entre os dois caminhos',
      'Avaliação de reservas por real investido'
    ],
    kpis: 'Dados consolidados por canal e otimização de custo.'
  },
  {
    id: 'fase3',
    number: '03',
    month: 'Meses 4 e 5',
    title: 'Escala',
    objective: 'Verba concentrada no caminho que performa melhor, sem abandonar o outro.',
    highlights: [
      'Concentração de verba na melhor rota',
      'Manutenção e suporte no segundo caminho',
      'Escala de reservas com previsibilidade'
    ],
    kpis: 'Crescimento constante de reservas e ROI maximizado.'
  }
];

export const DELIVERABLES_LIST: DeliverableItem[] = [
  {
    id: 'd1',
    title: 'Pesquisa do Viajante Ideal e Mercado',
    category: 'Estratégia',
    detail: 'Mapeamento de perfis, desejos, medos e posicionamento.',
    timeline: 'Semana 1'
  },
  {
    id: 'd2',
    title: 'Posicionamento e Orientação do Instagram',
    category: 'Estratégia',
    detail: 'Bio, destaques e linha editorial alinhados à identidade do Ciro.',
    timeline: 'Semana 1-2'
  },
  {
    id: 'd3',
    title: 'Página de Conversão (mini VSL ou página simples)',
    category: 'Tracking & Tech',
    detail: 'Landing page rápida com botão de WhatsApp e alta conversão.',
    timeline: 'Semana 2'
  },
  {
    id: 'd4',
    title: 'Campanhas de Tráfego Pago (via página e direto ao WhatsApp)',
    category: 'Mídia & Anúncios',
    detail: 'Configuração de anúncios para captação em ambos os caminhos.',
    timeline: 'Meses 2 e 3'
  },
  {
    id: 'd5',
    title: 'Rastreamento Avançado (Meta CAPI + GA4)',
    category: 'Tracking & Tech',
    detail: 'Setup server-side para atribuição sem perda de dados.',
    timeline: 'Semana 2-3'
  },
  {
    id: 'd6',
    title: 'Mensagem Automática de WhatsApp',
    category: 'Conversão',
    detail: 'Fluxos de boas-vindas e engajamento imediato.',
    timeline: 'Semana 3'
  },
  {
    id: 'd7',
    title: 'Briefing e Roteiro de Criativos',
    category: 'Mídia & Anúncios',
    detail: 'Roteiros estruturados para vídeos e estáticos com a voz do Ciro.',
    timeline: 'Semana 2-4'
  },
  {
    id: 'd8',
    title: 'Estruturação do Canal no YouTube (retenção, roteiros e direcionamento)',
    category: 'Frente Paralela',
    detail: 'Análise de retenção, apoio em roteiros e linha editorial.',
    timeline: 'Contínuo'
  },
  {
    id: 'd9',
    title: 'Construção da Loja de Instrumentos (e-commerce), após o start do turismo',
    category: 'Visão de Futuro',
    detail: 'E-commerce integrado ao YouTube e base de turismo.',
    timeline: 'Fase Seguinte'
  },
  {
    id: 'd10',
    title: 'Reuniões Quinzenais de Sprint e Dashboard de Métricas',
    category: 'Estratégia',
    detail: 'Acompanhamento de resultados e alinhamento estratégico.',
    timeline: 'Recorrente'
  }
];

export const PRICING_OPTIONS: PricingOption[] = [
  {
    type: 'monthly',
    label: 'Plano Recorrente',
    amount: 'R$ 2.300',
    period: '/mês',
    description: 'Cobrança mensal previsível para operação contínua e dedicada.',
    benefits: [
      'Acompanhamento completo e contínuo',
      'Todas as frentes inclusas (Tráfego, YouTube, Estrutura e Visão de Futuro)',
      'Sprints semanais e canal direto com Renato & Allan'
    ],
    isHighlighted: false
  },
  {
    type: 'onetime',
    label: 'Pagamento À Vista',
    amount: 'R$ 10.000',
    period: 'total',
    description: 'Apenas Pagamento único e integral.',
    benefits: [],
    isHighlighted: true
  }
];
