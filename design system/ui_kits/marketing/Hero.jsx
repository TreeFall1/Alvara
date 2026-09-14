/* Hero band — atmospheric orbs behind editorial display headline + CTAs + waveform. */
function Hero() {
  const { Button, AudioWaveform, Badge } = window.ElevenLabsDesignSystem_ff1699;
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-canvas)', padding: '96px 32px 72px' }}>
      {/* atmospheric orbs */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-8%', left: '12%', width: 520, height: 520,
          background: 'radial-gradient(circle at 50% 50%, var(--color-gradient-mint), rgba(245,245,245,0) 68%)', opacity: 0.7 }} />
        <div style={{ position: 'absolute', top: '4%', right: '8%', width: 460, height: 460,
          background: 'radial-gradient(circle at 50% 50%, var(--color-gradient-peach), rgba(245,245,245,0) 68%)', opacity: 0.65 }} />
        <div style={{ position: 'absolute', top: '34%', left: '40%', width: 420, height: 420,
          background: 'radial-gradient(circle at 50% 50%, var(--color-gradient-lavender), rgba(245,245,245,0) 70%)', opacity: 0.5 }} />
      </div>

      <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <Badge>New · v3 audio model</Badge>
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 64, lineHeight: 1.05,
          letterSpacing: '-1.92px', color: 'var(--color-ink)', margin: 0,
        }}>The most lifelike<br />AI voices, ever</h1>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 18, lineHeight: 1.5, letterSpacing: '0.16px',
          color: 'var(--color-body)', maxWidth: 560, margin: '24px auto 0',
        }}>Generate natural speech in 32 languages, clone any voice in seconds, and bring your stories to life with the research lab building the future of audio.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32 }}>
          <Button variant="primary" size="lg">Try free</Button>
          <Button variant="outline" size="lg">Contact sales</Button>
        </div>
      </div>

      <div style={{ position: 'relative', maxWidth: 640, margin: '56px auto 0' }}>
        <AudioWaveform voice="Rachel" meta="Narration · English" />
      </div>
    </section>
  );
}
window.Hero = Hero;
