import React from 'react';

export interface CardProps {
  /** Lift with the soft-drop shadow tier on hover. */
  hoverable?: boolean;
  /** Inner padding in px. */
  padding?: number;
  /** Corner radius token. */
  radius?: 'lg' | 'xl' | 'xxl';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** White content card — hairline border + xl radius, single soft-drop shadow tier on hover. */
export function Card(props: CardProps): JSX.Element;
