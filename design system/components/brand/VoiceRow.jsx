import React from 'react';

/**
 * Voice-library row. A 32px circular voice plate with initials, a name + accent stack,
 * and an optional preview button. Hairline divider between rows.
 */
export function VoiceRow({
  name = 'Rachel',
  accent = 'American · Calm',
  initials,
  onPreview,
  divider = true,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const init = initials || name.slice(0, 2).toUpperCase();
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '12px 8px',
        borderBottom: divider ? '1px solid var(--color-hairline)' : 'none',
        borderRadius: 'var(--radius-sm)',
        background: hover ? 'var(--color-canvas-soft)' : 'transparent',
        transition: 'background-color .15s ease',
        ...style,
      }}
      {...rest}
    >
      <span style={{
        flex: '0 0 auto', width: 32, height: 32, borderRadius: 'var(--radius-full)',
        background: 'var(--color-surface-strong)', color: 'var(--color-body-strong)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.4px',
      }}>{init}</span>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-md-size)',
          fontWeight: 'var(--weight-medium)', color: 'var(--color-ink)', letterSpacing: '0.16px',
        }}>{name}</div>
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-muted)', marginTop: 1,
        }}>{accent}</div>
      </div>

      <button
        type="button"
        onClick={onPreview}
        aria-label={`Preview ${name}`}
        style={{
          flex: '0 0 auto', height: 32, padding: '0 14px', borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--color-hairline-strong)', background: 'transparent',
          color: 'var(--color-ink)', cursor: 'pointer', fontFamily: 'var(--font-sans)',
          fontSize: 13, fontWeight: 'var(--weight-medium)',
          opacity: hover ? 1 : 0.0, transition: 'opacity .15s ease',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}
      >
        <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor"><path d="M1 1v8a.7.7 0 0 0 1.06.6l6.4-4a.7.7 0 0 0 0-1.2l-6.4-4A.7.7 0 0 0 1 1Z"/></svg>
        Play
      </button>
    </div>
  );
}
