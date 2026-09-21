"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";
import { defaultLocale, isLocale } from "@/i18n/config";
import { AnimatedLogo } from "./AnimatedLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {Hero} from "@/components/Hero";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CONTRACT = "EQBq2pgBWUvJ6RjCoByA84y8J4w1TLexKjmJRCC-fyQOolv_";
const TOKEN_SUPPLY = 1_000_000_000;
const tokenAllocation = [
  { percent:40, color:"#a7e5d3" },
  { percent:15, color:"#f4c5a8" },
  { percent:15, color:"#c8b8e0" },
  { percent:10, color:"#a8c8e8" },
  { percent:10, color:"#e8b8c4" },
  { percent:10, color:"#d6d3d1" },
] as const;

const pageCopy = {
  en: {
    heroTitle: "$ALVARA — The token behind Alvara",
    backToMain: "Alvara home",
    buyNow: "Buy $ALVARA",
    launchApp: "Explore the ecosystem",
    narrativeFirst: "$ALVARA",
    narrativeSecond: "the entire ecosystem",
    narrativeCopy: "$ALVARA is already available for purchase on the leading decentralized exchanges (DEXs) of the TON network. To purchase, it is sufficient to connect your wallet (Tonkeeper, Telegram Wallet, etc.), enter the token's smart contract address, and complete a fast swap in a couple of clicks without verification or intermediaries. Join the ecosystem and unlock all the benefits of holding ALVARA right now!",
    live: "ALVARA TRADE · LIVE",
    waysTitle: "Choose how to get $ALVARA",
    waysBefore: "Discover",
    waysAfter: "across TON apps, exchanges and the Alvara ecosystem.",
    contract: "CONTRACT · TON",
    copy: "COPY",
    copied: "COPIED",
    dex: "Decentralized exchange",
    onchain: "Onchain app",
    cex: "Centralized exchange",
    viewOn: "TRACK ON",
    tokenomicsTitle: "ALVARA Tokenomics",
    tokenomicsCopy: "$ALVARA has a fixed supply of one billion tokens. The largest share is reserved for the community and the products that give the token its utility.",
    totalSupply: "TOTAL TOKEN SUPPLY",
    communityApp: "COMMUNITY & PRODUCTS",
    allocated: "TOTAL ALLOCATED",
    tokens: "tokens",
    verifiedCategories: "allocation categories",
    allocationTitle: "Token allocation",
    allocationCopy: "Every token has a defined role—from community rewards and liquidity to development, AI infrastructure and ecosystem partnerships.",
    allocationChart: "Token allocation",
    allocationLabels: ["Community & App", "Liquidity & Market Making", "Team & Developers", "AI Infrastructure", "Partnerships", "Early Investors"],
    securityTitle: "Your assets, under your control",
    securityCopy: "Use Alvara's trading tools while your funds stay on your exchange and your API keys remain encrypted.",
    nonCustodial: "NON-CUSTODIAL",
    encrypted: "AES-256 ENCRYPTED",
    tradeOnly: "Trade-only",
    assetsCopy: "Your assets stay on your exchange. Alvara never accepts user deposits.",
    permissionsCopy: "Withdrawal permissions stay disabled; the bot can only open and close trades.",
    roadmapLabel: "PRELIMINARY ROADMAP",
    roadmapTitle: "How Alvara moves forward",
    roadmapCopy: "A working direction for the ecosystem. Dates and priorities are placeholders and will be updated as the final roadmap takes shape.",
    roadmapItems: [
      { period: "Q4 2026", title: "Token foundation", body: "Finalize the TON token contract, supply model, allocation and public documentation." },
      { period: "Q1 2027", title: "Community launch", body: "Open community programs, quests and the first transparent $ALVARA reward campaigns." },
      { period: "Q2 2027", title: "DEX liquidity", body: "Build reliable on-chain liquidity and introduce long-term LP protection mechanics." },
      { period: "Q3 2027", title: "Product utility", body: "Connect $ALVARA to Alvara products, PRO access and in-app reward mechanics." },
      { period: "Q4 2027", title: "Staking program", body: "Launch token staking with clear terms, transparent rewards and holder dashboards." },
      { period: "Q1 2028", title: "AI for holders", body: "Release holder-focused AI services and expand the token's role across trading tools." },
      { period: "Q2 2028", title: "Exchange expansion", body: "Grow market access through additional integrations and selected centralized exchanges." },
      { period: "Q3 2028", title: "Buyback and burn", body: "Introduce a sustainable buyback-and-burn model tied to real ecosystem activity." },
      { period: "Q4 2028", title: "DAO governance", body: "Move key ecosystem decisions toward transparent, token-based community governance." },
    ],
    footerTagline: "$ALVARA ECOSYSTEM TOKEN",
    footerLead: "One token for access, rewards and participation across Alvara.",
    nonCustodialDesign: "Non-custodial by design",
    about: "ALVARA",
    story: "Why $ALVARA",
    participate: "GET INVOLVED",
    launchAlvara: "Explore Alvara",
    product: "TOKEN UTILITY",
    utilityLinks: ["Product access", "Community rewards", "Staking", "Governance"],
    disclaimer: "$ALVARA is a utility token for the Alvara ecosystem. Digital assets are volatile and may lose all their value. Nothing on this website is financial advice or a recommendation to buy, sell or hold any asset. Third-party links are provided for convenience only.",
    copyright: "© 2026 Alvara Trade. All rights reserved.",
  },
  ru: {
    heroTitle: "$ALVARA — токен экосистемы Alvara",
    backToMain: "На главную Alvara",
    buyNow: "Купить $ALVARA",
    launchApp: "Открыть экосистему",
    narrativeFirst: "$ALVARA",
    narrativeSecond: "всю экосистему",
    narrativeCopy: "$ALVARA уже доступен для покупки на ведущих децентрализованных биржах (DEX) сети TON.\n" +
        "Для покупки достаточно подключить свой кошелек (Tonkeeper, Telegram Wallet и др.), ввести адрес смарт-контракта токена и совершить быстрый обмен в пару кликов без верификации и посредников. Присоединяйтесь к экосистеме и открывайте все возможности удержания ALVARA уже сейчас!",
    live: "ALVARA TRADE · ОНЛАЙН",
    waysTitle: "Как получить $ALVARA",
    waysBefore: "Найдите",
    waysAfter: "в приложениях TON, на биржах и внутри экосистемы Alvara.",
    contract: "КОНТРАКТ В СЕТИ TON",
    copy: "КОПИРОВАТЬ",
    copied: "СКОПИРОВАНО",
    dex: "Децентрализованная биржа",
    onchain: "Ончейн-сервис",
    cex: "Централизованная биржа",
    viewOn: "ОТСЛЕЖИВАТЬ НА",
    tokenomicsTitle: "Токеномика $ALVARA",
    tokenomicsCopy: "У $ALVARA фиксированная эмиссия — один миллиард токенов. Самая большая доля предназначена для сообщества и продуктов, в которых используется токен.",
    totalSupply: "ОБЩЕЕ ПРЕДЛОЖЕНИЕ",
    communityApp: "СООБЩЕСТВО И ПРОДУКТЫ",
    allocated: "ВСЯ ЭМИССИЯ",
    tokens: "токенов",
    verifiedCategories: "направлений распределения",
    allocationTitle: "Распределение токенов",
    allocationCopy: "У каждой части эмиссии своя задача: награды сообществу, ликвидность, разработка, ИИ-инфраструктура и развитие партнёрств.",
    allocationChart: "Распределение токенов",
    allocationLabels: ["Сообщество и приложение", "Ликвидность и маркет-мейкинг", "Команда и разработчики", "ИИ-инфраструктура", "Партнёрства", "Ранние инвесторы"],
    securityTitle: "Ваши активы — под вашим контролем",
    securityCopy: "Пользуйтесь инструментами Alvara: деньги останутся на вашей бирже, а API-ключи — в зашифрованном хранилище.",
    nonCustodial: "АКТИВЫ ОСТАЮТСЯ У ВАС",
    encrypted: "API-КЛЮЧИ ЗАШИФРОВАНЫ",
    tradeOnly: "Только сделки",
    assetsCopy: "Alvara не принимает ваши активы на хранение — они всегда остаются на вашем биржевом счёте.",
    permissionsCopy: "У API нет доступа к выводу средств: бот может только открывать и закрывать сделки.",
    roadmapLabel: "ПРЕДВАРИТЕЛЬНЫЙ РОАДМАП",
    roadmapTitle: "Как будет развиваться Alvara",
    roadmapCopy: "Это рабочий план развития экосистемы. Сроки и приоритеты пока ориентировочные — их можно будет заменить после утверждения финального роадмапа.",
    roadmapItems: [
      { period: "IV кв. 2026", title: "Основа токена", body: "Завершить контракт в сети TON, модель эмиссии, распределение и публичную документацию." },
      { period: "I кв. 2027", title: "Запуск сообщества", body: "Открыть задания, программы для сообщества и первые прозрачные награды в $ALVARA." },
      { period: "II кв. 2027", title: "Ликвидность на DEX", body: "Создать устойчивую ончейн-ликвидность и добавить долгосрочную защиту LP-токенов." },
      { period: "III кв. 2027", title: "Токен в продуктах", body: "Связать $ALVARA с продуктами Alvara, PRO-доступом и системой наград в приложении." },
      { period: "IV кв. 2027", title: "Программа стейкинга", body: "Запустить стейкинг с понятными условиями, прозрачными наградами и кабинетом держателя." },
      { period: "I кв. 2028", title: "ИИ для держателей", body: "Открыть ИИ-сервисы для держателей и расширить роль токена в торговых инструментах." },
      { period: "II кв. 2028", title: "Новые биржи", body: "Расширить доступ к токену через новые интеграции и выбранные централизованные биржи." },
      { period: "III кв. 2028", title: "Выкуп и сжигание", body: "Внедрить устойчивую модель Buyback & Burn, связанную с активностью внутри экосистемы." },
      { period: "IV кв. 2028", title: "Управление через DAO", body: "Передать ключевые решения прозрачному управлению сообщества с помощью токена." },
    ],
    footerTagline: "ТОКЕН ЭКОСИСТЕМЫ ALVARA",
    footerLead: "Один токен для доступа к продуктам, получения наград и участия в развитии Alvara.",
    nonCustodialDesign: "Активы остаются у владельца",
    about: "ALVARA",
    story: "Зачем нужен $ALVARA",
    participate: "УЧАСТВОВАТЬ",
    launchAlvara: "Открыть Alvara",
    product: "ВОЗМОЖНОСТИ ТОКЕНА",
    utilityLinks: ["Доступ к продуктам", "Награды сообщества", "Стейкинг", "Управление"],
    disclaimer: "$ALVARA — утилитарный токен экосистемы Alvara. Цифровые активы волатильны и могут полностью потерять стоимость. Материалы сайта не являются финансовой рекомендацией или советом покупать, продавать либо хранить активы. Ссылки на сторонние ресурсы даны только для удобства.",
    copyright: "© 2026 Alvara Trade. Все права защищены.",
  },
} as const;

function Arrow(){ return <svg className="arrow-right" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>; }
function ArrowUp(){ return <svg className="arrow-up" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>; }
function CopyIcon(){ return <svg className="copy-icon" viewBox="0 0 24 24" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>; }
function PlayIcon(){ return <svg className="play-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>; }
function Logo({hero=false}:{hero?:boolean}){ const letters="ALVARA".split(""); return <span className={`word-logo ${hero?"hero-word":""}`}>{hero?letters.map((letter,index)=><span className="split-char" style={{"--char":index} as React.CSSProperties} key={`${letter}-${index}`}>{letter}</span>):<>AL<i>V</i>ARA</>}</span>; }

const socialPaths = {
  x:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  instagram:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163ZM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z",
  youtube:"M23.5 6.507a2.994 2.994 0 0 0-2.107-2.12C19.53 3.883 12 3.883 12 3.883s-7.53 0-9.393.504A2.994 2.994 0 0 0 .5 6.507C0 8.38 0 12 0 12s0 3.62.5 5.493a2.994 2.994 0 0 0 2.107 2.12c1.863.504 9.393.504 9.393.504s7.53 0 9.393-.504a2.994 2.994 0 0 0 2.107-2.12C24 15.62 24 12 24 12s0-3.62-.5-5.493ZM9.6 15.568V8.432L15.818 12 9.6 15.568Z"
};
function SocialIcon({name}:{name:keyof typeof socialPaths}){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={socialPaths[name]}/></svg>}

export function CoinPage(){
  const { i18n } = useTranslation();
  const content = useHomeContent();
  const resolvedLanguage = i18n.resolvedLanguage ?? "";
  const locale = isLocale(resolvedLanguage) ? resolvedLanguage : defaultLocale;
  const text = pageCopy[locale];
  const numberLocale = locale === "ru" ? "ru-RU" : "en-US";
  const [copied,setCopied] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const copyContract = async () => { await navigator.clipboard.writeText(CONTRACT); setCopied(true); window.setTimeout(()=>setCopied(false),1400); };

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const section = root.current?.querySelector<HTMLElement>(".roadmap");
    const track = section?.querySelector<HTMLElement>(".roadmap-track");
    if (!section || !track) return;

    const travel = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const horizontal = gsap.to(track, {
      x: () => -travel(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${travel() + window.innerHeight * 0.35}`,
        pin: true,
        scrub: 1.15,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: ({ progress }) => section.style.setProperty("--roadmap-progress", progress.toString()),
      },
    });

    const cards = gsap.utils.toArray<HTMLElement>(".roadmap-card", section);
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { autoAlpha: index === 0 ? 1 : 0.35, scale: index === 0 ? 1 : 0.94 },
        {
          autoAlpha: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontal,
            start: "left 92%",
            end: "center 62%",
            scrub: true,
          },
        },
      );
    });
  }, { scope: root, dependencies: [locale], revertOnUpdate: true });

  useEffect(()=>{
    const host=root.current;if(!host)return;
    document.documentElement.dataset.hydrated = "true";
    requestAnimationFrame(()=>host.classList.add("is-ready"));
    let frame=0;
    const update=()=>{frame=0;host.style.setProperty("--hero-shift",`${Math.min(window.scrollY*.16,110)}px`);host.querySelectorAll<HTMLElement>("[data-reveal]:not([data-in='true'])").forEach(node=>{if(node.getBoundingClientRect().top<window.innerHeight*.94)node.dataset.in="true"})};
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
    window.addEventListener("scroll",schedule,{passive:true});window.addEventListener("resize",schedule,{passive:true});update();
    return()=>{delete document.documentElement.dataset.hydrated;window.removeEventListener("scroll",schedule);window.removeEventListener("resize",schedule);if(frame)cancelAnimationFrame(frame)};
  },[]);

  return <div className="reference-site" ref={root}>
    <main>
        <Hero/>

      <section className="narrative" id="story">
        <div className="video-card reveal" data-reveal>
            <Image style={{width: '1024px', height: "auto"}} src={'/media/coins2.png'} alt={"coins"} width={1024} height={512} />
         </div>
        <div className="narrative-copy reveal" data-reveal><h2><b>{text.narrativeFirst}</b><br/></h2><p>{text.narrativeCopy}</p></div>
      </section>

      <section className="ways" id="access">
        <header className="center-heading reveal" data-reveal><h2>{text.waysTitle}</h2><p>{text.waysBefore} <b>$ALVARA</b> {text.waysAfter}</p></header>
        <div className="contract-box reveal" data-reveal><div><small>{text.contract}</small><code>{CONTRACT}</code></div><button onClick={copyContract}>{copied?`✓ ${text.copied}`:<><CopyIcon/> {text.copy}</>}</button></div>
        <div className="way-grid">
          <Way name="Aerodrome" type={text.dex} icon="/media/platforms/aerodrome.webp" tone="red" href="https://aerodrome.finance"/>
          <Way name="Pump" type={text.onchain} icon="/media/platforms/pump.png" tone="green" href="https://app.pump.fun"/>
          <Way name="Fomo" type={text.onchain} icon="/media/platforms/fomo.png" tone="violet" href="https://fomo.family"/>
          <Way name="STON.fi" type={text.dex} icon="/media/platforms/ston.png" tone="blue" href="https://ston.fi"/>
          <Way name="Kraken" type={text.cex} icon="/media/platforms/kraken.png" tone="purple" href="https://www.kraken.com"/>
          <Way name="KuCoin" type={text.cex} icon="/media/platforms/kucoin.png" tone="teal" href="https://www.kucoin.com"/>
        </div>
        <div className="marketplaces reveal" data-reveal><span>{text.viewOn}</span><b>◉ CoinMarketCap</b><b>● coingecko</b></div>
      </section>

      <section className="ref-tokenomics" id="tokenomics">
        <header className="center-heading center-heading--light reveal" data-reveal><h2>{text.tokenomicsTitle}</h2><p>{text.tokenomicsCopy}</p></header>
        <div className="token-stats"><Stat label={text.totalSupply} value={TOKEN_SUPPLY.toLocaleString(numberLocale)} note="ALVARA" delay={0}/><Stat label={text.communityApp} value={`${tokenAllocation[0].percent}%`} note={`${(TOKEN_SUPPLY*tokenAllocation[0].percent/100).toLocaleString(numberLocale)} ${text.tokens}`} delay={1}/><Stat label={text.allocated} value={`${tokenAllocation.reduce((sum,item)=>sum+item.percent,0)}%`} note={`${tokenAllocation.length} ${text.verifiedCategories}`} delay={2}/></div>
        <div className="unlock-card reveal" data-reveal><h3>{text.allocationTitle}</h3><p className="chart-description">{text.allocationCopy}</p><TokenAllocationChart labels={text.allocationLabels} ariaLabel={text.allocationChart} numberLocale={numberLocale}/></div>
        <div className="security-card reveal" data-reveal><h3>{text.securityTitle}</h3><p>{text.securityCopy}</p><div><article><small>◈ {text.nonCustodial}</small><b>100%</b><p>{text.assetsCopy}</p></article><article><small>◇ {text.encrypted}</small><b>{text.tradeOnly}</b><p>{text.permissionsCopy}</p></article></div></div>
        <div className="token-buttons"><a className="capsule capsule--white" href="https://ston.fi">{text.buyNow} <Arrow/></a><a className="capsule capsule--glass" href={content.telegramUrl}>{text.launchApp}</a></div>
      </section>

      <section className="roadmap" id="roadmap">
        <div className="roadmap-stage">
          <header className="roadmap-heading">
            <div><small>{text.roadmapLabel}</small><h2>{text.roadmapTitle}</h2></div>
            <p>{text.roadmapCopy}</p>
          </header>
          <div className="roadmap-viewport">
            <div className="roadmap-track">
              {text.roadmapItems.map((item,index)=><article className="roadmap-card" key={item.period}>
                <div className="roadmap-card__inner">
                  <header><span>{item.period}</span><strong>{String(index+1).padStart(2,"0")}</strong></header>
                  <i aria-hidden="true"/>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>)}
            </div>
          </div>
          <div className="roadmap-meter" aria-hidden="true"><b>01</b><div><span/></div><b>{String(text.roadmapItems.length).padStart(2,"0")}</b></div>
        </div>
      </section>
    </main>

    <footer className="ref-footer reveal" data-reveal>
      <div className="footer-grid"><div className="footer-brand"><Logo/><small>{text.footerTagline}</small><p>{text.footerLead}</p><div className="footer-contract"><small>{text.contract}</small><button onClick={copyContract}>{CONTRACT}　▣ {text.copy}</button></div><span>◇ {text.nonCustodialDesign}</span></div><FooterColumn title={text.about} links={[[text.story,"#story"],[text.tokenomicsTitle,"#tokenomics"],[text.roadmapTitle,"#roadmap"]]}/><FooterColumn title={text.participate} links={[[text.buyNow,"https://ston.fi"],[text.launchAlvara,content.telegramUrl]]}/><FooterColumn title={text.product} links={text.utilityLinks.map(label=>[label,"#story"])}/></div>
      <div className="disclaimer">{text.disclaimer}</div>
      <div className="footer-wordmark">ALVARA</div>
      <div className="copyright">{text.copyright}</div>
    </footer>
  </div>;
}

function Way({name,type,icon,tone,href}:{name:string,type:string,icon:string,tone:string,href:string}){const move=(event:React.PointerEvent<HTMLAnchorElement>)=>{const el=event.currentTarget,r=el.getBoundingClientRect(),x=(event.clientX-r.left)/r.width,y=(event.clientY-r.top)/r.height;el.style.setProperty("--mx",`${x*100}%`);el.style.setProperty("--my",`${y*100}%`);el.style.setProperty("--rx",`${(0.5-y)*5}deg`);el.style.setProperty("--ry",`${(x-.5)*7}deg`)};const leave=(event:React.PointerEvent<HTMLAnchorElement>)=>{event.currentTarget.style.setProperty("--rx","0deg");event.currentTarget.style.setProperty("--ry","0deg")};return <a className={`way-card ${tone} reveal`} data-reveal href={href} target="_blank" rel="noopener noreferrer" onPointerMove={move} onPointerLeave={leave}><span className="way-mark"><Image src={icon} alt="" width={56} height={56}/></span><div><b>{name}</b><small>{type}</small></div><i><ArrowUp/></i></a>}
function Stat({label,value,note,delay}:{label:string,value:string,note:string,delay:number}){return <article className="reveal" data-reveal style={{"--delay":`${delay*110}ms`} as React.CSSProperties}><small>{label}</small><b>{value}</b><span>{note}</span></article>}
function TokenAllocationChart({labels,ariaLabel,numberLocale}:{labels:readonly string[];ariaLabel:string;numberLocale:string}){
  const [active,setActive]=useState(0);
  const selected=tokenAllocation[active];
  const selectedLabel=labels[active];
  const tokenCount=TOKEN_SUPPLY*selected.percent/100;
  return <div className="allocation-layout">
    <figure className="allocation-figure">
      <svg className="allocation-chart" viewBox="0 0 220 220" role="img" aria-label={`${ariaLabel}: ${tokenAllocation.map((item,index)=>`${labels[index]} ${item.percent}%`).join(", ")}`}>
        <circle className="allocation-track" cx="110" cy="110" r="82" pathLength="100"/>
        {tokenAllocation.map((item,index)=>{const start=tokenAllocation.slice(0,index).reduce((sum,entry)=>sum+entry.percent,0);return <circle className={active===index?"is-active":""} cx="110" cy="110" r="82" pathLength="100" fill="none" stroke={item.color} strokeWidth="28" strokeDasharray={`${item.percent} ${100-item.percent}`} strokeDashoffset={-start} transform="rotate(-90 110 110)" onMouseEnter={()=>setActive(index)} key={labels[index]}/>})}
      </svg>
      <figcaption><strong>{selected.percent}%</strong><span>{selectedLabel}</span><b>{tokenCount.toLocaleString(numberLocale)}</b><small>ALVARA</small></figcaption>
    </figure>
    <div className="allocation-list">{tokenAllocation.map((item,index)=><button className={active===index?"is-active":""} onMouseEnter={()=>setActive(index)} onFocus={()=>setActive(index)} onClick={()=>setActive(index)} key={labels[index]}><i style={{background:item.color}}/><span><b>{labels[index]}</b><small>{(TOKEN_SUPPLY*item.percent/100).toLocaleString(numberLocale)} ALVARA</small></span><strong>{item.percent}%</strong></button>)}</div>
  </div>;
}
function FooterColumn({title,links}:{title:string,links:string[][]}){return <nav className="footer-column"><small>{title}</small>{links.map(([label,href])=><a href={href} key={label}>{label}</a>)}</nav>}
