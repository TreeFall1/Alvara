/* Feature band — section eyebrow, display head, gradient-orb feature grid. */
function Features() {
  const { GradientOrbCard, Card } = window.ElevenLabsDesignSystem_ff1699;
  return (
    <section style={{ background: 'var(--color-canvas-soft)', padding: '96px 32px', borderTop: '1px solid var(--color-hairline)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ maxWidth: 620, marginBottom: 48 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.96px', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: 16 }}>The platform</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 36, lineHeight: 1.17, letterSpacing: '-0.36px', color: 'var(--color-ink)', margin: 0 }}>Everything you need to build with audio</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <GradientOrbCard orb="mint" eyebrow="Text to Speech" title="Lifelike narration" body="Convert text into natural speech across 32 languages." />
          <GradientOrbCard orb="lavender" eyebrow="Voice Cloning" title="Your voice, replicated" body="Create a digital replica from a few minutes of audio." />
          <GradientOrbCard orb="peach" eyebrow="Dubbing" title="Translate, keep the voice" body="Localize video while preserving the speaker's identity." />
        </div>
      </div>
    </section>
  );
}
window.Features = Features;
