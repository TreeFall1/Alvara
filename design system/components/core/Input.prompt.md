Input — single-line text field. White surface, md radius, hairline-strong border that thickens to 2px ink on focus (2px error red when invalid).

```jsx
<Input label="Work email" placeholder="you@company.com" />
<Input label="Email" error="Enter a valid email" />
```

Props: `label`, `error` (shows message + red border), `hint`, plus standard input attrs (`type`, `placeholder`, `value`, `onChange`). 44px height for comfortable tap targets.
