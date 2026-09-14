import React from 'react';

export interface ButtonProps {
  /** Visual style. `primary` = ink pill (the brand CTA), `outline` = hairline pill, `tertiary` = inline ink link, `onDark` = white pill for dark bands. */
  variant?: 'primary' | 'outline' | 'tertiary' | 'onDark';
  /** Pill height. */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * The ElevenLabs CTA. Primary is the only saturated action — a warm near-black ink pill.
 * @startingPoint section="Core" subtitle="Ink-pill CTA with outline / tertiary variants" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
