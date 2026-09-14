VoiceRow — one entry in the voice library list. A 32px circular initials plate, a name + accent stack, and a Play button that fades in on hover.

```jsx
<VoiceRow name="Rachel" accent="American · Calm" onPreview={...} />
<VoiceRow name="Antoni" accent="American · Well-rounded" />
```

Props: `name`, `accent`, `initials` (auto-derived from name if omitted), `onPreview`, `divider`. Stack several inside a Card for the library panel.
