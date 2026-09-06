"use client";

import { useTranslation } from "react-i18next";
import { useHomeContent } from "@/i18n/useHomeContent";

export function News() {
  const { t } = useTranslation();
  const homeContent = useHomeContent();
  return (
    <section className="news page-grid" id="security">
      <div className="news__heading">
        <p>{t("security.eyebrow")}</p>
        <h2>{t("security.titleFirst")}<br/>{t("security.titleSecond")}</h2>
      </div>
      <div className="security__badge"><span aria-hidden="true">✓</span> {t("security.badge")}</div>
      <div className="news__viewport">
        <div className="news__track">
          {homeContent.security.map((item, index) => (
            <article className="news-card" key={item.title}>
              <span className="news-card__image">
                <span className="news-card__image-art" aria-hidden="true">
                  <b>0{index + 1}</b>
                  <em>{item.badge}</em>
                </span>
              </span>
              <span className="news-card__meta"><small>{t("security.protection")} 0{index + 1}</small><span>{item.badge}</span></span>
              <strong>{item.title}</strong>
              <p className="news-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="roadmap">
        <div className="roadmap__heading">
          <p>{t("security.roadmapEyebrow")}</p>
          <h3>{t("security.roadmapTitle")}</h3>
          <span>2026 — 2027+</span>
        </div>
        <ol className="roadmap__list">
          {homeContent.roadmap.map((item, index) => {
            const [beforeLink, afterLink] = item.link ? item.body.split(item.link.label) : [item.body, ""];
            return (
              <li className="roadmap-card" key={item.phase}>
                <div className="roadmap-card__meta">
                  <span>0{index + 1}</span>
                  <span>{item.period}</span>
                </div>
                <p className="roadmap-card__phase">{item.phase}</p>
                <h4>{item.title}</h4>
                <p className="roadmap-card__body">
                  {beforeLink}
                  {item.link && <a href={item.link.href} target="_blank" rel="noreferrer">{item.link.label}</a>}
                  {afterLink}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
