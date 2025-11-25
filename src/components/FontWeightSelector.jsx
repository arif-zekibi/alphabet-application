/**
 * FontWeightSelector Component
 * Allows users to select the font weight (thickness) for letters
 */

import React from 'react';
import { PRACTICE_CONFIG } from '../constants/appConstants';
import '../styles/FontWeightSelector.css';

const FontWeightSelector = ({ fontWeight, onFontWeightChange }) => {
  const handleWeightChange = (e) => {
    const value = parseInt(e.target.value, 10);
    onFontWeightChange(value);
  };

  const getWeightLabel = (weight) => {
    if (weight <= 200) return 'Ultra Thin';
    if (weight <= 300) return 'Thin';
    if (weight <= 500) return 'Normal';
    if (weight <= 700) return 'Thick';
    return 'Ultra Thick';
  };

  return (
    <div className="font-weight-selector">
      <label className="selector-label">
        Letter Thickness: <span className="weight-value">{getWeightLabel(fontWeight)}</span>
      </label>
      <div className="weight-control">
        <input
          type="range"
          min={PRACTICE_CONFIG.MIN_FONT_WEIGHT}
          max={PRACTICE_CONFIG.MAX_FONT_WEIGHT}
          step="100"
          value={fontWeight}
          onChange={handleWeightChange}
          className="weight-slider"
          aria-label="Select font weight"
        />
        <div className="weight-markers">
          <span className="marker">Thin</span>
          <span className="marker">Normal</span>
          <span className="marker">Thick</span>
        </div>
      </div>
      <div className="weight-preview">
        <span className="preview-letter" style={{ fontWeight }}>Aa</span>
      </div>
    </div>
  );
};

export default FontWeightSelector;
