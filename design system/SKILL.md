---
name: be-admin-design
description: Use this skill to generate well-branded interfaces and assets for Be Admin, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, the Be Admin logo + icon pack, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files:
- `styles.css` — global token entry point; link this to inherit all CSS custom properties.
- `tokens/` — colors, typography, spacing, radius, elevation, fonts.
- `components/` — React primitives (Button, Badge, Card, Input, GradientOrbCard, AudioWaveform, VoiceRow, PricingTier).
- `ui_kits/marketing/` — full interactive homepage recreation.
- `assets/` — Be Admin logo lockups + mark; `assets/icons/` — 16-glyph icon pack.

Brand essence: Be Admin uses the ElevenLabs editorial visual foundation — off-white canvas, warm near-black ink, a single ink-pill CTA, light serif display at weight 300 + Inter body, and pastel atmospheric gradient orbs used only as decoration. The Be Admin logo (rounded "B" mark + wordmark) and the solid 16-glyph icon pack are the brand's own. Never bold the display serif; never introduce a saturated CTA color; never use emoji.
