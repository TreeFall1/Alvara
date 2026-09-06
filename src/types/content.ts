export type NavItem = { label: string; href: string };

export type ProofMetric = {
  value: string;
  label: string;
  detail?: string;
};

export type FeatureItem = {
  label: string;
  title: string;
  body: string;
};

export type StepItem = {
  title: string;
  body: string;
  icon: string;
};

export type SecurityItem = {
  title: string;
  body: string;
  badge: string;
};

export type RoadmapItem = {
  phase: string;
  title: string;
  period: string;
  body: string;
  link?: NavItem;
};

export type FaqItem = { question: string; answer: string };

export type HomePageContent = {
  navigation: NavItem[];
  proofMetrics: ProofMetric[];
  features: FeatureItem[];
  steps: StepItem[];
  security: SecurityItem[];
  roadmap: RoadmapItem[];
  faq: FaqItem[];
  telegramUrl: string;
};
