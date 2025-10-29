/**
 * ControlPanel Component
 * Contains all controls for generating practice sheets
 */

import React from 'react';
import AlphabetSelector from './AlphabetSelector';
import CaseSelector from './CaseSelector';
import '../styles/ControlPanel.css';

const ControlPanel = ({
  selectedLetter,
  selectedCase,
  onLetterChange,
  onCaseChange,
  onPrint,
}) => {
  const canGenerate = selectedLetter && selectedCase;

  return (
    <div className="control-panel">
      <div className="control-panel-header">
        <h1 className="app-title">Alphabet Practice Generator</h1>
        <p className="app-description">
          Create printable alphabet practice sheets for preschool children
        </p>
      </div>

      <div className="controls-container">
        <AlphabetSelector
          selectedLetter={selectedLetter}
          onLetterChange={onLetterChange}
        />

        <CaseSelector
          selectedCase={selectedCase}
          onCaseChange={onCaseChange}
        />

        <div className="action-buttons">
          <button
            className="btn btn-primary"
            onClick={onPrint}
            disabled={!canGenerate}
            aria-label="Print practice sheet"
          >
            Print Practice Sheet
          </button>
        </div>
      </div>

      {!canGenerate && (
        <div className="help-text">
          <p>Select a letter and case to get started</p>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
