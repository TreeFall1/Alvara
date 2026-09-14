import React from 'react';

export interface PricingTierProps {
  plan?: string;
  price?: string;
  period?: string;
  blurb?: string;
  features?: string[];
  cta?: string;
  /** Invert to the dark-canvas featured treatment. */
  featured?: boolean;
  /** Optional eyebrow badge (e.g. "Most popular"). */
  badge?: string;
  onSelect?: () => void;
  style?: React.CSSProperties;
}

/**
 * Pricing tier card — white by default, dark-inverted when featured.
 * @startingPoint section="Brand" subtitle="Pricing tier card (standard + featured)" viewport="700x420"
 */
export function PricingTier(props: PricingTierProps): JSX.Element;
