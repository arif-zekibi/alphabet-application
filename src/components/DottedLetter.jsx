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
        viewBox="0 0 100 100"
        className="letter-svg"
        preserveAspectRatio="none"
      >
        {/* Guide Letter (Solid) - displayed when not dotted or as background */}
        {!isDotted && (
          <text
            x="50"
            y="66.66" /* Adjusted to sit on the baseline */
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

        {/* Dotted Letter Path */}
        {isDotted && (
          <g className="dots-group">
            {dots.map((dot, index) => (
              <circle
                key={index}
                cx={dot.x}
                cy={dot.y}
                r={dotRadius}
                fill="#000000"
                className="trace-dot"
              />
            ))}
          </g>
        )}
      </svg>
    </div>
  );
};

export default DottedLetter;
