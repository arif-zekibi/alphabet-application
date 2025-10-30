/**
 * OpacitySelector Component
 * Allows users to select the opacity level for letters
 */

import React from 'react';
import { PRACTICE_CONFIG } from '../constants/appConstants';
import '../styles/OpacitySelector.css';

const OpacitySelector = ({ opacity, onOpacityChange, disabled }) => {
  const handleOpacityChange = (e) => {
    const value = parseFloat(e.target.value);
    onOpacityChange(value);
  };

  const opacityPercentage = Math.round(opacity * 100);

  return (
    <div className={`opacity-selector ${disabled ? 'disabled' : ''}`}>
      <label className="selector-label">
        Letter Opacity: <span className="opacity-value">{opacityPercentage}%</span>
      </label>
      <div className="opacity-control">
        <input
          type="range"
          min={PRACTICE_CONFIG.MIN_OPACITY}
          max={PRACTICE_CONFIG.MAX_OPACITY}
          step="0.1"
          value={opacity}
          onChange={handleOpacityChange}
          disabled={disabled}
          className="opacity-slider"
          aria-label="Select letter opacity"
        />
        <div className="opacity-markers">
          <span className="marker">Light</span>
          <span className="marker">Dark</span>
        </div>
      </div>
      <div className="opacity-preview" style={{ opacity }}>
        <span className="preview-letter">A</span>
      </div>
    </div>
  );
};

export default OpacitySelector;
