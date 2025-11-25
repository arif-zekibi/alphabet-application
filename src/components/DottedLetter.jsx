/**
 * DottedLetter Component
 * Renders a single letter with dots for tracing practice or with opacity
 */

import React from 'react';
import { generateDottedLetterPath, convertCase } from '../utils/alphabetUtils';
import { PRACTICE_CONFIG, DISPLAY_STYLES } from '../constants/appConstants';
import '../styles/DottedLetter.css';

const DottedLetter = ({
  letter,
  caseType,
  position,
  displayStyle,
  opacity,
  fontSize = PRACTICE_CONFIG.DEFAULT_FONT_SIZE,
  fontWeight = PRACTICE_CONFIG.DEFAULT_FONT_WEIGHT
}) => {
  const dots = generateDottedLetterPath(letter, caseType);
  const displayLetter = convertCase(letter, caseType);
  const isDotted = displayStyle === DISPLAY_STYLES.DOTTED;

  // Calculate dot radius based on font weight (thickness)
  // Map weight 100-1000 to radius 1-8 (Diameter 2-16)
  // Base size (400 weight) should be close to original 4px radius
  const minRadius = 1;
  const maxRadius = 8;
  const normalizedWeight = (fontWeight - PRACTICE_CONFIG.MIN_FONT_WEIGHT) / (PRACTICE_CONFIG.MAX_FONT_WEIGHT - PRACTICE_CONFIG.MIN_FONT_WEIGHT);
  const dotRadius = minRadius + (normalizedWeight * (maxRadius - minRadius));

  return (
    <div className="dotted-letter" data-position={position}>
      <svg
        className="letter-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`Trace the letter ${displayLetter}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Render dots for tracing (only in dotted mode) */}
        {isDotted && dots.map((dot, index) => (
          <circle
            key={`dot-${index}`}
            cx={dot.x}
            cy={dot.y}
            r={dotRadius}
            fill={PRACTICE_CONFIG.DOT_COLOR}
            className="trace-dot"
          />
        ))}

        {/* Show letter aligned with four-line system (Baseline is at ~66%) */}
        {/* Only show guide letter if NOT in dotted mode (or if opacity mode is active) */}
        {!isDotted && (
          <text
            x="50"
            y="68" /* Adjusted to sit on the baseline */
            fontSize={fontSize}
            fontFamily="'Outfit', sans-serif"
            fontWeight={fontWeight}
            textAnchor="middle"
            fill="#000000"
            opacity={opacity}
            className="guide-letter"
            dominantBaseline="alphabetic"
          >
            {displayLetter}
          </text>
        )}
      </svg>
    </div>
  );
};

export default DottedLetter;
