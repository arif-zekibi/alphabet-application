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
        viewBox="0 0 100 80"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`Trace the letter ${displayLetter}`}
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

        {/* Optional: Show a faint guide letter behind dots */}
        <text
          x="50"
          y="55"
          fontSize="48"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          textAnchor="middle"
          fill="#F0F0F0"
          className="guide-letter"
        >
          {displayLetter}
        </text>
      </svg>
    </div>
  );
};

export default DottedLetter;
