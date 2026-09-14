import React from 'react';
import { Button } from '../core/Button.jsx';
import { Badge } from '../core/Badge.jsx';

/**
 * Pricing tier card. Standard tiers sit on white; the featured tier inverts to the dark
 * canvas. Holds a plan name, price, feature list, and a CTA.
 */
export function PricingTier({
  plan = 'Creator',
  price = '$22',
  period = '/mo',
  blurb,
  features = [],
  cta = 'Get started',
  featured = false,
  badge,
  onSelect,
  style,
  ...rest
}) {
  const dark = featured;
  const ink = dark ? 'var(--color-on-dark)' : 'var(--color-ink)';
  const sub = dark ? 'var(--color-on-dark-soft)' : 'var(--color-body)';
  const tick = dark ? 'var(--color-on-dark)' : 'var(--color-ink)';

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', gap: 20,
        background: dark ? 'var(--color-surface-dark)' : 'var(--color-surface-card)',
        border: dark ? '1px solid var(--color-surface-dark-elevated)' : '1px solid var(--color-hairline)',
        borderRadius: 'var(--radius-xl)',
        padding: 32,
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-title-sm-size)',
          fontWeight: 'var(--weight-medium)', color: ink,
        }}>{plan}</span>
        {badge && <Badge tone={dark ? 'neutral' : 'dark'}>{badge}</Badge>}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)',
          fontSize: 'var(--text-display-lg-size)', letterSpacing: 'var(--text-display-lg-ls)',
          color: ink,
        }}>{price}</span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: sub }}>{period}</span>
      </div>

      {blurb && (
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm-size)',
          lineHeight: 1.5, color: sub, margin: 0,
        }}>{blurb}</p>
      )}

      <Button
        variant={dark ? 'onDark' : 'primary'}
        fullWidth
        onClick={onSelect}
      >{cta}</Button>

      <ul style={{ listStyle: 'none', margin: '4px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {features.map((f, i) => (
          <li key={i} style={{
            display: 'flex', gap: 10, alignItems: 'flex-start',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm-size)',
            lineHeight: 1.45, color: dark ? 'var(--color-on-dark)' : 'var(--color-body-strong)',
          }}>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flex: '0 0 auto', marginTop: 2 }}>
              <path d="M3.5 8.5l3 3 6-7" stroke={tick} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
