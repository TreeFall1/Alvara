export type NavItem = { label: string; href: string };
export type ProductivityItem = { number: string; title: string; image: string };
export type PropositionItem = {
  label: string;
  title: string;
  body: string;
};
export type OpportunityItem = { title: string; body: string; icon: string };
export type NewsItem = { category: string; date: string; title: string; image: string };
export type FaqItem = { question: string; answer: string };

export type DashboardSnapshot = {
  asOf: string;
  holdings: number;
  stakingRewards: number;
  history: { date: string; value: number }[];
};

export type HomePageContent = {
  navigation: NavItem[];
  productivity: ProductivityItem[];
  propositions: PropositionItem[];
  opportunities: OpportunityItem[];
  news: NewsItem[];
  faq: FaqItem[];
  dashboard: DashboardSnapshot;
};
