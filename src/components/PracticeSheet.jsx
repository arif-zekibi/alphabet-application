/**
 * PracticeSheet Component
 * Main component that renders the complete practice sheet with multiple lines
 */

import React from 'react';
import PracticeLine from './PracticeLine';
import { PRACTICE_CONFIG } from '../constants/appConstants';
import '../styles/PracticeSheet.css';

const PracticeSheet = ({ letters, caseType, linesCount = PRACTICE_CONFIG.LINES_PER_PAGE, displayStyle, opacity, fontSize }) => {
  if (!letters || letters.length === 0) {
    return (
      <div className="practice-sheet-empty">
        <p className="empty-message">
          Please select at least one letter and case to generate practice sheet
        </p>
      </div>
    );
  }

  // Calculate total positions needed (lines * letters per line)
  const LETTERS_PER_LINE = 5;
  const totalPositions = linesCount * LETTERS_PER_LINE;

  // Create a continuous flow of letters across all lines
  const allLetters = [];
  for (let i = 0; i < totalPositions; i++) {
    allLetters.push(letters[i % letters.length]);
  }

  // Split into lines
  const linesData = [];
  for (let i = 0; i < linesCount; i++) {
    const startIndex = i * LETTERS_PER_LINE;
    const lineLetters = allLetters.slice(startIndex, startIndex + LETTERS_PER_LINE);
    linesData.push(lineLetters);
  }

  return (
    <div className="practice-sheet" id="practice-sheet">
      {/* Practice Lines */}
      <div className="practice-lines-container">
        {linesData.map((lineLetters, index) => (
          <PracticeLine
            key={`line-${index}`}
            letters={lineLetters}
            caseType={caseType}
            lineNumber={index + 1}
            displayStyle={displayStyle}
            opacity={opacity}
            fontSize={fontSize}
          />
        ))}
      </div>
    </div>
  );
};

export default PracticeSheet;
