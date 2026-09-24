import { homeContent } from "@/data/home";
import type { HomePageContent } from "@/types/content";
import type { Locale } from "./config";

type Translation = {
  meta: { title: string; description: string };
  header: {
    home: string;
    primaryNavigation: string;
    launchApp: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    mobileStat: string;
    mobileDescription: string;
  };
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    qualities: { title: string; description: string }[];
  };
  performance: {
    titleFirst: string;
    titleSecond: string;
    copy: string;
    dashboardFirst: string;
    dashboardSecond: string;
    strategies: string[];
  };
  products: {
    eyebrow: string;
    titleFirst: string;
    titleSecond: string;
    stepsFirst: string;
    stepsSecond: string;
    signalStatus: string;
    signalCount: string;
    signalTitle: string;
    signalCopy: string;
  };
  opportunity: { statement: string; startTrading: string };
  security: {
    eyebrow: string;
    titleFirst: string;
    titleSecond: string;
    badge: string;
    systemStatus: string;
    verified: string;
    exchange: string;
    exchangeCopy: string;
    encryptedChannel: string;
    encryptedCopy: string;
    alvara: string;
    alvaraCopy: string;
    withdrawalAccess: string;
    disabled: string;
    tradingAccess: string;
    enabled: string;
  };
  coinPromo: { title: string; copy: string; cta: string; visualLabel: string };
  faq: { title: string; subtitle: string; startFree: string };
  footer: {
    titleFirst: string;
    titleSecond: string;
    copy: string;
    openTelegram: string;
    description: string;
    navigation: string;
    exchanges: string;
    socialMedia: string;
    tokenContract: string;
    copyContract: string;
    copied: string;
    backToTop: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  content: HomePageContent;
};

const en: Translation = {
  meta: {
    title: "Alvara Trade — AI-Powered Trading in Telegram",
    description: "AI market analysis across 26+ strategies, clear trade setups and one-click execution on your exchange — inside Telegram.",
  },
  header: {
    home: "Alvara Trade home",
    primaryNavigation: "Primary navigation",
    launchApp: "Launch App",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    mobileStat: "$0 TO START",
    mobileDescription: "AI-powered trading in Telegram across 26 strategies.",
  },
  hero: {
    title: "Value Beyond Limits",
    subtitle: "The next generation of digital value.",
    tagline: "Innovate. Invest. Elevate.",
    qualities: [
      { title: "Secure", description: "Advanced security" },
      { title: "Fast", description: "Instant transactions" },
      { title: "Global", description: "Borderless opportunities" },
      { title: "Growth", description: "Empowering your future" },
    ],
  },
  performance: {
    titleFirst: "Built for",
    titleSecond: "Real Decisions",
    copy: "From market scan to order execution, every part of Alvara is designed to make complex analysis easier to understand and act on.",
    dashboardFirst: "Alvara AI",
    dashboardSecond: "at a Glance",
    strategies: ["Smart Money", "ICT", "Market Structure", "Order Blocks", "Fair Value Gaps", "RSI", "MACD", "ADX"],
  },
  products: {
    eyebrow: "Strategies and tools",
    titleFirst: "Analysis You Can",
    titleSecond: "Actually Use",
    stepsFirst: "How It Works",
    stepsSecond: "in Three Steps",
    signalStatus: "Live market scan",
    signalCount: "26+ strategies",
    signalTitle: "One clear setup",
    signalCopy: "Multiple independent checks have to agree before the bot presents a trading scenario.",
  },
  opportunity: {
    statement: "From a market question to a structured trade in minutes. Alvara keeps the analysis, execution and monitoring in one Telegram bot.",
    startTrading: "Open the Bot",
  },
  security: {
    eyebrow: "Security by design",
    titleFirst: "Built to trade.",
    titleSecond: "Never to take custody.",
    badge: "Non-custodial architecture",
    systemStatus: "Security perimeter",
    verified: "Protected",
    exchange: "Your exchange",
    exchangeCopy: "Assets stay here",
    encryptedChannel: "Encrypted channel",
    encryptedCopy: "AES-256 protected API key",
    alvara: "Alvara Trade",
    alvaraCopy: "Trade commands only",
    withdrawalAccess: "Withdrawal access",
    disabled: "Disabled",
    tradingAccess: "Trading access",
    enabled: "Enabled",
  },
  coinPromo: {
    title: "Meet $ALVARA",
    copy: "The Alvara ecosystem has its own utility token. Tokenomics, ways to access it and the preliminary roadmap now live on a dedicated page, so this page can stay focused on the product.",
    cta: "Explore the Token",
    visualLabel: "Alvara ecosystem token",
  },
  faq: { title: "FAQ", subtitle: "Everything you need to know", startFree: "Start Free" },
  footer: {
    titleFirst: "Start Trading with Data,",
    titleSecond: "Not Emotion",
    copy: "Open the Telegram bot, review a live market setup and see how Alvara fits into your trading process.",
    openTelegram: "Open Alvara Trade in Telegram",
    description: "AI-powered market analysis, trade execution and position monitoring inside Telegram.",
    navigation: "Navigation",
    exchanges: "Supported Exchanges",
    socialMedia: "Social media",
    tokenContract: "$ALVARA CONTRACT · TON",
    copyContract: "Copy address",
    copied: "Copied",
    backToTop: "Back to top",
    copyright: "© 2026 Alvara Trade. All rights reserved",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
  content: homeContent,
};

const ru: Translation = {
  meta: {
    title: "Alvara Trade — трейдинг с ИИ в Telegram",
    description: "Анализ рынка по 26+ стратегиям, понятные торговые сценарии и отправка сделки на биржу прямо из Telegram.",
  },
  header: {
    home: "Главная Alvara Trade",
    primaryNavigation: "Основная навигация",
    launchApp: "Запустить",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    language: "Язык",
    mobileStat: "$0 ДЛЯ СТАРТА",
    mobileDescription: "Трейдинг с ИИ в Telegram на основе 26 стратегий.",
  },
  hero: {
    title: "Ценность без границ",
    subtitle: "Новое поколение цифровой ценности.",
    tagline: "Создавайте. Инвестируйте. Развивайтесь.",
    qualities: [
      { title: "Надёжно", description: "Современная защита" },
      { title: "Быстро", description: "Мгновенные транзакции" },
      { title: "Глобально", description: "Возможности без границ" },
      { title: "Рост", description: "Ваше будущее" },
    ],
  },
  performance: {
    titleFirst: "Сложный анализ",
    titleSecond: "простыми словами",
    copy: "От поиска точки входа до отправки ордера — Alvara помогает разобраться в рыночной ситуации и принять решение без лишнего информационного шума.",
    dashboardFirst: "Alvara AI",
    dashboardSecond: "коротко о главном",
    strategies: ["Smart Money", "ICT", "Структура рынка", "Order Blocks", "Fair Value Gaps", "RSI", "MACD", "ADX"],
  },
  products: {
    eyebrow: "Стратегии и инструменты",
    titleFirst: "Анализ, которым",
    titleSecond: "удобно пользоваться",
    stepsFirst: "Как это работает",
    stepsSecond: "за три шага",
    signalStatus: "Рынок анализируется",
    signalCount: "26+ стратегий",
    signalTitle: "Один понятный сценарий",
    signalCopy: "Бот показывает торговую идею только тогда, когда её подтверждают несколько независимых методов анализа.",
  },
  opportunity: {
    statement: "От вопроса о рынке до продуманной сделки — за несколько минут. Анализ, исполнение и контроль позиции собраны в одном Telegram-боте.",
    startTrading: "Открыть бота",
  },
  security: {
    eyebrow: "Безопасность по умолчанию",
    titleFirst: "Бот управляет сделкой.",
    titleSecond: "Не вашими деньгами.",
    badge: "Без хранения средств",
    systemStatus: "Контур безопасности",
    verified: "Защищён",
    exchange: "Ваша биржа",
    exchangeCopy: "Активы остаются здесь",
    encryptedChannel: "Зашифрованный канал",
    encryptedCopy: "API-ключ защищён AES-256",
    alvara: "Alvara Trade",
    alvaraCopy: "Только торговые команды",
    withdrawalAccess: "Доступ к выводу",
    disabled: "Отключён",
    tradingAccess: "Торговые операции",
    enabled: "Разрешены",
  },
  coinPromo: {
    title: "Токен $ALVARA",
    copy: "У экосистемы Alvara есть собственный утилитарный токен. Токеномику, способы покупки и предварительный роадмап мы собрали на отдельной странице, чтобы здесь оставить главное — продукт и бота.",
    cta: "Перейти к странице токена",
    visualLabel: "Токен экосистемы Alvara",
  },
  faq: { title: "FAQ", subtitle: "Всё, что важно знать", startFree: "Начать бесплатно" },
  footer: {
    titleFirst: "Торгуйте на данных,",
    titleSecond: "а не на эмоциях",
    copy: "Откройте Telegram-бота, посмотрите живой торговый сценарий и решите, подходит ли Alvara вашему стилю торговли.",
    openTelegram: "Открыть Alvara Trade в Telegram",
    description: "Анализ рынка, исполнение сделок и контроль открытых позиций в одном Telegram-боте.",
    navigation: "Навигация",
    exchanges: "Поддерживаемые биржи",
    socialMedia: "Социальные сети",
    tokenContract: "КОНТРАКТ $ALVARA · TON",
    copyContract: "Скопировать адрес",
    copied: "Скопировано",
    backToTop: "Наверх",
    copyright: "© 2026 Alvara Trade. Все права защищены",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
  },
  content: {
    navigation: [
      { label: "Главная", href: "#home" },
      { label: "Возможности", href: "#performance" },
      { label: "Стратегии", href: "#products" },
      { label: "Как это работает", href: "#how-it-works" },
      { label: "Безопасность", href: "#security" },
      { label: "FAQ", href: "#faq" },
    ],
    proofMetrics: [
      { value: "26+", label: "Стратегий проверяются для каждого сигнала", detail: "Smart Money, ICT, структура рынка и индикаторы" },
      { value: "< 1 сек", label: "Нужно, чтобы отправить ордер на биржу через API" },
      { value: "24/7", label: "Бот следит за рынком и доступен в Telegram" },
    ],
    features: [
      { label: "Мультистратегийный анализ", title: "Один сигнал — больше 26 проверок", body: "Alvara сочетает Smart Money, паттерны ICT, структуру рынка и технические индикаторы, а не полагается на единственный источник сигнала." },
      { label: "Готовый торговый сценарий", title: "Вход, цели и риск на одном экране", body: "Бот превращает анализ в понятный план: зона входа, три цели Take Profit, Stop Loss и оценка вероятности сценария." },
      { label: "Исполнение в один клик", title: "Торгуйте, не выходя из Telegram", body: "Подключите Binance, Bybit или MEXC через API только для торговли. Проверьте сценарий, выберите размер позиции и отправьте ордер на биржу одним нажатием." },
      { label: "Риск и автоматизация", title: "Держите риск под контролем", body: "Задайте ограничения по риску, включите автоисполнение, когда будете готовы, и следите за открытыми позициями в том же интерфейсе Telegram." },
    ],
    steps: [
      { title: "Откройте бота в Telegram", body: "Запустите Alvara Trade и выберите биржу, которой уже пользуетесь. Отдельный торговый терминал не понадобится.", icon: "/media/opportunity-1.webp" },
      { title: "Выберите рынок и изучите анализ", body: "Бот проверит больше 26 стратегий и покажет, почему появился сценарий, где входить и где ограничить риск.", icon: "/media/opportunity-2.webp" },
      { title: "Подтвердите сделку или включите автоматизацию", body: "Выберите размер позиции и отправьте ордер на биржу. Средства останутся там, а Alvara продолжит следить за сделкой.", icon: "/media/opportunity-3.webp" },
    ],
    security: [
      { title: "Ваши активы остаются у вас", body: "Мы никогда не принимаем депозиты пользователей на свои счета. Средства всегда остаются на вашей бирже.", badge: "Средства на вашей бирже" },
      { title: "Шифрование AES-256", body: "Ваши API-ключи хранятся в изолированном зашифрованном хранилище, защищённом стандартом AES-256.", badge: "Зашифровано" },
      { title: "Вывод средств отключён", body: "При создании API-ключа вы отключаете право на вывод. Бот может только открывать и закрывать сделки.", badge: "Только торговля" },
    ],
    faq: [
      { question: "Нужно ли платить за Alvara Trade?", answer: "Открыть бота и познакомиться с основным сценарием работы можно бесплатно. Стоимость платных функций и автоматизации всегда показывается до их подключения." },
      { question: "Какая минимальная сумма нужна для старта?", answer: "Ограничение задаёт ваша биржа — обычно начать можно примерно с $10. Для первой сделки лучше выбрать сумму, с которой вам комфортно тестировать новый инструмент." },
      { question: "Чем Alvara отличается от обычных каналов с сигналами?", answer: "Alvara не просто публикует цену входа. Бот проверяет больше 26 стратегий, объясняет торговый сценарий и позволяет отправить сделку на вашу биржу прямо из Telegram." },
    ],
    telegramUrl: homeContent.telegramUrl,
  },
};

export const translations: Record<Locale, Translation> = { en, ru };

export const resources = {
  en: { translation: en },
  ru: { translation: ru },
};
