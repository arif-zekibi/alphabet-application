/**
 * Utility functions for alphabet manipulation and dot generation
 */

import { LETTER_PATHS } from './letterPaths';

/**
 * Converts alphabet to specified case
 * @param {string} letter - The letter to convert
 * @param {string} caseType - 'uppercase' or 'lowercase'
 * @returns {string} Converted letter
 */
export const convertCase = (letter, caseType) => {
  return caseType === 'uppercase' ? letter.toUpperCase() : letter.toLowerCase();
};



/**
 * Generates SVG path data for dotted letter
 * @param {string} letter - The letter to generate dots for
 * @param {string} caseType - 'uppercase' or 'lowercase'
 * @returns {Array} Array of dot positions {x, y}
 */
export const generateDottedLetterPath = (letter, caseType) => {
  const convertedLetter = convertCase(letter, caseType);
  const pathData = LETTER_PATHS[caseType]?.[convertedLetter];
  
  if (!pathData) {
    // Fallback for unknown letters
    return Array.from({ length: 15 }, (_, i) => ({
      x: 35 + (i % 3) * 12,
      y: 15 + Math.floor(i / 3) * 12
    }));
  }

  return generateDotsFromPath(pathData);
};

/**
 * Samples points from an SVG path string
 * @param {string} pathData - SVG path string (d attribute)
 * @returns {Array} Array of {x, y} coordinates
 */
const generateDotsFromPath = (pathData) => {
  // Create a temporary path element to use SVG API
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathData);

  const length = path.getTotalLength();
  const dots = [];
  const spacing = 6; // Space between dots

  for (let i = 0; i <= length; i += spacing) {
    const point = path.getPointAtLength(i);
    dots.push({ x: point.x, y: point.y });
  }

  return dots;
};



/**
 * Validates if character is a valid alphabet letter
 * @param {string} char - Character to validate
 * @returns {boolean} True if valid alphabet letter
 */
export const isValidAlphabet = (char) => {
  return /^[A-Za-z]$/.test(char);
};
