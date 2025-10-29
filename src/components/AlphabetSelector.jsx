/**
 * AlphabetSelector Component
 * Multi-select component for selecting alphabet letters
 */

import { ALPHABETS } from '../constants/appConstants';
import '../styles/AlphabetSelector.css';

const AlphabetSelector = ({ selectedLetters, onLetterChange }) => {
  const handleLetterToggle = (letter) => {
    if (selectedLetters.includes(letter)) {
      // Remove letter if already selected
      onLetterChange(selectedLetters.filter(l => l !== letter));
    } else {
      // Add letter to selection
      onLetterChange([...selectedLetters, letter]);
    }
  };

  const handleClearAll = () => {
    onLetterChange([]);
  };

  const handleSelectAll = () => {
    onLetterChange([...ALPHABETS]);
  };

  return (
    <div className="alphabet-selector">
      <div className="selector-header">
        <label className="selector-label">
          Select Alphabets:
        </label>
        <div className="selector-actions">
          <button
            className="btn-small btn-secondary"
            onClick={handleSelectAll}
            type="button"
          >
            Select All
          </button>
          <button
            className="btn-small btn-secondary"
            onClick={handleClearAll}
            type="button"
            disabled={selectedLetters.length === 0}
          >
            Clear All
          </button>
        </div>
      </div>

      {selectedLetters.length > 0 && (
        <div className="selected-letters-display">
          <span className="selected-count">
            Selected ({selectedLetters.length}):
          </span>
          <span className="selected-letters">
            {selectedLetters.join(', ')}
          </span>
        </div>
      )}

      <div className="alphabet-grid">
        {ALPHABETS.map((letter) => (
          <button
            key={letter}
            className={`alphabet-button ${selectedLetters.includes(letter) ? 'selected' : ''}`}
            onClick={() => handleLetterToggle(letter)}
            type="button"
            aria-label={`${selectedLetters.includes(letter) ? 'Deselect' : 'Select'} letter ${letter}`}
            aria-pressed={selectedLetters.includes(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlphabetSelector;
