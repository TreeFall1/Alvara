import React from 'react';

export interface VoiceRowProps {
  name?: string;
  /** Accent / character descriptor line. */
  accent?: string;
  /** Override the auto two-letter initials in the circular plate. */
  initials?: string;
  onPreview?: () => void;
  /** Show the hairline divider below the row. */
  divider?: boolean;
  style?: React.CSSProperties;
}

/** A row in the voice library — circular initials plate, name + accent, hover preview button. */
export function VoiceRow(props: VoiceRowProps): JSX.Element;
