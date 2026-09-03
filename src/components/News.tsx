import { homeContent } from "@/data/home";

export function News() {
  return (
    <section className="news page-grid" id="security">
      <div className="news__heading">
        <p>Security First</p>
        <h2>Bank‑Level<br/>Security</h2>
      </div>
      <div className="security__badge"><span aria-hidden="true">✓</span> Non-custodial by design</div>
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
              <span className="news-card__meta"><small>Protection 0{index + 1}</small><span>{item.badge}</span></span>
              <strong>{item.title}</strong>
              <p className="news-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
