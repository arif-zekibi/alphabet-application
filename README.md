# Alphabet Practice Application

A professional React application for creating printable alphabet practice sheets designed for preschool children. This application generates A4-sized worksheets with dotted letters and standard four-line handwriting guidelines.

## Features

- **Letter Selection**: Choose any letter from A-Z via an intuitive dropdown
- **Case Options**: Generate practice sheets for uppercase or lowercase letters
- **Four-Line Practice Standard**: Includes standard handwriting guide lines:
  - Top line (ascender line) - Light gray
  - Middle dotted line - Light pink
  - Baseline (main writing line) - Sky blue
  - Bottom line (descender line) - Light gray
- **Dotted Letters**: Each letter is rendered with dots for tracing practice
- **A4 Print Optimization**: Perfect formatting for standard A4 paper
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI**: Child-friendly interface with intuitive controls

## Technology Stack

- **React 18.3.1**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **SVG**: Scalable vector graphics for crisp letter rendering

## Project Structure

```
alphabet-application/
├── src/
│   ├── components/          # React components
│   │   ├── AlphabetSelector.jsx
│   │   ├── CaseSelector.jsx
│   │   ├── ControlPanel.jsx
│   │   ├── DottedLetter.jsx
│   │   ├── PracticeLine.jsx
│   │   └── PracticeSheet.jsx
│   ├── constants/           # Application constants
│   │   └── appConstants.js
│   ├── hooks/              # Custom React hooks
│   │   └── useAlphabetPractice.js
│   ├── styles/             # CSS modules
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── AlphabetSelector.css
│   │   ├── CaseSelector.css
│   │   ├── ControlPanel.css
│   │   ├── DottedLetter.css
│   │   ├── PracticeLine.css
│   │   └── PracticeSheet.css
│   ├── utils/              # Utility functions
│   │   └── alphabetUtils.js
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── public/                 # Static assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
├── .gitignore             # Git ignore rules
└── README.md              # Documentation

```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
cd alphabet-application
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

### Creating Practice Sheets

1. **Select a Letter**: Choose a letter from the dropdown menu (A-Z)
2. **Choose Case**: Select either Uppercase or Lowercase
3. **Preview**: The practice sheet will automatically generate on screen
4. **Print**: Click the "Print Practice Sheet" button to print on A4 paper

### Printing Tips

- Use A4 paper for best results
- Set printer to "Actual Size" or "100%" scale
- Ensure "Print backgrounds" is enabled in browser print settings
- Use portrait orientation

## Coding Standards

This project follows professional React development standards:

### Component Structure
- Functional components with React Hooks
- PropTypes for type checking
- Clear component responsibility and separation of concerns

### Code Organization
- Consistent file naming (PascalCase for components)
- Modular CSS files per component
- Centralized constants and utilities

### Best Practices
- Semantic HTML for accessibility
- ARIA labels for screen readers
- Responsive design principles
- Print-optimized CSS with `@media print`
- Clean code with comprehensive comments

### Naming Conventions
- Components: PascalCase (e.g., `AlphabetSelector`)
- Functions: camelCase (e.g., `handleLetterChange`)
- Constants: UPPER_SNAKE_CASE (e.g., `PRACTICE_LINE_COLORS`)
- CSS classes: kebab-case (e.g., `practice-line`)

## Customization

### Modifying Line Colors

Edit [src/constants/appConstants.js](src/constants/appConstants.js) to change practice line colors:

```javascript
export const PRACTICE_LINE_COLORS = {
  TOP: '#E8E8E8',
  MIDDLE_TOP: '#FFB6C1',
  MIDDLE_BOTTOM: '#87CEEB',
  BOTTOM: '#E8E8E8',
};
```

### Adjusting Lines Per Page

Modify the `LINES_PER_PAGE` constant in [src/constants/appConstants.js](src/constants/appConstants.js):

```javascript
export const PRACTICE_CONFIG = {
  LINES_PER_PAGE: 8,  // Change this value
  // ...
};
```

### Adding More Letter Patterns

Extend the `getDotPattern` function in [src/utils/alphabetUtils.js](src/utils/alphabetUtils.js) to add custom dot patterns for each letter.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Complete dot patterns for all 26 letters (uppercase and lowercase)
- [ ] Custom letter patterns based on different handwriting styles
- [ ] Multi-letter words practice
- [ ] Save/load custom practice sheets
- [ ] Export as PDF
- [ ] Multiple language support
- [ ] Adjustable difficulty levels
- [ ] Progress tracking

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Inspired by traditional handwriting practice worksheets
- Built with modern React best practices
- Designed with preschool education in mind

## Support

For issues, questions, or suggestions, please open an issue in the repository.

---

Made with ❤️ for early childhood education
