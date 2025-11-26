/**
 * Custom Hook: useAlphabetPractice
 * Manages state and logic for alphabet practice sheet generation
 */

import { useState, useCallback } from 'react';
import { CASE_TYPES, PRACTICE_CONFIG, DISPLAY_STYLES } from '../constants/appConstants';

const useAlphabetPractice = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [selectedCase, setSelectedCase] = useState(CASE_TYPES.UPPERCASE);
  const [linesCount, setLinesCount] = useState(PRACTICE_CONFIG.LINES_PER_PAGE);
  const [displayStyle, setDisplayStyle] = useState(DISPLAY_STYLES.DOTTED);
  const [opacity, setOpacity] = useState(PRACTICE_CONFIG.DEFAULT_OPACITY);
  const [fontSize, setFontSize] = useState(PRACTICE_CONFIG.DEFAULT_FONT_SIZE);
  const [fontWeight, setFontWeight] = useState(PRACTICE_CONFIG.DEFAULT_FONT_WEIGHT);
  const [lettersPerLine, setLettersPerLine] = useState(PRACTICE_CONFIG.DEFAULT_LETTERS_PER_LINE);
  const [lineHeight, setLineHeight] = useState(PRACTICE_CONFIG.DEFAULT_LINE_HEIGHT);

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
   * Handle lines count change
   */
  const handleLinesChange = useCallback((count) => {
    setLinesCount(count);
  }, []);

  /**
   * Handle display style change
   */
  const handleDisplayStyleChange = useCallback((style) => {
    setDisplayStyle(style);
  }, []);

  /**
   * Handle opacity change
   */
  const handleOpacityChange = useCallback((value) => {
    setOpacity(value);
  }, []);

  /**
   * Handle font size change
   */
  const handleFontSizeChange = useCallback((value) => {
    setFontSize(value);
  }, []);

  /**
   * Handle font weight change
   */
  const handleFontWeightChange = useCallback((value) => {
    setFontWeight(value);
  }, []);

  /**
   * Handle letters per line change
   */
  const handleLettersPerLineChange = useCallback((value) => {
    setLettersPerLine(value);
  }, []);

  /**
   * Handle line height change
   */
  const handleLineHeightChange = useCallback((value) => {
    setLineHeight(value);
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
    setLinesCount(PRACTICE_CONFIG.LINES_PER_PAGE);
    setDisplayStyle(DISPLAY_STYLES.DOTTED);
    setOpacity(PRACTICE_CONFIG.DEFAULT_OPACITY);
    setFontSize(PRACTICE_CONFIG.DEFAULT_FONT_SIZE);
    setFontWeight(PRACTICE_CONFIG.DEFAULT_FONT_WEIGHT);
    setLettersPerLine(PRACTICE_CONFIG.DEFAULT_LETTERS_PER_LINE);
    setLineHeight(PRACTICE_CONFIG.DEFAULT_LINE_HEIGHT);
  }, []);

  /**
   * Apply a full configuration object
   */
  const applyConfig = useCallback((config) => {
    if (config.selectedLetters) setSelectedLetters(config.selectedLetters);
    if (config.selectedCase) setSelectedCase(config.selectedCase);
    if (config.linesCount) setLinesCount(config.linesCount);
    if (config.displayStyle) setDisplayStyle(config.displayStyle);
    if (config.opacity !== undefined) setOpacity(config.opacity);
    if (config.fontSize) setFontSize(config.fontSize);
    if (config.fontWeight) setFontWeight(config.fontWeight);
    if (config.lettersPerLine) setLettersPerLine(config.lettersPerLine);
    if (config.lineHeight) setLineHeight(config.lineHeight);
  }, []);

  return {
    selectedLetters,
    selectedCase,
    linesCount,
    displayStyle,
    opacity,
    fontSize,
    fontWeight,
    lettersPerLine,
    lineHeight,
    applyConfig,
    handleLetterChange,
    handleCaseChange,
    handleLinesChange,
    handleDisplayStyleChange,
    handleOpacityChange,
    handleFontSizeChange,
    handleFontWeightChange,
    handleLettersPerLineChange,
    handleLineHeightChange,
    handlePrint,
    handleReset,
  };
};

export default useAlphabetPractice;
