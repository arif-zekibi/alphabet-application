/**
 * StrokeSelector Component
 * Allows users to select the stroke width for letters
 */

import React from 'react';
import { PRACTICE_CONFIG } from '../constants/appConstants';
import '../styles/StrokeSelector.css';

const StrokeSelector = ({ strokeWidth, onStrokeWidthChange }) => {
  const handleStrokeChange = (e) => {
    const value = parseFloat(e.target.value);
    onStrokeWidthChange(value);
  };

  return (
    <div className="stroke-selector">
      <label className="selector-label">
        Stroke Width: <span className="stroke-value">{strokeWidth}px</span>
      </label>
      <div className="stroke-control">
        <input
          type="range"
          min={PRACTICE_CONFIG.MIN_STROKE_WIDTH}
          max={PRACTICE_CONFIG.MAX_STROKE_WIDTH}
          step="0.5"
          value={strokeWidth}
          onChange={handleStrokeChange}
          className="stroke-slider"
          aria-label="Select stroke width"
        />
        <div className="stroke-markers">
          <span className="marker">No Stroke</span>
          <span className="marker">Thin</span>
          <span className="marker">Thick</span>
        </div>
      </div>
      <div className="stroke-preview">
        <svg width="100" height="60" xmlns="http://www.w3.org/2000/svg">
          <text
            x="50"
            y="40"
            fontSize="40"
            fontFamily="Tw Cen MT, Century Gothic, Arial, sans-serif"
            fontWeight="normal"
            textAnchor="middle"
            fill="none"
            stroke="#000000"
            strokeWidth={strokeWidth}
          >
            A
          </text>
        </svg>
      </div>
    </div>
  );
};

export default StrokeSelector;
