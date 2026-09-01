export function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? "brand--light" : ""}`} aria-label="SharpLink">
      <svg viewBox="0 0 42 42" aria-hidden="true"><path d="M4 5h34L17 37H4l17-17H4z" fill="currentColor"/></svg>
      <span>sharplink</span>
    </span>
  );
}

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg className="arrow" viewBox="0 0 18 18" aria-hidden="true">
      {diagonal ? <path d="M4 14 14 4M7 4h7v7"/> : <path d="M2 9h13M10 4l5 5-5 5"/>}
    </svg>
  );
}

export function Nasdaq() {
  return (
    <span className="nasdaq" aria-label="Nasdaq">
      <svg viewBox="0 0 34 36" aria-hidden="true"><path d="m2 12 9-10h10L12 12l10 12-9 10L2 22Zm11 0 9-10h10L23 12l9 10-9 12-10-12Z" fill="currentColor"/></svg>
      <b>Nasdaq</b>
    </span>
  );
}
