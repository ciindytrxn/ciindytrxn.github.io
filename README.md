# Cindy Tran Portfolio Website

A personal portfolio website with interactive animations, draggable elements, and dynamic content sections.

## Features

- **Landing Page**: Typewriter effect animation for name display using Mr De Haviland font
- **Interactive Rectangles**: Draggable navigation rectangles that can be moved around the screen
- **Static Name Display**: "CINDY TRAN" with subtitle positioned on the left side of the secondary landing page
- **Three Main Sections**:
  - Overview: Personal goals and interests
  - Portfolio: Charts and graphic design projects with hover effects and popups
  - Research: Academic research projects with summaries
- **Navigation Logo**: "Cindy Tran" logo in navigation bar that returns to secondary landing page
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Custom Fonts**: Uses Mr De Haviland (Google Fonts) for script text and Inter (Google Fonts) for body text

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Interactive functionality and animations
- `README.md` - This file

Note: The fonts (Mr De Haviland and Inter) are loaded from Google Fonts, so no local font files are needed.

## Setup Instructions for MacBook Air M1

### Method 1: Using VSCode with Live Server (Recommended)

1. **Open the project folder in VSCode**:
   ```bash
   cd /path/to/your/portfolio/folder
   code .
   ```

2. **Install Live Server extension**:
   - Open VSCode
   - Click on Extensions icon (or press `Cmd+Shift+X`)
   - Search for "Live Server" by Ritwick Dey
   - Click "Install"

3. **Launch the website**:
   - Right-click on `index.html` in VSCode
   - Select "Open with Live Server"
   - Your default browser will open with the portfolio

4. **The website will automatically reload when you make changes to any file**

### Method 2: Using Python's Built-in Server

1. **Open Terminal** and navigate to your project folder:
   ```bash
   cd /path/to/your/portfolio/folder
   ```

2. **Start a local server**:
   ```bash
   python3 -m http.server 8000
   ```

3. **Open your browser** and go to:
   ```
   http://localhost:8000
   ```

### Method 3: Direct File Opening (Limited Functionality)

1. **Simply double-click** `index.html` in Finder
2. The website will open in your default browser
3. Note: Some features may not work due to CORS restrictions

## Project Structure

```
portfolio/
│
├── index.html                           # Main HTML file
├── styles.css                           # All CSS styling
├── script.js                            # JavaScript functionality
└── README.md                            # Documentation
```

Note: Fonts are loaded from Google Fonts CDN

## Customization Guide

### Colors

The website uses three main colors:
- `#edebde` - Background (warm beige)
- `#74342b` - Primary accent (rust red)
- `#8fa5d1` - Secondary accent (muted blue)
- `#3a1312` - Tertiary accent (dark brown)

To change colors, search and replace these hex codes in `styles.css`.

### Content

#### Overview Page
Edit the goals and interests in `index.html` within the `<div id="overview-page">` section.

#### Portfolio Page
- **Charts**: Modify the chart names in the `data-name` attributes
- **Chart Descriptions**: Edit the `chartDescriptions` object in `script.js`
- **Design Projects**: Modify the design item names and project galleries in `script.js`

#### Research Page
Edit the research items in `index.html` within the `<div id="research-page">` section.

### Fonts

- **Mr De Haviland**: Loaded from Google Fonts (for typewriter effect and navigation logo)
- **Inter**: Loaded from Google Fonts (for all body text)

To change fonts:
1. Update the Google Fonts link in `index.html`
2. Update the `font-family` declarations in `styles.css`

## Browser Compatibility

Tested and working on:
- Safari (macOS)
- Chrome (macOS)
- Firefox (macOS)
- Edge (macOS)

## Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## Features Explanation

### Landing Page Animation
- Name appears with typewriter effect using Mr De Haviland font
- Cursor blinks during typing
- After completion, transitions to secondary landing page

### Secondary Landing Page
- Static text displaying "CINDY TRAN" with subtitle on the left side
- Draggable rectangles (instead of squares) positioned like in the demo
- Text in rectangles positioned parallel to edges:
  - "OVERVIEW" and "PORTFOLIO" at the top of their rectangles
  - "RESEARCH" at the bottom of its rectangle
- Rectangles can be dragged around the screen
- Click without dragging to navigate to that section

### Navigation Bar
- "Cindy Tran" logo on the left in Mr De Haviland font
- Click logo to return to secondary landing page
- Three navigation buttons on the right
- Fixed at top of all content pages

### Portfolio Interactions
- **Charts**: Hover to see name with colored overlay, click for detailed popup
- **Design**: Hover to see name with colored overlay, click to view gallery of related designs
- Gallery supports keyboard navigation (arrow keys and ESC)

### Navigation
- Fixed navigation bar appears on all content pages
- Click any button to switch between sections
- Smooth transitions between pages

## Troubleshooting

### Fonts not loading
- Make sure you have an internet connection (fonts load from Google Fonts)
- Check that the Google Fonts link is accessible
- Try clearing your browser cache

### Draggable rectangles not working
- Make sure JavaScript is enabled in your browser
- Try using a local server instead of opening the HTML file directly

### Page not loading correctly
- Clear your browser cache
- Try opening in a different browser
- Check the browser console for errors (press `F12` or `Cmd+Option+I`)

### Typewriter effect not showing
- Wait a moment after the page loads
- Refresh the page
- Check that JavaScript is enabled

### Navigation logo not working
- Make sure you're clicking on the "Cindy Tran" text in the navigation bar
- Check browser console for JavaScript errors

## Development Tips

### Testing Changes
- Use Live Server for instant reload when you save changes
- Open browser developer tools (`Cmd+Option+I`) to debug
- Use the Console tab to see any JavaScript errors

### Adding New Portfolio Items
1. Add a new `<div>` with class `portfolio-item` in `index.html`
2. Set the `data-name` and `data-color` attributes
3. For charts, add the description to `chartDescriptions` in `script.js`
4. For designs, add the project to `projectGalleries` in `script.js`

### Modifying Animations
- Typewriter speed: Change the timeout value in `script.js` (default 200ms)
- Transition speed: Modify the `transition` properties in `styles.css`
- Hover effects: Adjust the `transform` and `box-shadow` values

## Credits

- **Design**: Based on portfolio_demo.pdf
- **Fonts**: 
  - Mr De Haviland by Sudtipos (Google Fonts)
  - Inter by Rasmus Andersson (Google Fonts)
- **Developer**: Cindy Tran

## License

Personal portfolio project. All rights reserved.

## Contact

For questions or issues with the website, please refer to the comments in the code or the troubleshooting section above.
