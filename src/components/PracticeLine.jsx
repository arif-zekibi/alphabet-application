/**
 * PracticeLine Component
 * Renders a single practice line with four guide lines and dotted letters
 */

import React from 'react';
import DottedLetter from './DottedLetter';
import { PRACTICE_LINE_COLORS } from '../constants/appConstants';
import '../styles/PracticeLine.css';

const PracticeLine = ({
  letters,
  caseType,
  lineNumber,
  displayStyle,
  opacity,
  fontSize,
  fontWeight,
  lettersPerLine,
  lineHeight
}) => {
  if (!letters || letters.length === 0) return null;

  const lineStyle = {
    height: `${lineHeight}px`,
    '--letters-per-line': lettersPerLine
  };

  return (
    <div className="practice-line" data-line-number={lineNumber} style={lineStyle}>
      {/* Four guide lines - Top, Middle-Top, Baseline, Bottom */}
      <div className="guide-lines">
        {/* Top Line (Ascender) */}
        <div className="guide-line guide-line-top" />

        {/* Middle Top Line (Dashed) */}
        <div className="guide-line guide-line-middle-top" />

        {/* Baseline (Main writing line) */}
        <div className="guide-line guide-line-baseline" />

        {/* Bottom Line (Descender) */}
        <div className="guide-line guide-line-bottom" />
      </div>

      {/* Dotted letters for tracing */}
      <div className="letters-container">
        {/* Display the letters passed for this line */}
        {letters.map((letter, index) => (
          <DottedLetter
            key={`${letter}-${caseType}-${lineNumber}-${index}`}
            letter={letter}
            caseType={caseType}
            position={index}
            displayStyle={displayStyle}
            opacity={opacity}
            fontSize={fontSize}
            fontWeight={fontWeight}
          />
        ))}
      </div>
    </div>
  );
};

export default PracticeLine;
