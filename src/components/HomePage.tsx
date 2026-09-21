"use client";

import { useEffect } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Productivity } from "./Productivity";
import { Stack } from "./Stack";
import { Opportunity } from "./Opportunity";
import { News } from "./News";
import { CoinPromo } from "./CoinPromo";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";

export function HomePage() {
  useEffect(() => {
    document.documentElement.dataset.hydrated = "true";
    return () => { delete document.documentElement.dataset.hydrated; };
  }, []);

  return (
    <>
      <SmoothScroll/>
      <Header/>
      <main className="site-main">
        <Hero/>
        <Productivity/>
        <Stack/>
        <Opportunity/>
        <News/>
        <CoinPromo/>
        <Faq/>
      </main>
      <Footer/>
    </>
  );
}
