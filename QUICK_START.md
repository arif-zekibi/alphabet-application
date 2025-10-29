# Quick Start Guide

## Installation & Running

```bash
# 1. Navigate to project directory
cd alphabet-application

# 2. Install dependencies (if not already done)
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# The app will automatically open at http://localhost:3000
```

## Using the Application

### Creating a Practice Sheet

1. **Select a Letter**
   - Click the dropdown labeled "Select Alphabet"
   - Choose any letter from A to Z

2. **Choose Letter Case**
   - Select "Uppercase (ABC)" for capital letters
   - Select "Lowercase (abc)" for small letters

3. **Preview**
   - The practice sheet appears automatically below the controls
   - You'll see 8 practice lines with 5 repetitions of your chosen letter

4. **Print**
   - Click the "Print Practice Sheet" button
   - In the print dialog:
     - Select A4 paper size
     - Choose Portrait orientation
     - Enable "Background graphics" or "Print backgrounds"
     - Set scale to 100%
   - Click Print

## Project Structure Overview

```
alphabet-application/
├── src/
│   ├── components/       # React components (6 files)
│   ├── constants/        # Configuration (1 file)
│   ├── hooks/           # Custom hooks (1 file)
│   ├── styles/          # CSS files (8 files)
│   ├── utils/           # Utilities (1 file)
│   ├── App.jsx          # Main component
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── package.json         # Dependencies
├── vite.config.js       # Build configuration
└── Documentation files
```

## Key Files to Understand

### 1. Components ([src/components/](src/components/))
- **AlphabetSelector.jsx**: Letter dropdown (A-Z)
- **CaseSelector.jsx**: Uppercase/lowercase radio buttons
- **ControlPanel.jsx**: Main control interface
- **DottedLetter.jsx**: Individual dotted letter (SVG)
- **PracticeLine.jsx**: Single practice line with 4 guide lines
- **PracticeSheet.jsx**: Complete practice sheet (8 lines)

### 2. Configuration ([src/constants/appConstants.js](src/constants/appConstants.js))
Change application behavior here:
```javascript
PRACTICE_LINE_COLORS  // Guide line colors
PRACTICE_CONFIG       // Lines per page, dot size, etc.
```

### 3. Custom Hook ([src/hooks/useAlphabetPractice.js](src/hooks/useAlphabetPractice.js))
Manages all application state and logic

### 4. Utilities ([src/utils/alphabetUtils.js](src/utils/alphabetUtils.js))
Generates dot patterns for each letter

## Customization Examples

### Change Number of Lines per Page
Edit [src/constants/appConstants.js](src/constants/appConstants.js):
```javascript
export const PRACTICE_CONFIG = {
  LINES_PER_PAGE: 10,  // Change from 8 to 10
  // ...
};
```

### Change Dot Size
Edit [src/constants/appConstants.js](src/constants/appConstants.js):
```javascript
export const PRACTICE_CONFIG = {
  DOT_SIZE: 10,  // Change from 8 to 10
  // ...
};
```

### Change Guide Line Colors
Edit [src/constants/appConstants.js](src/constants/appConstants.js):
```javascript
export const PRACTICE_LINE_COLORS = {
  TOP: '#YOUR_COLOR',
  MIDDLE_TOP: '#YOUR_COLOR',
  MIDDLE_BOTTOM: '#YOUR_COLOR',
  BOTTOM: '#YOUR_COLOR',
};
```

### Add Custom Letter Pattern
Edit [src/utils/alphabetUtils.js](src/utils/alphabetUtils.js):
```javascript
const patterns = {
  'F': [
    { x: 30, y: 10 },
    { x: 30, y: 20 },
    // Add more dot coordinates...
  ],
};
```

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## File Naming Conventions

- **Components**: `PascalCase.jsx` (e.g., `AlphabetSelector.jsx`)
- **Utilities**: `camelCase.js` (e.g., `alphabetUtils.js`)
- **Styles**: `PascalCase.css` (e.g., `AlphabetSelector.css`)
- **Constants**: `camelCase.js` (e.g., `appConstants.js`)

## Common Tasks

### Adding a New Component

1. Create component file in `src/components/`
```jsx
import React from 'react';
import '../styles/MyComponent.css';

const MyComponent = ({ prop1, prop2 }) => {
  return <div className="my-component">Content</div>;
};

export default MyComponent;
```

2. Create CSS file in `src/styles/`
```css
.my-component {
  /* styles here */
}
```

3. Import and use in parent component
```jsx
import MyComponent from './components/MyComponent';
```

### Debugging

1. **Check Browser Console** (F12)
   - Look for errors in red
   - Check React DevTools tab

2. **Check Terminal**
   - Build errors appear here
   - Hot reload status shown here

3. **Common Issues**
   - Port 3000 in use? Kill process or change port in vite.config.js
   - Missing dependencies? Run `npm install`
   - CSS not updating? Hard refresh (Ctrl+Shift+R)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Resources

- **Full Documentation**: See [README.md](README.md)
- **Development Guide**: See [DEVELOPMENT.md](DEVELOPMENT.md)
- **Project Summary**: See [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev

## Getting Help

1. Check the documentation files
2. Review code comments in source files
3. Check browser console for errors
4. Verify Node.js version (v16+)
5. Try deleting `node_modules` and running `npm install` again

## Next Steps

1. ✅ Run the application
2. ✅ Test with different letters
3. ✅ Try printing a practice sheet
4. 📖 Read [DEVELOPMENT.md](DEVELOPMENT.md) for detailed information
5. 🛠️ Customize colors and settings to your preference
6. 🚀 Deploy to a hosting service (Netlify, Vercel, etc.)

---

Happy coding! 🎨📝
