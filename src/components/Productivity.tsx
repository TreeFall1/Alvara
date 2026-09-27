"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

type Benefit = { title: string; detail?: string };

function BenefitIcon({ index }: { index: number }) {
  const paths = [
    <path key="bolt" d="m23 3-13 19h9l-2 19 15-23h-9l2-15Z" fill="currentColor" stroke="none"/>,
    <><path key="shield" d="M21 3 36 9v11c0 10-6 16-15 20C12 36 6 30 6 20V9L21 3Z" fill="currentColor" stroke="none"/><path key="check" d="m15 21 4 4 8-9" stroke="#fff"/></>,
    <path key="bars" d="M5 35V23h7v12m4 0V16h7v19m4 0V8h7v27M3 35h34"/>,
    <><circle key="circle" cx="21" cy="21" r="17"/><path key="globe" d="M4 21h34M21 4c-5 5-8 11-8 17s3 12 8 17M21 4c5 5 8 11 8 17s-3 12-8 17M8 12h26M8 30h26"/></>,
  ];
  return <svg viewBox="0 0 42 42" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{paths[index]}</svg>;
}

export function Productivity() {
  const { t } = useTranslation();
  const benefits = t("performance.benefits", { returnObjects: true }) as Benefit[];
  const strategies = t("performance.strategies", { returnObjects: true }) as string[];

  return (
    <section className="productivity" id="performance">
      <div className="productivity__stage">
        <div className="trade-poster">
          <header className="trade-poster__header">
            <div className="trade-poster__brand" aria-label="Alvara Trade">
              <span className="trade-poster__logo" aria-hidden="true"/>
              <span><strong>Alvara</strong><small>Trade</small></span>
            </div>
            <p className="trade-poster__eyebrow">{t("performance.eyebrow")}</p>
          </header>

          <div className="trade-poster__body">
            <div className="trade-poster__copy">
              <h2>{t("performance.titleFirst")} <br/>{t("performance.titleSecond")}</h2>
              <p>{t("performance.copy")}</p>
              <ul className="trade-poster__benefits">
                {benefits.map((benefit, index) => (
                  <li key={benefit.title}>
                    <span className="trade-poster__benefit-icon"><BenefitIcon index={index}/></span>
                    <span><strong>{benefit.title}</strong>{benefit.detail && <small>{benefit.detail}</small>}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="trade-poster__phone">
              <Image src="/media/phone.png" alt={t("performance.phoneAlt")} width={1024} height={1536} sizes="(max-width: 700px) 100vw, (max-width: 1024px) 55vw, 46vw"/>
            </div>
          </div>

          <footer className="trade-poster__footer">
            <div className="trade-poster__exchanges" aria-label={t("performance.exchangesLabel")}>
              <span className="trade-poster__exchange trade-poster__exchange--binance">◆ BINANCE</span>
              <span className="trade-poster__exchange trade-poster__exchange--bybit">BYBIT</span>
              <span className="trade-poster__exchange trade-poster__exchange--okx">OKX</span>
              <span className="trade-poster__exchange trade-poster__exchange--mexc">MEXC</span>
              <small>{t("performance.exchangesMore")}</small>
            </div>
            <p className="trade-poster__closing"><span aria-hidden="true"/><span className="trade-poster__closing-copy">{t("performance.closingFirst")}<br/>{t("performance.closingSecond")}</span></p>
          </footer>
        </div>
      </div>
      <div className="strategy-marquee" role="img" aria-label={strategies.join(", ")}>
        <div className="strategy-marquee__track" aria-hidden="true">
          {[...strategies, ...strategies].map((strategy, index) => <span key={`${strategy}-${index}`}>{strategy}</span>)}
        </div>
      </div>
    </section>
  );
}
