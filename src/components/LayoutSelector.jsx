/**
 * LayoutSelector Component
 * Allows users to configure layout settings (letters per line, line height)
 */

import React from 'react';
import { PRACTICE_CONFIG } from '../constants/appConstants';
import '../styles/LayoutSelector.css';

const LayoutSelector = ({
    lettersPerLine,
    onLettersPerLineChange,
    lineHeight,
    onLineHeightChange
}) => {
    const handleLettersChange = (e) => {
        onLettersPerLineChange(parseInt(e.target.value, 10));
    };

    const handleHeightChange = (e) => {
        onLineHeightChange(parseInt(e.target.value, 10));
    };

    return (
        <div className="layout-selector">
            <div className="control-group">
                <label className="selector-label">
                    Letters Per Line: <span className="value-display">{lettersPerLine}</span>
                </label>
                <div className="control-input">
                    <input
                        type="range"
                        min={PRACTICE_CONFIG.MIN_LETTERS_PER_LINE}
                        max={PRACTICE_CONFIG.MAX_LETTERS_PER_LINE}
                        value={lettersPerLine}
                        onChange={handleLettersChange}
                        className="layout-slider"
                    />
                </div>
            </div>

            <div className="control-group">
                <label className="selector-label">
                    Line Spacing (Height): <span className="value-display">{lineHeight}px</span>
                </label>
                <div className="control-input">
                    <input
                        type="range"
                        min={PRACTICE_CONFIG.MIN_LINE_HEIGHT}
                        max={PRACTICE_CONFIG.MAX_LINE_HEIGHT}
                        value={lineHeight}
                        onChange={handleHeightChange}
                        className="layout-slider"
                    />
                </div>
            </div>
        </div>
    );
};

export default LayoutSelector;
