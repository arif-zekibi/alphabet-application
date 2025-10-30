/**
 * PracticeLine Component
 * Renders a single practice line with four guide lines and dotted letters
 */

import React from 'react';
import DottedLetter from './DottedLetter';
import { PRACTICE_LINE_COLORS } from '../constants/appConstants';
import '../styles/PracticeLine.css';

const PracticeLine = ({ letters, caseType, lineNumber, displayStyle, opacity, fontSize, strokeWidth, fontWeight }) => {
  if (!letters || letters.length === 0) return null;

  return (
    <div className="practice-line" data-line-number={lineNumber}>
      {/* Three guide lines - blue, red, blue */}
      <div className="guide-lines">
        {/* Top line - Blue */}
        <div
          className="guide-line guide-line-top"
          style={{ borderColor: '#4A90E2' }}
        />

        {/* Middle line - Red (baseline for writing) */}
        <div
          className="guide-line guide-line-middle"
          style={{ borderColor: '#E74C3C' }}
        />

        {/* Bottom line - Blue */}
        <div
          className="guide-line guide-line-bottom"
          style={{ borderColor: '#4A90E2' }}
        />
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
            strokeWidth={strokeWidth}
            fontWeight={fontWeight}
          />
        ))}
      </div>
    </div>
  );
};

export default PracticeLine;
