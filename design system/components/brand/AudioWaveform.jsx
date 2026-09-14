import React from 'react';

/**
 * Audio waveform card — a play button, a bar-waveform glyph, and voice metadata.
 * Used across the product to preview generated speech. Animates the bars while playing.
 */
export function AudioWaveform({
  voice = 'Rachel',
  meta = 'Narration · English',
  bars,
  playing: playingProp,
  style,
  ...rest
}) {
  const [playing, setPlaying] = React.useState(false);
  const isPlaying = playingProp != null ? playingProp : playing;
  const heights = bars || [10, 18, 28, 16, 34, 22, 12, 26, 38, 20, 14, 30, 24, 16, 32, 12, 22, 18, 28, 14, 20, 34, 16, 24];

  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 16,
        background: 'var(--color-surface-card)',
        border: '1px solid var(--color-hairline)',
        borderRadius: 'var(--radius-xl)',
        padding: 24,
        ...style,
      }}
      {...rest}
    >
      <button
        type="button"
        onClick={() => setPlaying(p => !p)}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        style={{
          flex: '0 0 auto', width: 44, height: 44, borderRadius: 'var(--radius-full)',
          border: 'none', cursor: 'pointer', background: 'var(--color-primary)',
          color: 'var(--color-on-primary)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', transition: 'background-color .18s ease',
        }}
      >
        {isPlaying ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="2" y="1" width="3.5" height="12" rx="1"/><rect x="8.5" y="1" width="3.5" height="12" rx="1"/></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M3 1.5v11a1 1 0 0 0 1.5.86l9-5.5a1 1 0 0 0 0-1.72l-9-5.5A1 1 0 0 0 3 1.5Z"/></svg>
        )}
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1, height: 40, overflow: 'hidden' }}>
        {heights.map((h, i) => (
          <span key={i} style={{
            display: 'block', width: 3, height: h, borderRadius: 2,
            background: isPlaying ? 'var(--color-ink)' : 'var(--color-muted-soft)',
            transformOrigin: 'center',
            animation: isPlaying ? `el-wave 900ms ease-in-out ${i * 60}ms infinite alternate` : 'none',
            transition: 'background-color .2s ease',
          }} />
        ))}
        <style>{`@keyframes el-wave { from { transform: scaleY(0.45); } to { transform: scaleY(1.25); } }`}</style>
      </div>

      <div style={{ flex: '0 0 auto', textAlign: 'right', minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm-size)',
          fontWeight: 'var(--weight-medium)', color: 'var(--color-ink)', letterSpacing: '0.15px',
        }}>{voice}</div>
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-muted)', marginTop: 2,
        }}>{meta}</div>
      </div>
    </div>
  );
}
