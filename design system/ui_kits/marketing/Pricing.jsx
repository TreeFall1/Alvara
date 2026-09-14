/* Pricing band — monthly/annual toggle over three tiers (middle featured). */
function Pricing() {
  const { PricingTier } = window.ElevenLabsDesignSystem_ff1699;
  const [annual, setAnnual] = React.useState(false);
  const price = (m, a) => annual ? a : m;
  return (
    <section style={{ background: 'var(--color-canvas-soft)', padding: '96px 32px', borderTop: '1px solid var(--color-hairline)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 36, lineHeight: 1.17, letterSpacing: '-0.36px', color: 'var(--color-ink)', margin: '0 0 24px' }}>Pricing that scales with you</h2>
          <div style={{ display: 'inline-flex', gap: 4, padding: 4, background: 'var(--color-surface-strong)', borderRadius: 'var(--radius-pill)' }}>
            {[['Monthly', false], ['Annual', true]].map(([label, val]) => (
              <button key={label} onClick={() => setAnnual(val)} style={{
                border: 'none', cursor: 'pointer', padding: '8px 18px', borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500,
                background: annual === val ? 'var(--color-surface-card)' : 'transparent',
                color: annual === val ? 'var(--color-ink)' : 'var(--color-muted)',
                boxShadow: annual === val ? 'var(--shadow-card)' : 'none', transition: 'all .15s ease',
              }}>{label}</button>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'start' }}>
          <PricingTier plan="Free" price="$0" period="" blurb="To try things out." cta="Get started"
            features={['10k credits / mo', 'Hundreds of voices', 'Personal use license']} />
          <PricingTier plan="Creator" price={price('$22', '$18')} featured badge="Most popular" blurb="For creators publishing regularly."
            cta="Start creating" features={['100k credits / mo', 'Instant voice cloning', 'Commercial license', '44.1kHz audio']} />
          <PricingTier plan="Pro" price={price('$99', '$82')} blurb="For professional teams." cta="Go pro"
            features={['500k credits / mo', 'Pro voice library', 'Priority generation', 'Analytics & API']} />
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
