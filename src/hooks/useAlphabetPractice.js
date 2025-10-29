/**
 * Custom Hook: useAlphabetPractice
 * Manages state and logic for alphabet practice sheet generation
 */

import { useState, useCallback } from 'react';
import { CASE_TYPES } from '../constants/appConstants';

const useAlphabetPractice = () => {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [selectedCase, setSelectedCase] = useState(CASE_TYPES.UPPERCASE);

  /**
   * Handle letter selection change
   */
  const handleLetterChange = useCallback((letter) => {
    setSelectedLetter(letter);
  }, []);

  /**
   * Handle case selection change
   */
  const handleCaseChange = useCallback((caseType) => {
    setSelectedCase(caseType);
  }, []);

  /**
   * Handle print action
   */
  const handlePrint = useCallback(() => {
    if (!selectedLetter) {
      alert('Please select a letter first');
      return;
    }

    // Trigger browser print dialog
    window.print();
  }, [selectedLetter]);

  /**
   * Reset all selections
   */
  const handleReset = useCallback(() => {
    setSelectedLetter('');
    setSelectedCase(CASE_TYPES.UPPERCASE);
  }, []);

  return {
    selectedLetter,
    selectedCase,
    handleLetterChange,
    handleCaseChange,
    handlePrint,
    handleReset,
  };
};

export default useAlphabetPractice;
