/**
 * Main App Component
 * Root component for Alphabet Practice Application
 */

import React from 'react';
import ControlPanel from './components/ControlPanel';
import PracticeSheet from './components/PracticeSheet';
import useAlphabetPractice from './hooks/useAlphabetPractice';
import './styles/App.css';

function App() {
  const {
    selectedLetters,
    selectedCase,
    linesCount,
    handleLetterChange,
    handleCaseChange,
    handleLinesChange,
    handlePrint,
  } = useAlphabetPractice();

  return (
    <div className="app">
      {/* Control Panel - Hidden during print */}
      <div className="no-print">
        <ControlPanel
          selectedLetters={selectedLetters}
          selectedCase={selectedCase}
          linesCount={linesCount}
          onLetterChange={handleLetterChange}
          onCaseChange={handleCaseChange}
          onLinesChange={handleLinesChange}
          onPrint={handlePrint}
        />
      </div>

      {/* Practice Sheet - Main printable area */}
      <div className="print-area">
        <PracticeSheet
          letters={selectedLetters}
          caseType={selectedCase}
          linesCount={linesCount}
        />
      </div>
    </div>
  );
}

export default App;
