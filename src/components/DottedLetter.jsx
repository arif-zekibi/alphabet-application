/**
 * DottedLetter Component
 * Renders a single letter with dots for tracing practice
 */

import React from 'react';
import { generateDottedLetterPath, convertCase } from '../utils/alphabetUtils';
import { PRACTICE_CONFIG } from '../constants/appConstants';
import '../styles/DottedLetter.css';

const DottedLetter = ({ letter, caseType, position }) => {
  const dots = generateDottedLetterPath(letter, caseType);
  const displayLetter = convertCase(letter, caseType);

  return (
    <div className="dotted-letter" data-position={position}>
      <svg
        className="letter-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`Trace the letter ${displayLetter}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Render dots for tracing */}
        {dots.map((dot, index) => (
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
          fontSize="45"
          fontFamily="Tw Cen MT, Century Gothic, Arial, sans-serif"
          fontWeight="normal"
          textAnchor="middle"
          fill="#E0E0E0"
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
