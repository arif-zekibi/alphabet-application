/**
 * ControlPanel Component
 * Contains all controls for generating practice sheets
 */

import React from 'react';
import AlphabetSelector from './AlphabetSelector';
import CaseSelector from './CaseSelector';
import LinesSelector from './LinesSelector';
import DisplayStyleSelector from './DisplayStyleSelector';
import OpacitySelector from './OpacitySelector';
import FontSizeSelector from './FontSizeSelector';
import FontWeightSelector from './FontWeightSelector';
import LayoutSelector from './LayoutSelector';
import { DISPLAY_STYLES } from '../constants/appConstants';
import '../styles/ControlPanel.css';

const ControlPanel = ({
  selectedLetters,
  selectedCase,
  linesCount,
  displayStyle,
  opacity,
  fontSize,
  fontWeight,
  lettersPerLine,
  lineHeight,
  onLetterChange,
  onCaseChange,
  onLinesChange,
  onDisplayStyleChange,
  onOpacityChange,
  onFontSizeChange,
  onFontWeightChange,
  onLettersPerLineChange,
  onLineHeightChange,
  onPrint,
}) => {
  const canGenerate = selectedLetters.length > 0 && selectedCase;

  return (
    <div className="control-panel">
      <div className="control-panel-header">
        <h1 className="app-title">Alphabet Practice Generator</h1>
        <p className="app-description">
          Create printable alphabet practice sheets for preschool children
        </p>
      </div>

      <div className="controls-container">
        <AlphabetSelector
          selectedLetters={selectedLetters}
          onLetterChange={onLetterChange}
        />

        <CaseSelector
          selectedCase={selectedCase}
          onCaseChange={onCaseChange}
        />

        <LinesSelector
          selectedLines={linesCount}
          onLinesChange={onLinesChange}
        />

        <DisplayStyleSelector
          selectedStyle={displayStyle}
          onStyleChange={onDisplayStyleChange}
        />

        <OpacitySelector
          opacity={opacity}
          onOpacityChange={onOpacityChange}
          disabled={displayStyle === DISPLAY_STYLES.DOTTED}
        />

        <FontSizeSelector
          fontSize={fontSize}
          onFontSizeChange={onFontSizeChange}
          disabled={displayStyle === DISPLAY_STYLES.DOTTED}
        />

        <FontWeightSelector
          fontWeight={fontWeight}
          onFontWeightChange={onFontWeightChange}
        />

        <LayoutSelector
          lettersPerLine={lettersPerLine}
          onLettersPerLineChange={onLettersPerLineChange}
          lineHeight={lineHeight}
          onLineHeightChange={onLineHeightChange}
        />

        <div className="action-buttons">
          <button
            className="btn btn-primary"
            onClick={onPrint}
            disabled={!canGenerate}
            aria-label="Print practice sheet"
          >
            Print Practice Sheet
          </button>
        </div>
      </div>

      {!canGenerate && (
        <div className="help-text">
          <p>Select at least one letter and case to get started</p>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
