import type { HomePageContent } from "@/types/content";

export const homeContent: HomePageContent = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Performance", href: "#performance" },
    { label: "Products", href: "#products" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Security", href: "#security" },
    { label: "FAQ", href: "#faq" },
  ],
  proofMetrics: [
    { value: "79.7%", label: "Average AI algorithm win rate" },
    { value: "26+", label: "Trading strategies in a single signal", detail: "Smart Money, ICT, Indicator Confluence" },
    { value: "< 1 sec", label: "Trade execution on your exchange via API" },
    { value: "$0", label: "Free start and token farming for new users" },
  ],
  features: [
    {
      label: "AI Signal Generator",
      title: "Instant Analysis for Any Token",
      body: "AI analyzes Order Blocks, Fair Value Gaps (FVG), and RSI, MACD, and ADX oscillators to deliver a precise entry point, three Take Profit targets, and a Stop Loss with calculated risk.",
    },
    {
      label: "One-Click Copy Trading",
      title: "Trade Directly from Telegram",
      body: "Connect your Binance, Bybit, or MEXC API keys. Tap “Copy Trade,” and the bot will place the orders on your exchange automatically based on your deposit size.",
    },
    {
      label: "On-Chain & Macro Analytics",
      title: "See What the Whales See",
      body: "Track major capital movements, MVRV Z-Score, NUPL, Open Interest (OI), and the economic calendar in a clear format without complicated terminology.",
    },
    {
      label: "F2E & Staking · $ALVARA Farming",
      title: "Learn and Earn",
      body: "Complete the daily AI Quiz, take part in market predictions, and stake USDT to receive daily $ALVARA token airdrops.",
    },
  ],
  steps: [
    {
      title: "Launch the Bot in Telegram",
      body: "Open the Alvara Trade WebApp directly in the messenger—no lengthy registration or verification required.",
      icon: "/media/opportunity-1.webp",
    },
    {
      title: "Choose a Coin and Get an AI Signal",
      body: "The algorithm checks 26 market factors and delivers a ready-to-trade setup with an estimated probability of success.",
      icon: "/media/opportunity-2.webp",
    },
    {
      title: "Copy the Trade or Enable Auto‑Trading",
      body: "Orders are sent to your exchange instantly. Manage risk and monitor your deposit growth from one place.",
      icon: "/media/opportunity-3.webp",
    },
  ],
  security: [
    {
      title: "Your Assets Stay Yours",
      body: "We never accept user deposits into our accounts. Your funds remain on your own exchange at all times.",
      badge: "Non-custodial",
    },
    {
      title: "AES‑256 Encryption",
      body: "Your API keys are stored in an isolated, encrypted vault protected by the AES-256 standard.",
      badge: "Encrypted",
    },
    {
      title: "Withdrawals Disabled",
      body: "When creating an API key, you disable withdrawal permissions. The bot can only open and close trades.",
      badge: "Trade-only API",
    },
  ],
  faq: [
    {
      question: "Do I need to pay to use Alvara Trade?",
      answer: "Core features, trading signals, and participation in $ALVARA farming are completely free. PRO features unlock when you hold ecosystem tokens.",
    },
    {
      question: "What is the minimum amount required to start?",
      answer: "You can start with any deposit allowed by your exchange—typically from $10 on Binance or Bybit.",
    },
    {
      question: "How is Alvara different from regular signal channels?",
      answer: "We do not provide subjective forecasts. Our AI analyzes the mathematical convergence of 26 indicators and patterns in real time, then lets you execute the trade on your exchange in one click.",
    },
  ],
  // Replace this with the production Mini App deep link when its public username is finalized.
  telegramUrl: "https://t.me/AlvaraTradeBot",
};
