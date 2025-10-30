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
  strokeWidth = PRACTICE_CONFIG.DEFAULT_STROKE_WIDTH,
  fontWeight = PRACTICE_CONFIG.DEFAULT_FONT_WEIGHT
}) => {
  const dots = generateDottedLetterPath(letter, caseType);
  const displayLetter = convertCase(letter, caseType);
  const isDotted = displayStyle === DISPLAY_STYLES.DOTTED;

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
            r={PRACTICE_CONFIG.DOT_SIZE / 2}
            fill={PRACTICE_CONFIG.DOT_COLOR}
            className="trace-dot"
          />
        ))}

        {/* Show letter aligned with three-line system */}
        <text
          x="50"
          y="70"
          fontSize={isDotted ? 45 : fontSize}
          fontFamily="Tw Cen MT, Century Gothic, Arial, sans-serif"
          fontWeight={isDotted ? "normal" : fontWeight}
          textAnchor="middle"
          fill={isDotted ? "#E0E0E0" : (strokeWidth > 0 ? "none" : "#000000")}
          opacity={isDotted ? 1 : opacity}
          stroke={strokeWidth > 0 ? "#000000" : "none"}
          strokeWidth={strokeWidth}
          className="guide-letter"
          dominantBaseline="baseline"
        >
          {displayLetter}
        </text>
      </svg>
    </div>
  );
};

export default DottedLetter;
