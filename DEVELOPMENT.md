# Development Guide

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Workflow

### 1. Component Development

Each component follows this structure:

```jsx
/**
 * ComponentName Component
 * Brief description of what this component does
 */

import React from 'react';
import './ComponentName.css';

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here

  return (
    <div className="component-name">
      {/* JSX here */}
    </div>
  );
};

export default ComponentName;
```

### 2. Styling Guidelines

- One CSS file per component
- Use CSS custom properties (defined in `index.css`)
- Follow BEM-like naming: `component-name__element--modifier`
- Include print-specific styles with `@media print`

### 3. State Management

- Use custom hooks for shared logic
- Keep component state local when possible
- Use `useCallback` for memoized functions
- Use `useState` for simple state

## Code Style

### JavaScript/JSX
- Use functional components
- Prefer arrow functions
- Use destructuring for props
- Add PropTypes for type safety

### CSS
- Mobile-first responsive design
- Use CSS Grid/Flexbox for layouts
- Maintain consistent spacing with CSS variables
- Optimize for print with separate media queries

## Testing the Application

### Manual Testing Checklist

- [ ] Select each letter A-Z
- [ ] Toggle between uppercase and lowercase
- [ ] Verify four guide lines appear correctly
- [ ] Check dotted letters render properly
- [ ] Test print functionality
- [ ] Verify A4 paper sizing
- [ ] Test on different browsers
- [ ] Check responsive design on mobile

### Print Testing

1. Select a letter (e.g., "A")
2. Choose case (uppercase or lowercase)
3. Click "Print Practice Sheet"
4. In print preview:
   - Verify control panel is hidden
   - Check A4 dimensions
   - Ensure colors print correctly
   - Verify guide lines are visible

## Project Architecture

### Component Hierarchy

```
App
├── ControlPanel (no-print)
│   ├── AlphabetSelector
│   └── CaseSelector
└── PracticeSheet (print-area)
    └── PracticeLine (x8)
        └── DottedLetter (x5)
```

### Data Flow

1. User selects letter → `handleLetterChange` in custom hook
2. User selects case → `handleCaseChange` in custom hook
3. State updates trigger re-render of PracticeSheet
4. PracticeSheet passes props to PracticeLine components
5. Each PracticeLine renders DottedLetter components
6. DottedLetter generates SVG dots based on letter pattern

## Adding New Features

### Adding More Letter Patterns

Edit `src/utils/alphabetUtils.js`:

```javascript
const patterns = {
  'A': [
    { x: 30, y: 60 }, { x: 35, y: 50 }, // ... more dots
  ],
  'B': [
    // Add your pattern here
  ],
  // Add more letters...
};
```

### Customizing Practice Configuration

Edit `src/constants/appConstants.js`:

```javascript
export const PRACTICE_CONFIG = {
  LINES_PER_PAGE: 8,        // Number of practice lines
  LETTER_SPACING: 60,        // Space between letters
  DOT_SIZE: 8,              // Size of tracing dots
  DOT_COLOR: '#CCCCCC',     // Color of dots
};
```

### Adding New Components

1. Create component file in `src/components/`
2. Create corresponding CSS file in `src/styles/`
3. Import and use in parent component
4. Add to component documentation

## Performance Optimization

- Use React.memo for expensive components
- Implement code splitting if needed
- Optimize SVG rendering
- Minimize re-renders with useCallback

## Accessibility

- Use semantic HTML elements
- Include ARIA labels
- Ensure keyboard navigation works
- Test with screen readers
- Maintain sufficient color contrast

## Browser Compatibility

Tested on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Common Issues

### Issue: Letters not showing
**Solution**: Check that letter patterns exist in `alphabetUtils.js`

### Issue: Print layout broken
**Solution**: Verify `@media print` styles in component CSS files

### Issue: Dots not visible when printed
**Solution**: Ensure `-webkit-print-color-adjust: exact` is set

## Deployment

### Production Build

```bash
npm run build
```

Output will be in the `dist/` directory.

### Hosting Options

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## Contributing

Please follow these guidelines:

1. Create feature branch from `main`
2. Follow existing code style
3. Add comments for complex logic
4. Test thoroughly before PR
5. Update documentation if needed

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [CSS Print Styling](https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/)
