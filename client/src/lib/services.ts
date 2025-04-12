export interface Service {
  id: string;
  icon: string;
  title: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "contabilidade",
    icon: "calculator",
    title: "Contabilidade Mensal",
    features: [
      "Registo e Classificação de Movimentações Financeiras",
      "Suporte Contínuo e Conformidade com a AGT",
      "Gestão de Folha de Pagamento e Encargos Sociais",
      "Apuramento de Impostos e Cumprimento Fiscal"
    ]
  },
  {
    id: "alvaras",
    icon: "id-card",
    title: "Emissão de Alvarás Comerciais",
    features: [
      "Solicitação e renovação de alvarás",
      "Consultoria regulatória com autoridades",
      "Assessoria para requisitos e documentação"
    ]
  },
  {
    id: "constituicao",
    icon: "building",
    title: "Constituição de Empresas",
    features: [
      "Seleção do regime jurídico adequado",
      "Registro comercial e inscrição no INSS",
      "NIF e licenças necessárias",
      "Documentos e estatutos legais"
    ]
  },
  {
    id: "juridica",
    icon: "gavel",
    title: "Assessoria Jurídica",
    features: [
      "Consultoria em direito empresarial e societário",
      "Elaboração e análise de contratos",
      "Resolução de conflitos e mediação",
      "Proteção de marca e propriedade intelectual"
    ]
  },
  {
    id: "rh",
    icon: "users-cog",
    title: "Serviços de Recursos Humanos",
    features: [
      "Recrutamento e seleção de talentos",
      "Registro de trabalhadores no INSS",
      "Gestão de folha de pagamento e benefícios",
      "Treinamento e desenvolvimento de equipe"
    ]
  },
  {
    id: "representacao",
    icon: "handshake",
    title: "Representação Empresarial",
    features: [
      "Intermediação comercial e institucional",
      "Negociação com parceiros e fornecedores",
      "Representação em feiras e eventos corporativos",
      "Suporte burocrático e governamental",
      "Defesa de interesses empresariais"
    ]
  },
  {
    id: "formacao",
    icon: "graduation-cap",
    title: "Formação e Estágio em Contabilidade",
    features: [
      "Formação teórica e prática em contabilidade",
      "Domínio das normas contábeis angolanas (CNCF)",
      "Treinamento em software de gestão financeira"
    ]
  },
  {
    id: "viabilidade",
    icon: "chart-line",
    title: "Estudo de Viabilidade Econômico-Financeira",
    features: [
      "Análise de custos e rentabilidade",
      "Previsão financeira e orçamentação",
      "Avaliação de riscos e oportunidades",
      "Indicadores de desempenho e sustentabilidade"
    ]
  },
  {
    id: "fiscal",
    icon: "file-invoice-dollar",
    title: "Consultoria Fiscal",
    features: [
      "Planejamento tributário estratégico",
      "Regularização fiscal e tributária",
      "Suporte em auditorias e fiscalizações",
      "Consultoria em impostos e conformidade"
    ]
  },
  {
    id: "alta-financa",
    icon: "chart-bar",
    title: "Consultoria e Negociação em Alta Finança",
    features: [
      "Planejamento financeiro estratégico",
      "Aquisição de investimentos e financiamentos",
      "Gestão e análise de riscos de mercado",
      "Negociação de contratos financeiros e parcerias"
    ]
  }
];
