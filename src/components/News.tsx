"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { homeContent } from "@/data/home";
import { Arrow } from "./Brand";
import Image from "next/image";

export function News() {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const previous = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  const items = [
    ...homeContent.news,
    { ...homeContent.news[0], date: "April 24, 2026", title: "Sharplink Expands Institutional Ethereum Strategy" },
    { ...homeContent.news[0], date: "March 18, 2026", title: "Building Productive Access to the Ethereum Economy" },
  ];

  return (
    <section className="news page-grid" id="news">
      <div className="news__heading"><p>Insights from the blog</p><h2>Latest News</h2></div>
      <button className="button button--dark news__visit" onClick={(event) => event.preventDefault()}>Visit our blog <Arrow/></button>
      <div className="news__viewport" ref={emblaRef}>
        <div className="news__track">
          {items.map((item, index) => (
            <button className="news-card" key={`${item.date}-${index}`} onClick={(event) => event.preventDefault()}>
              <span className="news-card__image"><Image src={item.image} alt="" fill sizes="(max-width: 800px) 84vw, 32vw"/><i><Arrow diagonal/></i></span>
              <span className="news-card__meta"><small>{item.category}</small><time>{item.date}</time></span>
              <strong>{item.title}</strong><span className="news-card__more">Read more <Arrow/></span>
            </button>
          ))}
        </div>
      </div>
      <div className="news__controls"><button onClick={previous} aria-label="Previous news"><Arrow/></button><button onClick={next} aria-label="Next news"><Arrow/></button></div>
    </section>
  );
}
