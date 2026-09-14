/* Top navigation — wordmark, primary menu, sign-in + Try free CTA. */
function Nav() {
  const { Button } = window.ElevenLabsDesignSystem_ff1699;
  const links = ['Creative', 'Agents', 'Video', 'Pricing', 'Enterprise', 'Docs'];
  const [active, setActive] = React.useState('Creative');
  return (
    <header style={{
      height: 64, display: 'flex', alignItems: 'center', gap: 32,
      padding: '0 32px', borderBottom: '1px solid var(--color-hairline)',
      background: 'var(--color-canvas)', position: 'sticky', top: 0, zIndex: 20,
    }}>
      <img src="../../assets/be-admin-logo.png" alt="Be Admin" style={{ height: 26 }} />
      <nav style={{ display: 'flex', gap: 4, marginLeft: 8 }}>
        {links.map(l => (
          <button key={l} onClick={() => setActive(l)} style={{
            border: 'none', background: 'transparent', cursor: 'pointer',
            fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500,
            padding: '6px 12px', borderRadius: 'var(--radius-pill)',
            color: active === l ? 'var(--color-ink)' : 'var(--color-muted)',
            transition: 'color .15s ease',
          }}>{l}</button>
        ))}
      </nav>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Button variant="tertiary" style={{ padding: '0 10px' }}>Sign in</Button>
        <Button variant="primary">Try free</Button>
      </div>
    </header>
  );
}
window.Nav = Nav;
