import React from 'react';

/**
 * Pill badge / label. Surface-strong plate with uppercase caption type by default;
 * `tone` switches to semantic or dark treatments.
 */
export function Badge({ tone = 'neutral', children, style, ...rest }) {
  const tones = {
    neutral: { background: 'var(--color-surface-strong)', color: 'var(--color-ink)' },
    dark: { background: 'var(--color-surface-dark)', color: 'var(--color-on-dark)' },
    success: { background: 'rgba(22,163,74,0.12)', color: 'var(--color-success)' },
    error: { background: 'rgba(220,38,38,0.10)', color: 'var(--color-error)' },
    outline: { background: 'transparent', color: 'var(--color-muted)', boxShadow: 'inset 0 0 0 1px var(--color-hairline-strong)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-caption-upper-size)',
        fontWeight: 'var(--weight-semibold)',
        lineHeight: 'var(--text-caption-upper-lh)',
        letterSpacing: 'var(--text-caption-upper-ls)',
        textTransform: 'uppercase',
        padding: '4px 10px',
        borderRadius: 'var(--radius-pill)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
