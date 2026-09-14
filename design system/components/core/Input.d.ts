import React from 'react';

export interface InputProps {
  label?: string;
  /** Error message — also turns the border red. */
  error?: string;
  /** Helper text below the field. */
  hint?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/** Text input — hairline-strong border that thickens to 2px ink on focus. */
export function Input(props: InputProps): JSX.Element;
