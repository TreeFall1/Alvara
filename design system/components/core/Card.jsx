import React from 'react';

/**
 * Content card. White surface, hairline border, xl radius. `hoverable` adds the single
 * soft-drop shadow tier on hover; `padding` controls inner spacing.
 */
export function Card({ hoverable = false, padding = 24, radius = 'xl', children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const radii = { lg: 'var(--radius-lg)', xl: 'var(--radius-xl)', xxl: 'var(--radius-xxl)' };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--color-surface-card)',
        border: '1px solid var(--color-hairline)',
        borderRadius: radii[radius] || radii.xl,
        padding,
        boxShadow: hoverable && hover ? 'var(--shadow-soft)' : 'var(--shadow-card)',
        transition: 'box-shadow .2s ease, transform .2s ease',
        transform: hoverable && hover ? 'translateY(-2px)' : 'none',
        color: 'var(--color-ink)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
