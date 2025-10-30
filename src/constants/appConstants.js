/**
 * Application Constants
 * Contains all constant values used across the application
 */

// Standard four-line practice sheet colors (based on handwriting standards)
export const PRACTICE_LINE_COLORS = {
  TOP: '#E8E8E8',        // Light gray - top line
  MIDDLE_TOP: '#FFB6C1',  // Light pink - dotted middle line (ascender line)
  MIDDLE_BOTTOM: '#87CEEB', // Sky blue - baseline
  BOTTOM: '#E8E8E8',     // Light gray - bottom line (descender line)
};

// Line types for practice sheet
export const LINE_TYPES = {
  SOLID: 'solid',
  DASHED: 'dashed',
};

// Alphabet array
export const ALPHABETS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Case types
export const CASE_TYPES = {
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
};

// A4 paper dimensions (in mm and px at 96 DPI)
export const A4_DIMENSIONS = {
  WIDTH_MM: 210,
  HEIGHT_MM: 297,
  WIDTH_PX: 794,
  HEIGHT_PX: 1123,
};

// Display style types
export const DISPLAY_STYLES = {
  DOTTED: 'dotted',
  OPACITY: 'opacity',
};

// Practice line configuration
export const PRACTICE_CONFIG = {
  LINES_PER_PAGE: 15,
  LETTER_SPACING: 60,
  DOT_SIZE: 8,
  DOT_COLOR: '#CCCCCC',
  DEFAULT_OPACITY: 0.3,
  MIN_OPACITY: 0.1,
  MAX_OPACITY: 0.9,
  DEFAULT_FONT_SIZE: 45,
  MIN_FONT_SIZE: 30,
  MAX_FONT_SIZE: 60,
};
