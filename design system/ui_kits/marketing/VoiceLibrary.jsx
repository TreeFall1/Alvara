/* Voice library band — searchable panel of voice rows with live preview. */
function VoiceLibrary() {
  const { Card, VoiceRow, Input, Badge } = window.ElevenLabsDesignSystem_ff1699;
  const voices = [
    { name: 'Rachel', accent: 'American · Calm narration' },
    { name: 'Antoni', accent: 'American · Well-rounded' },
    { name: 'Bella', accent: 'American · Soft & warm' },
    { name: 'Domi', accent: 'American · Strong & confident' },
    { name: 'Elli', accent: 'American · Emotional' },
  ];
  const [q, setQ] = React.useState('');
  const [playing, setPlaying] = React.useState(null);
  const shown = voices.filter(v => v.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <section style={{ background: 'var(--color-canvas)', padding: '96px 32px', borderTop: '1px solid var(--color-hairline)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}><Badge>Voice library</Badge></div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 36, lineHeight: 1.17, letterSpacing: '-0.36px', color: 'var(--color-ink)', margin: 0 }}>Thousands of voices, one library</h2>
        </div>
        <Card padding={16}>
          <div style={{ padding: '4px 4px 12px' }}>
            <Input placeholder="Search voices…" value={q} onChange={e => setQ(e.target.value)} />
          </div>
          {shown.map((v, i) => (
            <VoiceRow key={v.name} name={v.name} accent={v.accent}
              divider={i < shown.length - 1}
              onPreview={() => setPlaying(playing === v.name ? null : v.name)} />
          ))}
          {shown.length === 0 && (
            <div style={{ padding: '20px 8px', fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--color-muted)' }}>No voices match “{q}”.</div>
          )}
        </Card>
      </div>
    </section>
  );
}
window.VoiceLibrary = VoiceLibrary;
