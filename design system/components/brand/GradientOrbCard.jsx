import React from 'react';

const ORBS = {
  mint: 'var(--color-gradient-mint)',
  peach: 'var(--color-gradient-peach)',
  lavender: 'var(--color-gradient-lavender)',
  sky: 'var(--color-gradient-sky)',
  rose: 'var(--color-gradient-rose)',
};

/**
 * Gradient-orb card — the brand's signature atmospheric moment. A soft pastel radial
 * bloom drifts behind centered display copy on a near-white card. The orb is pure
 * atmosphere: never a button fill, never a text color.
 */
export function GradientOrbCard({
  orb = 'mint',
  secondOrb,
  eyebrow,
  title,
  body,
  children,
  style,
  ...rest
}) {
  const c1 = ORBS[orb] || ORBS.mint;
  const c2 = secondOrb ? (ORBS[secondOrb] || ORBS.peach) : null;
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-canvas-soft)',
        borderRadius: 'var(--radius-xxl)',
        border: '1px solid var(--color-hairline)',
        padding: 32,
        minHeight: 220,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        ...style,
      }}
      {...rest}
    >
      <div aria-hidden style={{
        position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
        width: '120%', height: '110%', pointerEvents: 'none',
        background: `radial-gradient(40% 50% at 50% 38%, ${c1} 0%, rgba(255,255,255,0) 70%)`,
        opacity: 0.85,
      }} />
      {c2 && (
        <div aria-hidden style={{
          position: 'absolute', top: '-10%', left: '12%',
          width: '70%', height: '80%', pointerEvents: 'none',
          background: `radial-gradient(45% 50% at 50% 50%, ${c2} 0%, rgba(255,255,255,0) 72%)`,
          opacity: 0.6,
        }} />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {eyebrow && (
          <div style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption-upper-size)',
            fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--text-caption-upper-ls)',
            textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 12,
          }}>{eyebrow}</div>
        )}
        {title && (
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)',
            fontSize: 'var(--text-display-md-size)', lineHeight: 'var(--text-display-md-lh)',
            letterSpacing: 'var(--text-display-md-ls)', color: 'var(--color-ink)',
          }}>{title}</div>
        )}
        {body && (
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-md-size)',
            lineHeight: 'var(--text-body-md-lh)', letterSpacing: 'var(--text-body-md-ls)',
            color: 'var(--color-body)', margin: '12px 0 0', maxWidth: 460,
          }}>{body}</p>
        )}
        {children}
      </div>
    </div>
  );
}
