import React from 'react';

/**
 * ElevenLabs button. Primary is the warm near-black ink pill — the brand's single
 * CTA color. Outline is a transparent hairline pill; tertiary is an inline ink link.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: { height: 32, padding: '0 14px', fontSize: 14 },
    md: { height: 40, padding: '0 20px', fontSize: 'var(--text-button-size)' },
    lg: { height: 48, padding: '0 28px', fontSize: 16 },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-medium)',
    fontSize: s.fontSize,
    lineHeight: 1,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background-color .18s ease, border-color .18s ease, transform .12s ease, opacity .18s ease',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    userSelect: 'none',
  };

  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-ink)',
      borderColor: 'var(--color-hairline-strong)',
    },
    tertiary: {
      background: 'transparent',
      color: 'var(--color-ink)',
      height: 'auto',
      padding: 0,
      borderRadius: 0,
    },
    onDark: {
      background: 'var(--color-on-dark)',
      color: 'var(--color-ink)',
    },
  };

  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const hoverStyle = !disabled && hover ? {
    primary: { background: 'var(--color-primary-active)' },
    outline: { background: 'var(--color-surface-strong)' },
    tertiary: { opacity: 0.6 },
    onDark: { opacity: 0.88 },
  }[variant] : null;

  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        ...base,
        ...variants[variant],
        ...hoverStyle,
        transform: press && !disabled ? 'scale(0.97)' : 'scale(1)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
