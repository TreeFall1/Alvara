import React from 'react';

export interface BadgeProps {
  /** Color treatment. */
  tone?: 'neutral' | 'dark' | 'success' | 'error' | 'outline';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Uppercase pill label — section eyebrows, status tags, plan chips. */
export function Badge(props: BadgeProps): JSX.Element;
