AudioWaveform — the voice-preview card. A circular ink play button, a bar-waveform that animates while playing, and a voice name + metadata stack. Clicking the button toggles playback.

```jsx
<AudioWaveform voice="Rachel" meta="Narration · English" />
```

Props: `voice`, `meta`, `bars` (custom px heights), `playing` (controlled). Self-contained — manages its own play state if `playing` is omitted.
