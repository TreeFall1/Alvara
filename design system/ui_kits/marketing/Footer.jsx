/* CTA band + footer — dark pre-footer call-to-action over a 5-column link footer. */
function Footer() {
  const { Button } = window.ElevenLabsDesignSystem_ff1699;
  const cols = {
    Product: ['Text to Speech', 'Voice Cloning', 'Dubbing', 'Voice Library', 'API'],
    Solutions: ['Creators', 'Developers', 'Enterprise', 'Publishing'],
    Company: ['About', 'Careers', 'Blog', 'Research'],
    Resources: ['Docs', 'Help center', 'Status', 'Pricing'],
  };
  return (
    <>
      <section style={{ background: 'var(--color-surface-dark)', padding: '96px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 40, lineHeight: 1.12, letterSpacing: '-0.5px', color: 'var(--color-on-dark)', margin: '0 0 28px' }}>Start building with audio today</h2>
        <Button variant="onDark" size="lg">Try ElevenLabs free</Button>
      </section>
      <footer style={{ background: 'var(--color-canvas)', padding: '64px 48px 48px', borderTop: '1px solid var(--color-hairline)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 32 }}>
          <div>
            <img src="../../assets/be-admin-logo.png" alt="Be Admin" style={{ height: 26 }} />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--color-muted)', maxWidth: 220, marginTop: 16, lineHeight: 1.5 }}>The research lab building the future of audio.</p>
          </div>
          {Object.entries(cols).map(([head, items]) => (
            <div key={head}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.96px', textTransform: 'uppercase', color: 'var(--color-ink)', marginBottom: 16 }}>{head}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(i => (
                  <li key={i}><a href="#" style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--color-body)', textDecoration: 'none' }}>{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 1200, margin: '48px auto 0', paddingTop: 24, borderTop: '1px solid var(--color-hairline)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-muted)' }}>
          <span>© 2026 ElevenLabs</span>
          <span>Privacy · Terms · Cookies</span>
        </div>
      </footer>
    </>
  );
}
window.Footer = Footer;
