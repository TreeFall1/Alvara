/* @ds-bundle: {"format":4,"namespace":"ElevenLabsDesignSystem_ff1699","components":[{"name":"AudioWaveform","sourcePath":"components/brand/AudioWaveform.jsx"},{"name":"GradientOrbCard","sourcePath":"components/brand/GradientOrbCard.jsx"},{"name":"PricingTier","sourcePath":"components/brand/PricingTier.jsx"},{"name":"VoiceRow","sourcePath":"components/brand/VoiceRow.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/brand/AudioWaveform.jsx":"b2637ecdfffd","components/brand/GradientOrbCard.jsx":"52d064db87b9","components/brand/PricingTier.jsx":"0c644a184292","components/brand/VoiceRow.jsx":"67f4ce0a80d4","components/core/Badge.jsx":"dac86da6f129","components/core/Button.jsx":"bff1e6862659","components/core/Card.jsx":"5a161316c9c2","components/core/Input.jsx":"33785a5b483f","ui_kits/marketing/Features.jsx":"30d5b0e63f71","ui_kits/marketing/Footer.jsx":"935c451b29a8","ui_kits/marketing/Hero.jsx":"2ead58c4aeb1","ui_kits/marketing/Nav.jsx":"4cc7e769fc24","ui_kits/marketing/Pricing.jsx":"b4590cc35b60","ui_kits/marketing/VoiceLibrary.jsx":"757c8123bdb0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElevenLabsDesignSystem_ff1699 = window.ElevenLabsDesignSystem_ff1699 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/AudioWaveform.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Audio waveform card — a play button, a bar-waveform glyph, and voice metadata.
 * Used across the product to preview generated speech. Animates the bars while playing.
 */
function AudioWaveform({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      background: 'var(--color-surface-card)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-xl)',
      padding: 24,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPlaying(p => !p),
    "aria-label": isPlaying ? 'Pause' : 'Play',
    style: {
      flex: '0 0 auto',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-full)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color .18s ease'
    }
  }, isPlaying ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "1",
    width: "3.5",
    height: "12",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8.5",
    y: "1",
    width: "3.5",
    height: "12",
    rx: "1"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 1.5v11a1 1 0 0 0 1.5.86l9-5.5a1 1 0 0 0 0-1.72l-9-5.5A1 1 0 0 0 3 1.5Z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      flex: 1,
      height: 40,
      overflow: 'hidden'
    }
  }, heights.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block',
      width: 3,
      height: h,
      borderRadius: 2,
      background: isPlaying ? 'var(--color-ink)' : 'var(--color-muted-soft)',
      transformOrigin: 'center',
      animation: isPlaying ? `el-wave 900ms ease-in-out ${i * 60}ms infinite alternate` : 'none',
      transition: 'background-color .2s ease'
    }
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes el-wave { from { transform: scaleY(0.45); } to { transform: scaleY(1.25); } }`)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      textAlign: 'right',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm-size)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-ink)',
      letterSpacing: '0.15px'
    }
  }, voice), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--color-muted)',
      marginTop: 2
    }
  }, meta)));
}
Object.assign(__ds_scope, { AudioWaveform });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AudioWaveform.jsx", error: String((e && e.message) || e) }); }

// components/brand/GradientOrbCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ORBS = {
  mint: 'var(--color-gradient-mint)',
  peach: 'var(--color-gradient-peach)',
  lavender: 'var(--color-gradient-lavender)',
  sky: 'var(--color-gradient-sky)',
  rose: 'var(--color-gradient-rose)'
};

/**
 * Gradient-orb card — the brand's signature atmospheric moment. A soft pastel radial
 * bloom drifts behind centered display copy on a near-white card. The orb is pure
 * atmosphere: never a button fill, never a text color.
 */
function GradientOrbCard({
  orb = 'mint',
  secondOrb,
  eyebrow,
  title,
  body,
  children,
  style,
  ...rest
}) {
  const c1 = ORBS[orb] || ORBS.mint;
  const c2 = secondOrb ? ORBS[secondOrb] || ORBS.peach : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--color-canvas-soft)',
      borderRadius: 'var(--radius-xxl)',
      border: '1px solid var(--color-hairline)',
      padding: 32,
      minHeight: 220,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: '-30%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '120%',
      height: '110%',
      pointerEvents: 'none',
      background: `radial-gradient(40% 50% at 50% 38%, ${c1} 0%, rgba(255,255,255,0) 70%)`,
      opacity: 0.85
    }
  }), c2 && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: '-10%',
      left: '12%',
      width: '70%',
      height: '80%',
      pointerEvents: 'none',
      background: `radial-gradient(45% 50% at 50% 50%, ${c2} 0%, rgba(255,255,255,0) 72%)`,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-upper-size)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--text-caption-upper-ls)',
      textTransform: 'uppercase',
      color: 'var(--color-muted)',
      marginBottom: 12
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'var(--text-display-md-size)',
      lineHeight: 'var(--text-display-md-lh)',
      letterSpacing: 'var(--text-display-md-ls)',
      color: 'var(--color-ink)'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-md-size)',
      lineHeight: 'var(--text-body-md-lh)',
      letterSpacing: 'var(--text-body-md-ls)',
      color: 'var(--color-body)',
      margin: '12px 0 0',
      maxWidth: 460
    }
  }, body), children));
}
Object.assign(__ds_scope, { GradientOrbCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GradientOrbCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/VoiceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voice-library row. A 32px circular voice plate with initials, a name + accent stack,
 * and an optional preview button. Hairline divider between rows.
 */
function VoiceRow({
  name = 'Rachel',
  accent = 'American · Calm',
  initials,
  onPreview,
  divider = true,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const init = initials || name.slice(0, 2).toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 8px',
      borderBottom: divider ? '1px solid var(--color-hairline)' : 'none',
      borderRadius: 'var(--radius-sm)',
      background: hover ? 'var(--color-canvas-soft)' : 'transparent',
      transition: 'background-color .15s ease',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-surface-strong)',
      color: 'var(--color-body-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.4px'
    }
  }, init), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-md-size)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-ink)',
      letterSpacing: '0.16px'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--color-muted)',
      marginTop: 1
    }
  }, accent)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onPreview,
    "aria-label": `Preview ${name}`,
    style: {
      flex: '0 0 auto',
      height: 32,
      padding: '0 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--color-hairline-strong)',
      background: 'transparent',
      color: 'var(--color-ink)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 'var(--weight-medium)',
      opacity: hover ? 1 : 0.0,
      transition: 'opacity .15s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "10",
    viewBox: "0 0 9 10",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1v8a.7.7 0 0 0 1.06.6l6.4-4a.7.7 0 0 0 0-1.2l-6.4-4A.7.7 0 0 0 1 1Z"
  })), "Play"));
}
Object.assign(__ds_scope, { VoiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/VoiceRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill badge / label. Surface-strong plate with uppercase caption type by default;
 * `tone` switches to semantic or dark treatments.
 */
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--color-surface-strong)',
      color: 'var(--color-ink)'
    },
    dark: {
      background: 'var(--color-surface-dark)',
      color: 'var(--color-on-dark)'
    },
    success: {
      background: 'rgba(22,163,74,0.12)',
      color: 'var(--color-success)'
    },
    error: {
      background: 'rgba(220,38,38,0.10)',
      color: 'var(--color-error)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-muted)',
      boxShadow: 'inset 0 0 0 1px var(--color-hairline-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption-upper-size)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 'var(--text-caption-upper-lh)',
      letterSpacing: 'var(--text-caption-upper-ls)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ElevenLabs button. Primary is the warm near-black ink pill — the brand's single
 * CTA color. Outline is a transparent hairline pill; tertiary is an inline ink link.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 32,
      padding: '0 14px',
      fontSize: 14
    },
    md: {
      height: 40,
      padding: '0 20px',
      fontSize: 'var(--text-button-size)'
    },
    lg: {
      height: 48,
      padding: '0 28px',
      fontSize: 16
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-medium)',
    fontSize: s.fontSize,
    lineHeight: 1,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background-color .18s ease, border-color .18s ease, transform .12s ease, opacity .18s ease',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    userSelect: 'none'
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-ink)',
      borderColor: 'var(--color-hairline-strong)'
    },
    tertiary: {
      background: 'transparent',
      color: 'var(--color-ink)',
      height: 'auto',
      padding: 0,
      borderRadius: 0
    },
    onDark: {
      background: 'var(--color-on-dark)',
      color: 'var(--color-ink)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--color-primary-active)'
    },
    outline: {
      background: 'var(--color-surface-strong)'
    },
    tertiary: {
      opacity: 0.6
    },
    onDark: {
      opacity: 0.88
    }
  }[variant] : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      transform: press && !disabled ? 'scale(0.97)' : 'scale(1)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/PricingTier.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pricing tier card. Standard tiers sit on white; the featured tier inverts to the dark
 * canvas. Holds a plan name, price, feature list, and a CTA.
 */
function PricingTier({
  plan = 'Creator',
  price = '$22',
  period = '/mo',
  blurb,
  features = [],
  cta = 'Get started',
  featured = false,
  badge,
  onSelect,
  style,
  ...rest
}) {
  const dark = featured;
  const ink = dark ? 'var(--color-on-dark)' : 'var(--color-ink)';
  const sub = dark ? 'var(--color-on-dark-soft)' : 'var(--color-body)';
  const tick = dark ? 'var(--color-on-dark)' : 'var(--color-ink)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      background: dark ? 'var(--color-surface-dark)' : 'var(--color-surface-card)',
      border: dark ? '1px solid var(--color-surface-dark-elevated)' : '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-xl)',
      padding: 32,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-title-sm-size)',
      fontWeight: 'var(--weight-medium)',
      color: ink
    }
  }, plan), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: dark ? 'neutral' : 'dark'
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 'var(--text-display-lg-size)',
      letterSpacing: 'var(--text-display-lg-ls)',
      color: ink
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: sub
    }
  }, period)), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm-size)',
      lineHeight: 1.5,
      color: sub,
      margin: 0
    }
  }, blurb), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'onDark' : 'primary',
    fullWidth: true,
    onClick: onSelect
  }, cta), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '4px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm-size)',
      lineHeight: 1.45,
      color: dark ? 'var(--color-on-dark)' : 'var(--color-body-strong)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      flex: '0 0 auto',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 8.5l3 3 6-7",
    stroke: tick,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, f)))));
}
Object.assign(__ds_scope, { PricingTier });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PricingTier.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Content card. White surface, hairline border, xl radius. `hoverable` adds the single
 * soft-drop shadow tier on hover; `padding` controls inner spacing.
 */
function Card({
  hoverable = false,
  padding = 24,
  radius = 'xl',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const radii = {
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    xxl: 'var(--radius-xxl)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--color-surface-card)',
      border: '1px solid var(--color-hairline)',
      borderRadius: radii[radius] || radii.xl,
      padding,
      boxShadow: hoverable && hover ? 'var(--shadow-soft)' : 'var(--shadow-card)',
      transition: 'box-shadow .2s ease, transform .2s ease',
      transform: hoverable && hover ? 'translateY(-2px)' : 'none',
      color: 'var(--color-ink)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input. White surface, hairline-strong border, md radius. On focus the border
 * thickens to 2px ink. Optional leading label and error message.
 */
function Input({
  label,
  error,
  hint,
  type = 'text',
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-body-sm-size)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-body-strong)',
      letterSpacing: '0.15px'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 44,
      padding: '12px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-md-size)',
      letterSpacing: 'var(--text-body-md-ls)',
      color: 'var(--color-ink)',
      background: 'var(--color-surface-card)',
      borderRadius: 'var(--radius-md)',
      border: error ? '2px solid var(--color-error)' : focus ? '2px solid var(--color-ink)' : '1px solid var(--color-hairline-strong)',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border-color .15s ease',
      ...style
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-error)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Features.jsx
try { (() => {
/* Feature band — section eyebrow, display head, gradient-orb feature grid. */
function Features() {
  const {
    GradientOrbCard,
    Card
  } = window.ElevenLabsDesignSystem_ff1699;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas-soft)',
      padding: '96px 32px',
      borderTop: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.96px',
      textTransform: 'uppercase',
      color: 'var(--color-muted)',
      marginBottom: 16
    }
  }, "The platform"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 36,
      lineHeight: 1.17,
      letterSpacing: '-0.36px',
      color: 'var(--color-ink)',
      margin: 0
    }
  }, "Everything you need to build with audio")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(GradientOrbCard, {
    orb: "mint",
    eyebrow: "Text to Speech",
    title: "Lifelike narration",
    body: "Convert text into natural speech across 32 languages."
  }), /*#__PURE__*/React.createElement(GradientOrbCard, {
    orb: "lavender",
    eyebrow: "Voice Cloning",
    title: "Your voice, replicated",
    body: "Create a digital replica from a few minutes of audio."
  }), /*#__PURE__*/React.createElement(GradientOrbCard, {
    orb: "peach",
    eyebrow: "Dubbing",
    title: "Translate, keep the voice",
    body: "Localize video while preserving the speaker's identity."
  }))));
}
window.Features = Features;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
/* CTA band + footer — dark pre-footer call-to-action over a 5-column link footer. */
function Footer() {
  const {
    Button
  } = window.ElevenLabsDesignSystem_ff1699;
  const cols = {
    Product: ['Text to Speech', 'Voice Cloning', 'Dubbing', 'Voice Library', 'API'],
    Solutions: ['Creators', 'Developers', 'Enterprise', 'Publishing'],
    Company: ['About', 'Careers', 'Blog', 'Research'],
    Resources: ['Docs', 'Help center', 'Status', 'Pricing']
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-surface-dark)',
      padding: '96px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 40,
      lineHeight: 1.12,
      letterSpacing: '-0.5px',
      color: 'var(--color-on-dark)',
      margin: '0 0 28px'
    }
  }, "Start building with audio today"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg"
  }, "Try ElevenLabs free")), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-canvas)',
      padding: '64px 48px 48px',
      borderTop: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/be-admin-logo.png",
    alt: "Be Admin",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--color-muted)',
      maxWidth: 220,
      marginTop: 16,
      lineHeight: 1.5
    }
  }, "The research lab building the future of audio.")), Object.entries(cols).map(([head, items]) => /*#__PURE__*/React.createElement("div", {
    key: head
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.96px',
      textTransform: 'uppercase',
      color: 'var(--color-ink)',
      marginBottom: 16
    }
  }, head), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--color-body)',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '48px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--color-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--color-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ElevenLabs"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Cookies"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
/* Hero band — atmospheric orbs behind editorial display headline + CTAs + waveform. */
function Hero() {
  const {
    Button,
    AudioWaveform,
    Badge
  } = window.ElevenLabsDesignSystem_ff1699;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--color-canvas)',
      padding: '96px 32px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-8%',
      left: '12%',
      width: 520,
      height: 520,
      background: 'radial-gradient(circle at 50% 50%, var(--color-gradient-mint), rgba(245,245,245,0) 68%)',
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '4%',
      right: '8%',
      width: 460,
      height: 460,
      background: 'radial-gradient(circle at 50% 50%, var(--color-gradient-peach), rgba(245,245,245,0) 68%)',
      opacity: 0.65
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '34%',
      left: '40%',
      width: 420,
      height: 420,
      background: 'radial-gradient(circle at 50% 50%, var(--color-gradient-lavender), rgba(245,245,245,0) 70%)',
      opacity: 0.5
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 880,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "New \xB7 v3 audio model")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 64,
      lineHeight: 1.05,
      letterSpacing: '-1.92px',
      color: 'var(--color-ink)',
      margin: 0
    }
  }, "The most lifelike", /*#__PURE__*/React.createElement("br", null), "AI voices, ever"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 18,
      lineHeight: 1.5,
      letterSpacing: '0.16px',
      color: 'var(--color-body)',
      maxWidth: 560,
      margin: '24px auto 0'
    }
  }, "Generate natural speech in 32 languages, clone any voice in seconds, and bring your stories to life with the research lab building the future of audio."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Try free"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "Contact sales"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 640,
      margin: '56px auto 0'
    }
  }, /*#__PURE__*/React.createElement(AudioWaveform, {
    voice: "Rachel",
    meta: "Narration \xB7 English"
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
/* Top navigation — wordmark, primary menu, sign-in + Try free CTA. */
function Nav() {
  const {
    Button
  } = window.ElevenLabsDesignSystem_ff1699;
  const links = ['Creative', 'Agents', 'Video', 'Pricing', 'Enterprise', 'Docs'];
  const [active, setActive] = React.useState('Creative');
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '0 32px',
      borderBottom: '1px solid var(--color-hairline)',
      background: 'var(--color-canvas)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/be-admin-logo.png",
    alt: "Be Admin",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setActive(l),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 500,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      color: active === l ? 'var(--color-ink)' : 'var(--color-muted)',
      transition: 'color .15s ease'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    style: {
      padding: '0 10px'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Try free")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pricing.jsx
try { (() => {
/* Pricing band — monthly/annual toggle over three tiers (middle featured). */
function Pricing() {
  const {
    PricingTier
  } = window.ElevenLabsDesignSystem_ff1699;
  const [annual, setAnnual] = React.useState(false);
  const price = (m, a) => annual ? a : m;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas-soft)',
      padding: '96px 32px',
      borderTop: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 36,
      lineHeight: 1.17,
      letterSpacing: '-0.36px',
      color: 'var(--color-ink)',
      margin: '0 0 24px'
    }
  }, "Pricing that scales with you"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--color-surface-strong)',
      borderRadius: 'var(--radius-pill)'
    }
  }, [['Monthly', false], ['Annual', true]].map(([label, val]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => setAnnual(val),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '8px 18px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      background: annual === val ? 'var(--color-surface-card)' : 'transparent',
      color: annual === val ? 'var(--color-ink)' : 'var(--color-muted)',
      boxShadow: annual === val ? 'var(--shadow-card)' : 'none',
      transition: 'all .15s ease'
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(PricingTier, {
    plan: "Free",
    price: "$0",
    period: "",
    blurb: "To try things out.",
    cta: "Get started",
    features: ['10k credits / mo', 'Hundreds of voices', 'Personal use license']
  }), /*#__PURE__*/React.createElement(PricingTier, {
    plan: "Creator",
    price: price('$22', '$18'),
    featured: true,
    badge: "Most popular",
    blurb: "For creators publishing regularly.",
    cta: "Start creating",
    features: ['100k credits / mo', 'Instant voice cloning', 'Commercial license', '44.1kHz audio']
  }), /*#__PURE__*/React.createElement(PricingTier, {
    plan: "Pro",
    price: price('$99', '$82'),
    blurb: "For professional teams.",
    cta: "Go pro",
    features: ['500k credits / mo', 'Pro voice library', 'Priority generation', 'Analytics & API']
  }))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/VoiceLibrary.jsx
try { (() => {
/* Voice library band — searchable panel of voice rows with live preview. */
function VoiceLibrary() {
  const {
    Card,
    VoiceRow,
    Input,
    Badge
  } = window.ElevenLabsDesignSystem_ff1699;
  const voices = [{
    name: 'Rachel',
    accent: 'American · Calm narration'
  }, {
    name: 'Antoni',
    accent: 'American · Well-rounded'
  }, {
    name: 'Bella',
    accent: 'American · Soft & warm'
  }, {
    name: 'Domi',
    accent: 'American · Strong & confident'
  }, {
    name: 'Elli',
    accent: 'American · Emotional'
  }];
  const [q, setQ] = React.useState('');
  const [playing, setPlaying] = React.useState(null);
  const shown = voices.filter(v => v.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas)',
      padding: '96px 32px',
      borderTop: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Voice library")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 36,
      lineHeight: 1.17,
      letterSpacing: '-0.36px',
      color: 'var(--color-ink)',
      margin: 0
    }
  }, "Thousands of voices, one library")), /*#__PURE__*/React.createElement(Card, {
    padding: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 4px 12px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search voices\u2026",
    value: q,
    onChange: e => setQ(e.target.value)
  })), shown.map((v, i) => /*#__PURE__*/React.createElement(VoiceRow, {
    key: v.name,
    name: v.name,
    accent: v.accent,
    divider: i < shown.length - 1,
    onPreview: () => setPlaying(playing === v.name ? null : v.name)
  })), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 8px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--color-muted)'
    }
  }, "No voices match \u201C", q, "\u201D."))));
}
window.VoiceLibrary = VoiceLibrary;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/VoiceLibrary.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AudioWaveform = __ds_scope.AudioWaveform;

__ds_ns.GradientOrbCard = __ds_scope.GradientOrbCard;

__ds_ns.PricingTier = __ds_scope.PricingTier;

__ds_ns.VoiceRow = __ds_scope.VoiceRow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

})();
