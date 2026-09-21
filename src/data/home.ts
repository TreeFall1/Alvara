import type { HomePageContent } from "@/types/content";

export const homeContent: HomePageContent = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Performance", href: "#performance" },
    { label: "Strategies", href: "#products" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Security", href: "#security" },
    { label: "FAQ", href: "#faq" },
  ],
  proofMetrics: [
    { value: "26+", label: "Strategies checked for every signal", detail: "Smart Money, ICT, market structure and indicators" },
    { value: "3", label: "Take-profit targets in every trade setup" },
    { value: "< 1 sec", label: "To send an order to your exchange via API" },
    { value: "24/7", label: "Market monitoring inside the Telegram bot" },
  ],
  features: [
    {
      label: "Multi-strategy analysis",
      title: "One Signal, 26+ Market Checks",
      body: "Alvara combines Smart Money concepts, ICT patterns, market structure and technical indicators instead of relying on a single signal source.",
    },
    {
      label: "Complete trade setup",
      title: "Entry, Targets and Risk in One Screen",
      body: "The bot turns its analysis into a practical setup with an entry zone, three Take Profit targets, Stop Loss and a clear probability estimate.",
    },
    {
      label: "One-click execution",
      title: "Trade Without Leaving Telegram",
      body: "Connect Binance, Bybit or MEXC with a trade-only API key. Review the setup, choose your position size and send the order to your exchange in one tap.",
    },
    {
      label: "Risk and automation",
      title: "Stay in Control of Every Position",
      body: "Set risk limits, enable automated execution when you are ready, and monitor open positions from the same Telegram interface.",
    },
  ],
  steps: [
    {
      title: "Launch the Bot in Telegram",
      body: "Open Alvara Trade in Telegram and choose the exchange you already use. No separate trading terminal is required.",
      icon: "/media/opportunity-1.webp",
    },
    {
      title: "Choose a Market and Review the Analysis",
      body: "The bot checks more than 26 strategies and shows why a setup exists, together with entry, targets and Stop Loss.",
      icon: "/media/opportunity-2.webp",
    },
    {
      title: "Confirm the Trade or Enable Automation",
      body: "Choose the position size and send the order to your exchange. Your funds remain there while Alvara monitors the trade.",
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
      answer: "You can open the bot and explore its core workflow for free. Any paid plans or advanced automation options are shown clearly before you enable them.",
    },
    {
      question: "What is the minimum amount required to start?",
      answer: "You can start with any deposit allowed by your exchange—typically from $10 on Binance or Bybit.",
    },
    {
      question: "How is Alvara different from regular signal channels?",
      answer: "Alvara does more than publish an entry price. It checks more than 26 strategies, explains the setup and lets you send the trade to your own exchange from Telegram.",
    },
  ],
  // Replace this with the production Mini App deep link when its public username is finalized.
  telegramUrl: "https://t.me/AlvaraTradeBot",
};
