/**
 * AlphabetSelector Component
 * Dropdown component for selecting an alphabet letter
 */

import React from 'react';
import { ALPHABETS } from '../constants/appConstants';
import '../styles/AlphabetSelector.css';

const AlphabetSelector = ({ selectedLetter, onLetterChange }) => {
  const handleChange = (event) => {
    onLetterChange(event.target.value);
  };

  return (
    <div className="alphabet-selector">
      <label htmlFor="alphabet-select" className="selector-label">
        Select Alphabet:
      </label>
      <select
        id="alphabet-select"
        className="selector-dropdown"
        value={selectedLetter}
        onChange={handleChange}
        aria-label="Select an alphabet letter"
      >
        <option value="">-- Choose a Letter --</option>
        {ALPHABETS.map((letter) => (
          <option key={letter} value={letter}>
            {letter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AlphabetSelector;
