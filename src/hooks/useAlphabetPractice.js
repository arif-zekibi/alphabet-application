/**
 * Custom Hook: useAlphabetPractice
 * Manages state and logic for alphabet practice sheet generation
 */

import { useState, useCallback } from 'react';
import { CASE_TYPES } from '../constants/appConstants';

const useAlphabetPractice = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [selectedCase, setSelectedCase] = useState(CASE_TYPES.UPPERCASE);

  /**
   * Handle letter selection change (now supports multiple letters)
   */
  const handleLetterChange = useCallback((letters) => {
    setSelectedLetters(letters);
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
    if (selectedLetters.length === 0) {
      alert('Please select at least one letter first');
      return;
    }

    // Trigger browser print dialog
    window.print();
  }, [selectedLetters]);

  /**
   * Reset all selections
   */
  const handleReset = useCallback(() => {
    setSelectedLetters([]);
    setSelectedCase(CASE_TYPES.UPPERCASE);
  }, []);

  return {
    selectedLetters,
    selectedCase,
    handleLetterChange,
    handleCaseChange,
    handlePrint,
    handleReset,
  };
};

export default useAlphabetPractice;
