/**
 * PracticeLine Component
 * Renders a single practice line with four guide lines and dotted letter
 */

import React from 'react';
import DottedLetter from './DottedLetter';
import { PRACTICE_LINE_COLORS } from '../constants/appConstants';
import '../styles/PracticeLine.css';

const PracticeLine = ({ letter, caseType, lineNumber }) => {
  if (!letter) return null;

  return (
    <div className="practice-line" data-line-number={lineNumber}>
      {/* Four guide lines based on handwriting standards */}
      <div className="guide-lines">
        {/* Top line (ascender line) - solid */}
        <div
          className="guide-line guide-line-top"
          style={{ borderColor: PRACTICE_LINE_COLORS.TOP }}
        />

        {/* Middle top line - dashed (for tall letters) */}
        <div
          className="guide-line guide-line-middle-top"
          style={{ borderColor: PRACTICE_LINE_COLORS.MIDDLE_TOP }}
        />

        {/* Middle bottom line (baseline) - solid (main writing line) */}
        <div
          className="guide-line guide-line-baseline"
          style={{ borderColor: PRACTICE_LINE_COLORS.MIDDLE_BOTTOM }}
        />

        {/* Bottom line (descender line) - solid */}
        <div
          className="guide-line guide-line-bottom"
          style={{ borderColor: PRACTICE_LINE_COLORS.BOTTOM }}
        />
      </div>

      {/* Dotted letters for tracing */}
      <div className="letters-container">
        {/* Show the letter 5 times for practice */}
        {[...Array(5)].map((_, index) => (
          <DottedLetter
            key={`${letter}-${caseType}-${index}`}
            letter={letter}
            caseType={caseType}
            position={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PracticeLine;
