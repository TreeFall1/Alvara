"use client";

import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CategoryScale, Chart as ChartJS, Filler, LinearScale, LineElement, PointElement, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";
import Image from "next/image";
import { homeContent } from "@/data/home";
import { Arrow } from "./Brand";

gsap.registerPlugin(ScrollTrigger, useGSAP);
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Filler, Tooltip);

export function Productivity() {
  const section = useRef<HTMLElement>(null);
  const chart = useMemo(() => ({
    labels: homeContent.dashboard.history.map((point) => point.date),
    datasets: [{
      data: homeContent.dashboard.history.map((point) => point.value),
      borderColor: "#ff5b35",
      backgroundColor: "rgba(255,91,53,.12)",
      borderWidth: 2,
      pointRadius: 0,
      fill: true,
      tension: 0.25,
    }],
  }), []);

  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 801px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".productivity__stage", start: "top top", end: "+=150%", pin: true, scrub: 1 },
      });
      tl.fromTo(".productivity__dashboard", { clipPath: "inset(34% 27% 29% 27% round 36px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none" })
        .from(".dashboard__grid", { opacity: 0 }, 0.18)
        .from(".dashboard__title", { y: 190, opacity: 0 }, 0.2)
        .from(".dashboard__metric", { y: 70, opacity: 0, stagger: 0.1 }, 0.28)
        .from(".productivity-card", { x: 120, opacity: 0, stagger: 0.12 }, 0.42);
    });
    mm.add("(max-width: 800px)", () => {
      gsap.from(".dashboard__metric, .productivity-card", {
        y: 50, opacity: 0, stagger: 0.1, duration: 0.7,
        scrollTrigger: { trigger: ".productivity__dashboard", start: "top 75%" },
      });
    });
    return () => mm.revert();
  }, { scope: section });

  const stop = (event: React.MouseEvent) => event.preventDefault();

  return (
    <section className="productivity" id="dashboard" ref={section}>
      <div className="productivity__intro page-grid">
        <h2>Pioneering<br/>Productivity</h2>
        <p>By combining native protocol rewards, ecosystem incentives, and institutional-grade custody, we set a new standard for how ETH works as an asset — and compound yield over time.</p>
      </div>
      <div className="productivity__stage">
        <div className="productivity__dashboard">
          <div className="dashboard__grid" aria-hidden="true"/>
          <div className="dashboard__top page-grid">
            <h3 className="dashboard__title">Ethereum<br/>Treasury Dashboard</h3>
            <div className="dashboard__metrics">
              <div className="dashboard__metric"><small>Total ETH holdings</small><strong>{homeContent.dashboard.holdings.toLocaleString("en-US")}</strong></div>
              <div className="dashboard__metric"><small>Staking rewards</small><strong>{homeContent.dashboard.stakingRewards.toLocaleString("en-US")} <i>ETH</i></strong></div>
            </div>
            <div className="dashboard__chart" aria-label="Total ETH holdings chart"><Line data={chart} options={{ responsive: true, maintainAspectRatio: false, animation: false, plugins: { legend: { display: false }, tooltip: { enabled: false } }, scales: { x: { display: false }, y: { display: false } } }}/></div>
            <div className="dashboard__date">As of {homeContent.dashboard.asOf}</div>
            <button className="dashboard__link" onClick={stop}>More in ETH dashboard <Arrow/></button>
          </div>
          <div className="productivity__cards page-grid">
            {homeContent.productivity.map((item) => (
              <article className="productivity-card" key={item.number}>
                <span>{item.number}</span><h4>{item.title}</h4>
                <div className="productivity-card__image"><Image src={item.image} alt="" fill sizes="(max-width: 800px) 38vw, 14vw"/></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
