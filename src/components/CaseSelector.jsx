/**
 * CaseSelector Component
 * Radio button group for selecting uppercase or lowercase
 */

import React from 'react';
import { CASE_TYPES } from '../constants/appConstants';
import '../styles/CaseSelector.css';

const CaseSelector = ({ selectedCase, onCaseChange }) => {
  const handleChange = (event) => {
    onCaseChange(event.target.value);
  };

  return (
    <div className="case-selector">
      <label className="selector-label">Letter Case:</label>
      <div className="case-options">
        <label className="case-option">
          <input
            type="radio"
            name="letter-case"
            value={CASE_TYPES.UPPERCASE}
            checked={selectedCase === CASE_TYPES.UPPERCASE}
            onChange={handleChange}
            aria-label="Uppercase letters"
          />
          <span className="case-label">Uppercase (ABC)</span>
        </label>

        <label className="case-option">
          <input
            type="radio"
            name="letter-case"
            value={CASE_TYPES.LOWERCASE}
            checked={selectedCase === CASE_TYPES.LOWERCASE}
            onChange={handleChange}
            aria-label="Lowercase letters"
          />
          <span className="case-label">Lowercase (abc)</span>
        </label>
      </div>
    </div>
  );
};

export default CaseSelector;
