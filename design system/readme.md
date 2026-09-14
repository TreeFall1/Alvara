# Be Admin Design System

The **Be Admin** brand system, built on the ElevenLabs visual foundation — a quietly
editorial aesthetic: off-white canvas, warm near-black ink, and pastel atmospheric
gradient orbs as the only "color" moments. Display runs a light editorial serif at weight
300; Inter carries body, navigation, and captions. Only the **logo** and **iconography**
are Be Admin's own; all tokens, type, color, and components are inherited from ElevenLabs.

> **Source:** This system was authored from a single written design analysis
> (`uploads/DESIGN-elevenlabs.md`). No ElevenLabs codebase or Figma file was provided —
> components are faithful reconstructions of the documented tokens and component specs,
> not imports of production source. If you have access to the real ElevenLabs repo or
> Figma, share it and these can be tightened against ground truth.

---

## The system at a glance

- **Canvas:** off-white `#f5f5f5` holding warm near-black ink `#0c0a09`.
- **One CTA color:** a warm near-black ink pill (`--color-primary` `#292524`). No saturated
  accent, no neon, no dark dev-tools atmosphere.
- **Signature voltage is photographic, not chromatic:** five pastel gradient orbs
  (mint, peach, lavender, sky, rose) drift through the page as pure atmosphere — never
  button fills, never text colors.
- **Type:** editorial serif display at **weight 300** + Inter body at 400/500.
- **Geometry:** pill for every CTA & badge; `xl` (16px) cards; `xxl` (24px) orb cards.
- **Rhythm:** 4px base unit, 96px section spacing, ~1200px max content width.

---

## CONTENT FUNDAMENTALS

How ElevenLabs writes.

- **Voice & address.** Speaks to "you," about "we"/the product. Confident and calm, never
  hype-y. Reads like an editorial product magazine, not a SaaS landing page.
- **Tone.** Quietly authoritative. Leans on the phrase *"the research lab building the
  future of audio."* Product capability stated plainly: "Generate natural speech in 32
  languages," "Clone any voice in seconds."
- **Casing.** Sentence case for headlines and body. **UPPERCASE** reserved for tiny eyebrow
  labels and badges (caption-uppercase, +0.96px tracking). Never all-caps headlines.
- **Headlines** are short, declarative, often two lines, set in the light serif:
  "The most lifelike AI voices, ever." Display copy is **never bold** — the 300 weight is
  the brand voice. Bolding shifts it from editorial to consumer-marketing.
- **Body** is concise, concrete, benefit-first. One idea per sentence.
- **Numbers** are specific and lowercase-friendly: "32 languages," "44.1kHz audio,"
  "100k credits / mo."
- **Emoji:** none. Not part of the brand.
- **Punctuation flourish:** the middot "·" separates metadata ("Narration · English",
  "American · Calm").

---

## VISUAL FOUNDATIONS

- **Color vibe.** Warm-neutral greys (stone/taupe family — note the warm `#777169`,
  `#a8a29e` muted tones, not cool greys). Ink is warm near-black. The only saturation lives
  in the five pastel orb stops, and they are always *soft* — radial blooms fading to
  transparent, never hard fills.
- **Atmospheric gradients.** The defining motif. Soft radial-gradient orbs in mint/peach/
  lavender/sky/rose drift behind hero copy and inside feature cards. They occupy generous
  breathing space and never contain content. Layer at most two per surface. Opacity ~0.5–0.85,
  fading to `rgba(255,255,255,0)` around 68–72%.
- **Type.** Display = light editorial serif (Waldenburg → **Newsreader** substitute) at
  weight 300 with negative tracking (-0.32px to -1.92px). Body = Inter 400/500 with *positive*
  tracking (+0.15–0.18px), slightly looser than default for an editorial feel.
- **Backgrounds.** Flat off-white canvas, with `canvas-soft` `#fafafa` for gently alternating
  bands. The rare dark band (`#0c0a09`) appears for pre-footer CTAs and the Agents hero.
  No textures, no patterns, no photographic full-bleeds in the documented surfaces.
- **Cards.** White (`#ffffff`), 1px hairline border (`#e7e5e4`), `xl` (16px) radius.
  Elevation is restrained: **hairline + a single soft-drop tier** — `0 4px 16px rgba(0,0,0,.04)`
  on hover only. No stacked/heavy shadows. Orb cards use `canvas-soft` and `xxl` (24px) radius.
- **Borders & dividers.** Three hairline weights: `#e7e5e4` default, `#f0efed` soft,
  `#d6d3d1` strong (panel outlines, input borders).
- **Buttons.** Primary = ink pill (`#292524`) → press/hover `#0c0a09`. Outline = transparent
  pill with 1px strong-hairline border. Tertiary = inline ink text link. On dark bands, a
  white pill. Every CTA is a pill — never a sharp rectangle.
- **Hover / press states.** Hover: primary darkens to `primary-active`; outline fills with
  `surface-strong`; tertiary drops opacity; cards lift 2px + gain the soft shadow. Press:
  buttons scale to 0.97. (Original docs don't specify hover, so these are tasteful, restrained
  defaults consistent with the brand — easy to dial back.)
- **Inputs.** White, `md` (8px) radius, 1px strong-hairline border that thickens to **2px ink**
  on focus (2px error red when invalid). 44px height.
- **Transparency / blur.** Used sparingly. The orbs are the main use of soft transparency.
  No glassmorphism / heavy backdrop-blur in the documented surfaces.
- **Animation.** Subtle and short. Waveform bars pulse while a voice plays; hover transitions
  ~0.15–0.2s ease. No bounces, no long parallax. (Timings were out of scope in the source and
  are reasonable defaults here.)

---

## ICONOGRAPHY

- **Logo.** The Be Admin mark is a stylized **"B"** built from rounded panels with a small
  spine dot, followed by the "Be Admin" wordmark in a rounded geometric sans. Provided in
  `assets/` as transparent PNGs: `be-admin-logo.png` (full lockup), `be-admin-mark.png`
  (mark only), and `be-admin-logo-white.png` (for dark bands). Source art:
  `uploads/photo_2026-06-26_17-53-30.jpg`.
- **Icon pack.** Be Admin ships a **16-glyph solid icon set** in `assets/icons/` (512×512
  transparent PNGs): home, dashboard, grid, layers, analytics, team, chat, calendar,
  settings, security, search, notifications, mail, folder, magic, launch. They are bold,
  filled glyphs — render them in ink (`#0c0a09`) on light surfaces at 20–24px. See the
  **Icons** group in the Design System tab (`guidelines/icons.html`).
- **Emoji:** never used.
- **Unicode:** the middot "·" is used as a metadata separator; otherwise no unicode-as-icon.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill manifest for download into Claude Code.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` · `elevation.css`

**`components/core/`** — `Button` · `Badge` · `Card` · `Input`
**`components/brand/`** — `GradientOrbCard` · `AudioWaveform` · `VoiceRow` · `PricingTier`
Each component: `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`; one `*.card.html` per directory.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) + `brand-logo.html`.

**`ui_kits/marketing/`** — interactive marketing homepage (`index.html`) composed from
`Nav` · `Hero` · `Features` · `VoiceLibrary` · `Pricing` · `Footer`.

**`assets/`** — Be Admin logo lockups & mark (PNG) + `icons/` (16-glyph icon pack).

> **Namespace:** components are exposed at `window.ElevenLabsDesignSystem_ff1699` in card HTML.

---

## Substitutions & gaps (please confirm)

- **Waldenburg is licensed** and was not provided. Display is substituted with **Newsreader**
  (Google Fonts) at weight 300 — a light editorial serif matching the "Waldenburg Light"
  signature. *If you can share the Waldenburg font files, I'll swap them in.* Note: the source
  analysis describes Waldenburg as an editorial **serif**; if your Waldenburg is actually a
  geometric **sans**, tell me and I'll re-point the display family.
- Hover/press states and animation timings were out of scope in the source and are tasteful
  defaults here.
- In-product surfaces (voice editor, agent playground) were only partially captured; this kit
  covers the marketing surface in depth.
