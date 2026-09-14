import React from 'react';

export interface AudioWaveformProps {
  /** Voice name shown at right. */
  voice?: string;
  /** Secondary metadata line. */
  meta?: string;
  /** Custom bar heights in px; defaults to a built-in pattern. */
  bars?: number[];
  /** Controlled play state; omit to let the card manage its own. */
  playing?: boolean;
  style?: React.CSSProperties;
}

/**
 * Audio preview card — play button + animated bar waveform + voice metadata.
 * @startingPoint section="Brand" subtitle="Voice preview waveform card" viewport="700x110"
 */
export function AudioWaveform(props: AudioWaveformProps): JSX.Element;
