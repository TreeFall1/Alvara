PricingTier — a single pricing column. White surface for standard tiers; set `featured` to invert to the dark canvas for the highlighted plan. Composes Button and Badge.

```jsx
<PricingTier plan="Creator" price="$22" features={["100k credits", "Voice cloning"]} />
<PricingTier plan="Pro" price="$99" featured badge="Most popular" features={["500k credits", "Pro voices"]} />
```

Props: `plan`, `price`, `period`, `blurb`, `features` (string[]), `cta`, `featured`, `badge`, `onSelect`. The featured card uses the `onDark` button automatically.
