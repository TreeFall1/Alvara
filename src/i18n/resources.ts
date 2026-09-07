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
    titleStart: string;
    titleEnd: string;
    launch: string;
    learnMore: string;
    copy: string;
    trustFunds: string;
    trustExchanges: string;
  };
  performance: {
    titleFirst: string;
    titleSecond: string;
    copy: string;
    dashboardFirst: string;
    dashboardSecond: string;
    tokenomics: {
      eyebrow: string;
      title: string;
      totalSupply: string;
      category: string;
      allocation: string;
      tokens: string;
      chartLabel: string;
      items: string[];
    };
  };
  products: {
    eyebrow: string;
    titleFirst: string;
    titleSecond: string;
    stepsFirst: string;
    stepsSecond: string;
  };
  opportunity: { statement: string; startTrading: string };
  security: {
    eyebrow: string;
    titleFirst: string;
    titleSecond: string;
    badge: string;
    protection: string;
    roadmapEyebrow: string;
    roadmapTitle: string;
  };
  faq: { title: string; subtitle: string; startFree: string };
  footer: {
    titleFirst: string;
    titleSecond: string;
    copy: string;
    openTelegram: string;
    description: string;
    navigation: string;
    exchanges: string;
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
    description: "AI analysis across 26 trading strategies, one-click trade execution, and $ALVARA token farming—all inside Telegram.",
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
    titleStart: "Trade Like the Top 1% of Traders",
    titleEnd: "with Alvara",
    launch: "Launch Alvara Trade in Telegram",
    learnMore: "Learn More",
    copy: "A smart trading ecosystem in Telegram: AI analysis across 26 strategies, one-click trade copying to exchanges, and $ALVARA token farming.",
    trustFunds: "Your funds never leave your exchange — API keys protected with AES-256 encryption",
    trustExchanges: "Supports Binance, Bybit, and MEXC",
  },
  performance: {
    titleFirst: "Proof in",
    titleSecond: "the Numbers",
    copy: "Real-time analysis, multi-strategy confirmation, and direct API execution turn complex market data into one clear action.",
    dashboardFirst: "Alvara AI",
    dashboardSecond: "at a Glance",
    tokenomics: {
      eyebrow: "$ALVARA Token",
      title: "Token Allocation",
      totalSupply: "Total Supply",
      category: "Category",
      allocation: "Allocation",
      tokens: "Tokens",
      chartLabel: "$ALVARA token allocation chart",
      items: [
        "Community, Airdrop & App",
        "Liquidity & Market Making",
        "Team & Developers",
        "AI Infrastructure & Ecosystem",
        "Market Making & Partnerships",
        "Early Investors (Angel Round)",
      ],
    },
  },
  products: {
    eyebrow: "Ecosystem Products",
    titleFirst: "Everything You Need",
    titleSecond: "to Trade Smarter",
    stepsFirst: "How It Works",
    stepsSecond: "in Three Steps",
  },
  opportunity: {
    statement: "From Telegram to a live trade in minutes. Alvara turns market analysis into clear, executable decisions.",
    startTrading: "Start Trading",
  },
  security: {
    eyebrow: "Security First",
    titleFirst: "Bank-Level",
    titleSecond: "Security",
    badge: "Non-custodial by design",
    protection: "Protection",
    roadmapEyebrow: "What Comes Next",
    roadmapTitle: "Roadmap",
  },
  faq: { title: "FAQ", subtitle: "Everything you need to know", startFree: "Start Free" },
  footer: {
    titleFirst: "Start Trading with Data,",
    titleSecond: "Not Emotion",
    copy: "Join the Alvara ecosystem now and receive 100 $ALVARA points on your first login.",
    openTelegram: "Open Alvara Trade in Telegram",
    description: "AI-powered trading in Telegram. One ecosystem for signals, execution, and $ALVARA rewards.",
    navigation: "Navigation",
    exchanges: "Supported Exchanges",
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
    description: "ИИ-анализ по 26 торговым стратегиям, сделки в один клик и фарминг токена $ALVARA — всё внутри Telegram.",
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
    titleStart: "Торгуйте как топ-1% трейдеров",
    titleEnd: "вместе с Alvara",
    launch: "Запустить Alvara Trade в Telegram",
    learnMore: "Подробнее",
    copy: "Умная торговая экосистема в Telegram: ИИ-анализ по 26 стратегиям, копирование сделок на биржу в один клик и фарминг токена $ALVARA.",
    trustFunds: "Ваши средства всегда остаются на бирже — API-ключи защищены шифрованием AES-256",
    trustExchanges: "Поддерживаются Binance, Bybit и MEXC",
  },
  performance: {
    titleFirst: "Результат",
    titleSecond: "в цифрах",
    copy: "Анализ в реальном времени, подтверждение несколькими стратегиями и прямое исполнение через API превращают сложные рыночные данные в одно понятное действие.",
    dashboardFirst: "Alvara AI",
    dashboardSecond: "в двух словах",
    tokenomics: {
      eyebrow: "Токен $ALVARA",
      title: "Распределение токенов",
      totalSupply: "Общее предложение",
      category: "Категория",
      allocation: "Доля",
      tokens: "Токены",
      chartLabel: "Диаграмма распределения токенов $ALVARA",
      items: [
        "Комьюнити, Airdrop и приложение",
        "Ликвидность и маркет-мейкинг",
        "Команда и разработчики",
        "Инфраструктура AI и экосистема",
        "Маркет-мейкинг и партнёрства",
        "Ранние инвесторы (Angel Round)",
      ],
    },
  },
  products: {
    eyebrow: "Продукты экосистемы",
    titleFirst: "Всё, что нужно",
    titleSecond: "для умной торговли",
    stepsFirst: "Как это работает",
    stepsSecond: "за три шага",
  },
  opportunity: {
    statement: "От Telegram до реальной сделки — за считаные минуты. Alvara превращает анализ рынка в понятные решения, готовые к исполнению.",
    startTrading: "Начать торговать",
  },
  security: {
    eyebrow: "Безопасность прежде всего",
    titleFirst: "Банковский уровень",
    titleSecond: "защиты",
    badge: "Без хранения средств",
    protection: "Защита",
    roadmapEyebrow: "Что дальше",
    roadmapTitle: "Дорожная карта",
  },
  faq: { title: "FAQ", subtitle: "Всё, что важно знать", startFree: "Начать бесплатно" },
  footer: {
    titleFirst: "Торгуйте на данных,",
    titleSecond: "а не на эмоциях",
    copy: "Присоединяйтесь к экосистеме Alvara и получите 100 баллов $ALVARA при первом входе.",
    openTelegram: "Открыть Alvara Trade в Telegram",
    description: "Трейдинг с ИИ в Telegram. Единая экосистема для сигналов, исполнения сделок и наград $ALVARA.",
    navigation: "Навигация",
    exchanges: "Поддерживаемые биржи",
    backToTop: "Наверх",
    copyright: "© 2026 Alvara Trade. Все права защищены",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
  },
  content: {
    navigation: [
      { label: "Главная", href: "#home" },
      { label: "Результаты", href: "#performance" },
      { label: "Продукты", href: "#products" },
      { label: "Как это работает", href: "#how-it-works" },
      { label: "Безопасность", href: "#security" },
      { label: "FAQ", href: "#faq" },
    ],
    proofMetrics: [
      { value: "79,7%", label: "Средний процент успешных сделок алгоритма ИИ" },
      { value: "26+", label: "Торговых стратегий в одном сигнале", detail: "Smart Money, ICT, сочетание индикаторов" },
      { value: "< 1 сек", label: "Исполнение сделки на вашей бирже через API" },
      { value: "$0", label: "Бесплатный старт и фарминг токенов для новых пользователей" },
    ],
    features: [
      { label: "Генератор ИИ-сигналов", title: "Мгновенный анализ любого токена", body: "ИИ анализирует блоки ордеров, разрывы справедливой стоимости (FVG), а также осцилляторы RSI, MACD и ADX, чтобы определить точку входа, три цели Take Profit и Stop Loss с рассчитанным риском." },
      { label: "Копитрейдинг в один клик", title: "Торгуйте прямо из Telegram", body: "Подключите API-ключи Binance, Bybit или MEXC. Нажмите «Копировать сделку», и бот автоматически разместит ордера на вашей бирже с учётом размера депозита." },
      { label: "Ончейн- и макроаналитика", title: "Смотрите на рынок глазами китов", body: "Отслеживайте крупные перемещения капитала, MVRV Z-Score, NUPL, открытый интерес (OI) и экономический календарь в понятном формате без сложной терминологии." },
      { label: "F2E и стейкинг · фарминг $ALVARA", title: "Учитесь и зарабатывайте", body: "Проходите ежедневную ИИ-викторину, участвуйте в прогнозах рынка и размещайте USDT в стейкинге, чтобы ежедневно получать токены $ALVARA." },
    ],
    steps: [
      { title: "Запустите бота в Telegram", body: "Откройте WebApp Alvara Trade прямо в мессенджере — без долгой регистрации и верификации.", icon: "/media/opportunity-1.webp" },
      { title: "Выберите монету и получите ИИ-сигнал", body: "Алгоритм проверит 26 рыночных факторов и выдаст готовый торговый сценарий с оценкой вероятности успеха.", icon: "/media/opportunity-2.webp" },
      { title: "Скопируйте сделку или включите автоторговлю", body: "Ордера мгновенно отправляются на вашу биржу. Управляйте риском и следите за ростом депозита в одном месте.", icon: "/media/opportunity-3.webp" },
    ],
    security: [
      { title: "Ваши активы остаются у вас", body: "Мы никогда не принимаем депозиты пользователей на свои счета. Средства всегда остаются на вашей бирже.", badge: "Non-custodial" },
      { title: "Шифрование AES-256", body: "Ваши API-ключи хранятся в изолированном зашифрованном хранилище, защищённом стандартом AES-256.", badge: "Зашифровано" },
      { title: "Вывод средств отключён", body: "При создании API-ключа вы отключаете право на вывод. Бот может только открывать и закрывать сделки.", badge: "Только торговля" },
    ],
    roadmap: [
      { phase: "Этап 1", title: "Запуск и основа", period: "III кв. 2026", body: "Выпуск токена $ALVARA, запуск пула ликвидности на STON.fi с заблокированными LP-токенами, публикация whitepaper и старт сообщества.", link: { label: "STON.fi", href: "https://ston.fi" } },
      { phase: "Этап 2", title: "Рост и маркетинг", period: "IV кв. 2026", body: "Запуск Telegram Mini App с механиками tap-to-earn и airdrop, маркетинговая кампания и листинг на CoinGecko и CoinMarketCap." },
      { phase: "Этап 3", title: "Экосистема и польза", period: "I–II кв. 2027", body: "Запуск ИИ-сервисов для держателей токена, стейкинга и первый листинг на CEX — Bybit, MEXC или Bitget." },
      { phase: "Этап 4", title: "Масштабирование и DAO", period: "III кв. 2027+", body: "Переход к управлению через DAO, внедрение механизма Buyback & Burn и выход на биржи первого уровня." },
    ],
    faq: [
      { question: "Нужно ли платить за Alvara Trade?", answer: "Основные функции, торговые сигналы и участие в фарминге $ALVARA полностью бесплатны. PRO-функции открываются при хранении токенов экосистемы." },
      { question: "Какая минимальная сумма нужна для старта?", answer: "Можно начать с любого депозита, разрешённого вашей биржей, — обычно от $10 на Binance или Bybit." },
      { question: "Чем Alvara отличается от обычных каналов с сигналами?", answer: "Мы не даём субъективных прогнозов. ИИ в реальном времени анализирует математическое схождение 26 индикаторов и паттернов, а затем позволяет исполнить сделку на вашей бирже в один клик." },
    ],
    telegramUrl: homeContent.telegramUrl,
  },
};

const uk: Translation = {
  meta: {
    title: "Alvara Trade — трейдинг зі ШІ в Telegram",
    description: "ШІ-аналіз за 26 торговими стратегіями, угоди в один клік і фармінг токена $ALVARA — усе в Telegram.",
  },
  header: {
    home: "Головна Alvara Trade",
    primaryNavigation: "Основна навігація",
    launchApp: "Запустити",
    openMenu: "Відкрити меню",
    closeMenu: "Закрити меню",
    language: "Мова",
    mobileStat: "$0 ДЛЯ СТАРТУ",
    mobileDescription: "Трейдинг зі ШІ в Telegram на основі 26 стратегій.",
  },
  hero: {
    titleStart: "Торгуйте як топ-1% трейдерів",
    titleEnd: "разом з Alvara",
    launch: "Запустити Alvara Trade у Telegram",
    learnMore: "Докладніше",
    copy: "Розумна торгова екосистема в Telegram: ШІ-аналіз за 26 стратегіями, копіювання угод на біржу в один клік і фармінг токена $ALVARA.",
    trustFunds: "Ваші кошти завжди залишаються на біржі — API-ключі захищені шифруванням AES-256",
    trustExchanges: "Підтримуються Binance, Bybit і MEXC",
  },
  performance: {
    titleFirst: "Результат",
    titleSecond: "у цифрах",
    copy: "Аналіз у реальному часі, підтвердження кількома стратегіями та пряме виконання через API перетворюють складні ринкові дані на одну зрозумілу дію.",
    dashboardFirst: "Alvara AI",
    dashboardSecond: "коротко про головне",
    tokenomics: {
      eyebrow: "Токен $ALVARA",
      title: "Розподіл токенів",
      totalSupply: "Загальна пропозиція",
      category: "Категорія",
      allocation: "Частка",
      tokens: "Токени",
      chartLabel: "Діаграма розподілу токенів $ALVARA",
      items: [
        "Спільнота, Airdrop і застосунок",
        "Ліквідність і маркет-мейкінг",
        "Команда та розробники",
        "AI-інфраструктура й екосистема",
        "Маркет-мейкінг і партнерства",
        "Ранні інвестори (Angel Round)",
      ],
    },
  },
  products: {
    eyebrow: "Продукти екосистеми",
    titleFirst: "Усе, що потрібно",
    titleSecond: "для розумної торгівлі",
    stepsFirst: "Як це працює",
    stepsSecond: "за три кроки",
  },
  opportunity: {
    statement: "Від Telegram до реальної угоди — за лічені хвилини. Alvara перетворює аналіз ринку на зрозумілі рішення, готові до виконання.",
    startTrading: "Почати торгувати",
  },
  security: {
    eyebrow: "Безпека понад усе",
    titleFirst: "Банківський рівень",
    titleSecond: "захисту",
    badge: "Без зберігання коштів",
    protection: "Захист",
    roadmapEyebrow: "Що далі",
    roadmapTitle: "Дорожня карта",
  },
  faq: { title: "FAQ", subtitle: "Усе, що варто знати", startFree: "Почати безкоштовно" },
  footer: {
    titleFirst: "Торгуйте на основі даних,",
    titleSecond: "а не емоцій",
    copy: "Приєднуйтеся до екосистеми Alvara й отримайте 100 балів $ALVARA під час першого входу.",
    openTelegram: "Відкрити Alvara Trade у Telegram",
    description: "Трейдинг зі ШІ в Telegram. Єдина екосистема для сигналів, виконання угод і винагород $ALVARA.",
    navigation: "Навігація",
    exchanges: "Підтримувані біржі",
    backToTop: "Нагору",
    copyright: "© 2026 Alvara Trade. Усі права захищено",
    privacy: "Політика конфіденційності",
    terms: "Умови використання",
  },
  content: {
    navigation: [
      { label: "Головна", href: "#home" },
      { label: "Результати", href: "#performance" },
      { label: "Продукти", href: "#products" },
      { label: "Як це працює", href: "#how-it-works" },
      { label: "Безпека", href: "#security" },
      { label: "FAQ", href: "#faq" },
    ],
    proofMetrics: [
      { value: "79,7%", label: "Середній відсоток успішних угод алгоритму ШІ" },
      { value: "26+", label: "Торгових стратегій в одному сигналі", detail: "Smart Money, ICT, поєднання індикаторів" },
      { value: "< 1 с", label: "Виконання угоди на вашій біржі через API" },
      { value: "$0", label: "Безкоштовний старт і фармінг токенів для нових користувачів" },
    ],
    features: [
      { label: "Генератор ШІ-сигналів", title: "Миттєвий аналіз будь-якого токена", body: "ШІ аналізує блоки ордерів, розриви справедливої вартості (FVG), а також осцилятори RSI, MACD і ADX, щоб визначити точку входу, три цілі Take Profit і Stop Loss із розрахованим ризиком." },
      { label: "Копітрейдинг в один клік", title: "Торгуйте безпосередньо з Telegram", body: "Підключіть API-ключі Binance, Bybit або MEXC. Натисніть «Копіювати угоду», і бот автоматично розмістить ордери на вашій біржі з урахуванням розміру депозиту." },
      { label: "Ончейн- і макроаналітика", title: "Дивіться на ринок очима китів", body: "Відстежуйте великі переміщення капіталу, MVRV Z-Score, NUPL, відкритий інтерес (OI) та економічний календар у зрозумілому форматі без складної термінології." },
      { label: "F2E і стейкінг · фармінг $ALVARA", title: "Навчайтеся та заробляйте", body: "Проходьте щоденну ШІ-вікторину, беріть участь у прогнозах ринку та розміщуйте USDT у стейкінгу, щоб щодня отримувати токени $ALVARA." },
    ],
    steps: [
      { title: "Запустіть бота в Telegram", body: "Відкрийте WebApp Alvara Trade просто в месенджері — без тривалої реєстрації та верифікації.", icon: "/media/opportunity-1.webp" },
      { title: "Оберіть монету й отримайте ШІ-сигнал", body: "Алгоритм перевірить 26 ринкових факторів і надасть готовий торговий сценарій з оцінкою ймовірності успіху.", icon: "/media/opportunity-2.webp" },
      { title: "Скопіюйте угоду або ввімкніть автоторгівлю", body: "Ордери миттєво надсилаються на вашу біржу. Керуйте ризиком і стежте за зростанням депозиту в одному місці.", icon: "/media/opportunity-3.webp" },
    ],
    security: [
      { title: "Ваші активи залишаються у вас", body: "Ми ніколи не приймаємо депозити користувачів на свої рахунки. Кошти завжди залишаються на вашій біржі.", badge: "Non-custodial" },
      { title: "Шифрування AES-256", body: "Ваші API-ключі зберігаються в ізольованому зашифрованому сховищі, захищеному стандартом AES-256.", badge: "Зашифровано" },
      { title: "Виведення коштів вимкнено", body: "Під час створення API-ключа ви вимикаєте право на виведення. Бот може лише відкривати та закривати угоди.", badge: "Лише торгівля" },
    ],
    roadmap: [
      { phase: "Етап 1", title: "Запуск і основа", period: "III кв. 2026", body: "Випуск токена $ALVARA, запуск пулу ліквідності на STON.fi із заблокованими LP-токенами, публікація whitepaper і старт спільноти.", link: { label: "STON.fi", href: "https://ston.fi" } },
      { phase: "Етап 2", title: "Зростання і маркетинг", period: "IV кв. 2026", body: "Запуск Telegram Mini App із механіками tap-to-earn та airdrop, маркетингова кампанія й лістинг на CoinGecko та CoinMarketCap." },
      { phase: "Етап 3", title: "Екосистема і користь", period: "I–II кв. 2027", body: "Запуск ШІ-сервісів для власників токена, стейкінгу та перший лістинг на CEX — Bybit, MEXC або Bitget." },
      { phase: "Етап 4", title: "Масштабування і DAO", period: "III кв. 2027+", body: "Перехід до управління через DAO, упровадження механізму Buyback & Burn і вихід на біржі першого рівня." },
    ],
    faq: [
      { question: "Чи потрібно платити за Alvara Trade?", answer: "Основні функції, торгові сигнали й участь у фармінгу $ALVARA повністю безкоштовні. PRO-функції відкриваються за умови зберігання токенів екосистеми." },
      { question: "Яка мінімальна сума потрібна для старту?", answer: "Можна почати з будь-якого депозиту, дозволеного вашою біржею, — зазвичай від $10 на Binance або Bybit." },
      { question: "Чим Alvara відрізняється від звичайних каналів із сигналами?", answer: "Ми не даємо суб’єктивних прогнозів. ШІ в реальному часі аналізує математичне сходження 26 індикаторів і патернів, а потім дає змогу виконати угоду на вашій біржі в один клік." },
    ],
    telegramUrl: homeContent.telegramUrl,
  },
};

export const translations: Record<Locale, Translation> = { en, ru, uk };

export const resources = {
  en: { translation: en },
  ru: { translation: ru },
  uk: { translation: uk },
};
