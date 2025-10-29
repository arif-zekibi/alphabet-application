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
    handleLetterChange,
    handleCaseChange,
    handlePrint,
  } = useAlphabetPractice();

  return (
    <div className="app">
      {/* Control Panel - Hidden during print */}
      <div className="no-print">
        <ControlPanel
          selectedLetters={selectedLetters}
          selectedCase={selectedCase}
          onLetterChange={handleLetterChange}
          onCaseChange={handleCaseChange}
          onPrint={handlePrint}
        />
      </div>

      {/* Practice Sheet - Main printable area */}
      <div className="print-area">
        <PracticeSheet
          letters={selectedLetters}
          caseType={selectedCase}
        />
      </div>
    </div>
  );
}

export default App;
