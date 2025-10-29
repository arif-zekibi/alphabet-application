/**
 * LinesSelector Component
 * Dropdown component for selecting number of practice lines
 */

import { PRACTICE_CONFIG } from '../constants/appConstants';
import '../styles/LinesSelector.css';

const LinesSelector = ({ selectedLines, onLinesChange }) => {
  const handleChange = (event) => {
    onLinesChange(Number(event.target.value));
  };

  // Generate options from 5 to 30 lines
  const lineOptions = [];
  for (let i = 5; i <= 30; i += 5) {
    lineOptions.push(i);
  }

  return (
    <div className="lines-selector">
      <label htmlFor="lines-select" className="selector-label">
        Number of Lines:
      </label>
      <select
        id="lines-select"
        className="selector-dropdown"
        value={selectedLines}
        onChange={handleChange}
        aria-label="Select number of practice lines"
      >
        {lineOptions.map((count) => (
          <option key={count} value={count}>
            {count} lines
          </option>
        ))}
      </select>
    </div>
  );
};

export default LinesSelector;
