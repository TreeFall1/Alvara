import React from 'react';

export interface GradientOrbCardProps {
  /** Primary atmospheric orb color. */
  orb?: 'mint' | 'peach' | 'lavender' | 'sky' | 'rose';
  /** Optional second orb for a layered bloom. */
  secondOrb?: 'mint' | 'peach' | 'lavender' | 'sky' | 'rose';
  eyebrow?: string;
  title?: string;
  body?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * The signature atmospheric card — a soft pastel radial bloom behind centered display copy.
 * @startingPoint section="Brand" subtitle="Atmospheric gradient-orb feature card" viewport="700x260"
 */
export function GradientOrbCard(props: GradientOrbCardProps): JSX.Element;
