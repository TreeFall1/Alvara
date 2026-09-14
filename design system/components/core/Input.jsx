import React from 'react';

/**
 * Text input. White surface, hairline-strong border, md radius. On focus the border
 * thickens to 2px ink. Optional leading label and error message.
 */
export function Input({ label, error, hint, type = 'text', style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontSize: 'var(--text-body-sm-size)', fontWeight: 'var(--weight-medium)',
          color: 'var(--color-body-strong)', letterSpacing: '0.15px',
        }}>{label}</label>
      )}
      <input
        id={inputId}
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          height: 44,
          padding: '12px 16px',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-body-md-size)',
          letterSpacing: 'var(--text-body-md-ls)',
          color: 'var(--color-ink)',
          background: 'var(--color-surface-card)',
          borderRadius: 'var(--radius-md)',
          border: error
            ? '2px solid var(--color-error)'
            : focus
              ? '2px solid var(--color-ink)'
              : '1px solid var(--color-hairline-strong)',
          outline: 'none',
          boxSizing: 'border-box',
          transition: 'border-color .15s ease',
          ...style,
        }}
        {...rest}
      />
      {error
        ? <span style={{ fontSize: 13, color: 'var(--color-error)' }}>{error}</span>
        : hint
          ? <span style={{ fontSize: 13, color: 'var(--color-muted)' }}>{hint}</span>
          : null}
    </div>
  );
}
