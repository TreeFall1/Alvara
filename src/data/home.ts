import type { HomePageContent } from "@/types/content";

export const homeContent: HomePageContent = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Investors", href: "#investors" },
    { label: "Opportunity", href: "#opportunity" },
    { label: "News", href: "#news" },
    { label: "ETH Dashboard", href: "#dashboard" },
  ],
  dashboard: {
    asOf: "August 31, 2026",
    holdings: 890833,
    stakingRewards: 26650,
    history: [
      { date: "Jun 13", value: 176271 }, { date: "Jul 4", value: 205634 },
      { date: "Jul 27", value: 438190 }, { date: "Aug 17", value: 740760 },
      { date: "Sep 14", value: 838152 }, { date: "Oct 19", value: 859853 },
      { date: "Nov 23", value: 862029 }, { date: "Dec 28", value: 864402 },
      { date: "Feb 1", value: 866744 }, { date: "Mar 8", value: 869154 },
      { date: "Apr 12", value: 871563 }, { date: "May 17", value: 873924 },
      { date: "Jun 21", value: 876285 }, { date: "Jul 26", value: 888521 },
      { date: "Aug 31", value: 890833 },
    ],
  },
  productivity: [
    { number: "01", title: "Staked since day one", image: "/media/productivity-1.avif" },
    { number: "02", title: "Enhanced yield incentives", image: "/media/productivity-2.avif" },
    { number: "03", title: "Trackable day-by-day", image: "/media/productivity-3.avif" },
  ],
  propositions: [
    { label: "Leadership", title: "Built by Proven Pioneers", body: "Sharplink is led by former BlackRock digital asset chief Joseph Chalom, Ethereum Cofounder Joseph Lubin, and an expert team, combining protocol-level expertise with institution-caliber execution." },
    { label: "Operations", title: "Treasury as an Operating System", body: "Sharplink runs custody, execution, risk controls, and capital deployment in-house, allowing the platform to be built with speed, precision, and operational control." },
    { label: "Equity", title: "Public Markets as an Advantage", body: "Sharplink, a Nasdaq-listed company, uses issuance, structure, and liquidity to increase ETH concentration per share when favorable market conditions arise." },
    { label: "Transparency", title: "Committed to Real-time Clarity", body: "We provide full visibility into ETH deployment, reward generation, and risk management." },
    { label: "Collaboration", title: "Partnered with the Best", body: "We’re partners with Consensys, the builders behind MetaMask, Linea, and the most trusted infrastructure providers and custodians across the Ethereum ecosystem to access enhanced incentives and decentralized finance technologies." },
  ],
  opportunities: [
    { title: "Ethereum is active, productive capital", body: "ETH generates native yield through staking while remaining liquid and programmable, allowing it to function as both a security mechanism and a yield-bearing asset.", icon: "/media/opportunity-1.webp" },
    { title: "Ethereum secures the onchain economy", body: "Ethereum is the leading platform hosting trillions of value across stablecoins, tokenized assets, and decentralized finance. ETH secures this value by protecting the network.", icon: "/media/opportunity-2.webp" },
    { title: "Ethereum scales with real economic usage", body: "As more assets and transactions settle on Ethereum, demand for ETH rises alongside the value secured by the network, linking ETH’s value to adoption rather than speculation.", icon: "/media/opportunity-3.webp" },
    { title: "Ethereum benefits from structural tailwinds", body: "Institutional adoption, regulatory clarity, and asset tokenization continue to push financial activity onto Ethereum, reinforcing ETH’s role in capturing long-term network value.", icon: "/media/opportunity-4.webp" },
  ],
  news: [
    { category: "News", date: "May 11, 2026", title: "The Galaxy Sharplink Onchain Yield Fund", image: "/media/news-galaxy.png" },
  ],
  faq: [
    { question: "Where is Sharplink listed?", answer: "Our stock trades on the Nasdaq under the symbol SBET. Shares may be purchased through a registered stockbroker or online brokerage platform. We do not provide investment advice." },
    { question: "What is a Digital Asset Treasury (DAT)?", answer: "A Digital Asset Treasury (DAT) is a public markets vehicle that holds and safeguards digital assets, like ETH, on behalf of investors, providing regulated access through institutional-grade custody and administration." },
    { question: "How is Sharplink different from directly holding ETH?", answer: "Holding ETH does not generate yield, and even when investors stake through exchanges, those platforms often take a substantial share of the rewards. At Sharplink, 100% of staking yield accrues to shareholders. Through active management, DeFi participation, and accretive capital markets and corporate actions, we are continuously compounding ETH per share over time." },
    { question: "How is Sharplink different from buying an ETF?", answer: "Many ETFs only offer spot exposure without any extra yield. To satisfy daily liquidity requirements, ETFs can realistically stake only about 50% of their holdings. Sharplink, by contrast, has staked 100% of its ETH since day one." },
    { question: "What does it mean to maximize ETH per share?", answer: "Maximizing ETH per share focuses on growing the underlying ETH per public company share through native rewards and ETH-denominated returns, independent of ETH price movements. It also involves Sharplink using capital markets to procure additional ETH in an accretive fashion for shareholders." },
    { question: "Does Sharplink have gaming services?", answer: "Sharplink does not have direct gaming services. In addition to the core Ethereum Digital Asset Treasury strategy, Sharplink operates an online affiliate marketing business that connects regulated gaming operators with potential customers." },
    { question: "Where can I learn more or follow updates?", answer: "As a publicly traded company, Sharplink provides updates through press releases, regulatory filings, and our website. Find the latest information on the Investors page, the U.S. SEC website, the live dashboard, or follow Sharplink on X. For investor inquiries, contact ir@sharplink.com." },
  ],
};
