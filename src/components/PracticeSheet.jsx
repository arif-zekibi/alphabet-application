/**
 * PracticeSheet Component
 * Main component that renders the complete practice sheet with multiple lines
 */

import React from 'react';
import PracticeLine from './PracticeLine';
import { PRACTICE_CONFIG } from '../constants/appConstants';
import '../styles/PracticeSheet.css';

const PracticeSheet = ({ letter, caseType }) => {
  if (!letter) {
    return (
      <div className="practice-sheet-empty">
        <p className="empty-message">
          Please select a letter and case to generate practice sheet
        </p>
      </div>
    );
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
            Letter: <strong>{caseType === 'uppercase' ? letter.toUpperCase() : letter.toLowerCase()}</strong>
          </span>
          <span className="case-display">
            Case: <strong>{caseType === 'uppercase' ? 'UPPERCASE' : 'lowercase'}</strong>
          </span>
        </div>
      </div>

      {/* Practice Lines */}
      <div className="practice-lines-container">
        {[...Array(PRACTICE_CONFIG.LINES_PER_PAGE)].map((_, index) => (
          <PracticeLine
            key={`line-${index}`}
            letter={letter}
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
