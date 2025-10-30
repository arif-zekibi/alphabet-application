/**
 * DisplayStyleSelector Component
 * Allows users to select between dotted and opacity display styles
 */

import React from 'react';
import { DISPLAY_STYLES } from '../constants/appConstants';
import '../styles/DisplayStyleSelector.css';

const DisplayStyleSelector = ({ selectedStyle, onStyleChange }) => {
  return (
    <div className="display-style-selector">
      <label className="selector-label">Display Style:</label>
      <div className="style-options">
        <button
          type="button"
          className={`style-option ${selectedStyle === DISPLAY_STYLES.DOTTED ? 'selected' : ''}`}
          onClick={() => onStyleChange(DISPLAY_STYLES.DOTTED)}
          aria-label="Select dotted letter style"
          aria-pressed={selectedStyle === DISPLAY_STYLES.DOTTED}
        >
          <span className="option-icon">⚫</span>
          <span className="option-label">Dotted</span>
        </button>
        <button
          type="button"
          className={`style-option ${selectedStyle === DISPLAY_STYLES.OPACITY ? 'selected' : ''}`}
          onClick={() => onStyleChange(DISPLAY_STYLES.OPACITY)}
          aria-label="Select opacity letter style"
          aria-pressed={selectedStyle === DISPLAY_STYLES.OPACITY}
        >
          <span className="option-icon">◯</span>
          <span className="option-label">Opacity</span>
        </button>
      </div>
    </div>
  );
};

export default DisplayStyleSelector;
