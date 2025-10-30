/**
 * FontSizeSelector Component
 * Allows users to select the font size for letters in opacity mode
 */

import React from 'react';
import { PRACTICE_CONFIG } from '../constants/appConstants';
import '../styles/FontSizeSelector.css';

const FontSizeSelector = ({ fontSize, onFontSizeChange, disabled }) => {
  const handleFontSizeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    onFontSizeChange(value);
  };

  return (
    <div className={`font-size-selector ${disabled ? 'disabled' : ''}`}>
      <label className="selector-label">
        Font Size: <span className="font-size-value">{fontSize}px</span>
      </label>
      <div className="font-size-control">
        <input
          type="range"
          min={PRACTICE_CONFIG.MIN_FONT_SIZE}
          max={PRACTICE_CONFIG.MAX_FONT_SIZE}
          step="5"
          value={fontSize}
          onChange={handleFontSizeChange}
          disabled={disabled}
          className="font-size-slider"
          aria-label="Select font size"
        />
        <div className="font-size-markers">
          <span className="marker">Small</span>
          <span className="marker">Medium</span>
          <span className="marker">Large</span>
        </div>
      </div>
      <div className="font-size-preview">
        <span className="preview-letter" style={{ fontSize: `${fontSize * 0.6}px` }}>Aa</span>
      </div>
    </div>
  );
};

export default FontSizeSelector;
