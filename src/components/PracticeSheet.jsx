/**
 * PracticeSheet Component
 * Main component that renders the complete practice sheet with multiple lines
 */

import React from 'react';
import PracticeLine from './PracticeLine';
import { PRACTICE_CONFIG } from '../constants/appConstants';
import '../styles/PracticeSheet.css';

const PracticeSheet = ({ letters, caseType }) => {
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
  const totalPositions = PRACTICE_CONFIG.LINES_PER_PAGE * LETTERS_PER_LINE;

  // Create a continuous flow of letters across all lines
  const allLetters = [];
  for (let i = 0; i < totalPositions; i++) {
    allLetters.push(letters[i % letters.length]);
  }

  // Split into lines
  const linesData = [];
  for (let i = 0; i < PRACTICE_CONFIG.LINES_PER_PAGE; i++) {
    const startIndex = i * LETTERS_PER_LINE;
    const lineLetters = allLetters.slice(startIndex, startIndex + LETTERS_PER_LINE);
    linesData.push(lineLetters);
  }

  return (
    <div className="practice-sheet" id="practice-sheet">
      {/* Sheet Header */}
      <div className="sheet-header">
        <h2 className="sheet-title">
          Alphabet Practice Sheet
        </h2>
        <div className="sheet-info">
          <span className="letter-display">
            Letters: <strong>
              {letters.map(l => caseType === 'uppercase' ? l.toUpperCase() : l.toLowerCase()).join(', ')}
            </strong>
          </span>
          <span className="case-display">
            Case: <strong>{caseType === 'uppercase' ? 'UPPERCASE' : 'lowercase'}</strong>
          </span>
        </div>
      </div>

      {/* Practice Lines */}
      <div className="practice-lines-container">
        {linesData.map((lineLetters, index) => (
          <PracticeLine
            key={`line-${index}`}
            letters={lineLetters}
            caseType={caseType}
            lineNumber={index + 1}
          />
        ))}
      </div>

      {/* Sheet Footer */}
      <div className="sheet-footer">
        <p className="footer-text">Practice makes perfect! Keep tracing.</p>
      </div>
    </div>
  );
};

export default PracticeSheet;
