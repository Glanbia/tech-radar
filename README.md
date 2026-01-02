[![pages-build-deployment](https://github.com/Glanbia/tech-radar/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/Glanbia/tech-radar/actions/workflows/pages/pages-build-deployment)

# Glanbia Tech Radar

A modern, interactive technology radar visualization built with D3.js v7 to help engineering teams align on technology choices.

[**View the Live Radar →**](https://glanbia.github.io/tech-radar/)

## What is a Tech Radar?

At [Glanbia Business Services](https://www.glanbia.com/), we maintain a public Tech Radar to help our engineering teams align on technology choices. It provides a visual and structured way to discuss technology strategy.

This project is inspired by the [pioneering work by ThoughtWorks](https://www.thoughtworks.com/radar).

## Features

- **Modern Design**: Clean, responsive interface with smooth animations
- **D3.js v7**: Built with the latest version of D3.js for optimal performance
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Accessible**: ARIA labels and keyboard navigation support
- **Easy to Maintain**: Well-documented configuration file for quick updates
- **Interactive**: Hover effects, tooltips, and smooth transitions
- **Print-Friendly**: Optimized layout for PDF generation

## Quick Start

### Prerequisites

- Node.js 14+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/glanbia/tech-radar.git
cd tech-radar
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open your browser to `http://localhost:3000/`

## Adding or Updating Technologies

All technology entries are managed in [`docs/config.js`](/docs/config.js). The file is well-documented with clear instructions.

### Quick Guide

1. **Choose a Quadrant** (0-3):
   - 0: Languages & Frameworks
   - 1: Infrastructure & Tools
   - 2: Datastores
   - 3: Data Management

2. **Choose a Ring** (0-3):
   - 0: **ADOPT** - High confidence, widely used
   - 1: **TRIAL** - Proven success, some risk
   - 2: **ASSESS** - Promising, worth investigating
   - 3: **HOLD** - Not recommended for new projects

3. **Set Movement**:
   - `1`: Moved IN (triangle up ▲)
   - `0`: No change (circle ●)
   - `-1`: Moved OUT (triangle down ▼)

### Example Entry

```javascript
{
  quadrant: 0,              // Languages & Frameworks
  ring: 1,                  // TRIAL
  label: "New Technology",
  active: true,
  moved: 1,                 // Moved up
  link: "https://example.com"
}
```

Just add your entry to the appropriate section in `docs/config.js` - the file is organized by quadrant and ring for easy navigation.

## Project Structure

```
tech-radar/
├── docs/
│   ├── index.html      # Main HTML file with improved accessibility
│   ├── radar.js        # D3.js v7 visualization engine
│   ├── radar.css       # Modern CSS with custom properties
│   └── config.js       # Technology entries (EDIT THIS FILE)
├── package.json        # Dependencies and scripts
├── .eslintrc.json      # ESLint configuration
└── README.md          # This file
```

## Development Scripts

```bash
# Start development server (auto-reload)
npm start

# Start with browser open
npm run dev

# Run linters
npm run lint

# Fix auto-fixable linting issues
npm run lint:fix
```

## Customization

### Colors

Edit the color scheme in `docs/radar.css`:

```css
:root {
  --accent-adopt: #5ba300;   /* Green */
  --accent-trial: #009eb0;   /* Teal */
  --accent-assess: #c7ba00;  /* Yellow */
  --accent-hold: #e09b96;    /* Coral */
}
```

### Radar Configuration

Modify visualization settings in `docs/config.js`:

```javascript
radar_visualization({
  width: 1450,
  height: 1000,
  title: "Your Company Tech Radar",
  date: "2024.04",
  // ... more options
});
```

## Technology Stack

- **D3.js v7** - Data visualization
- **Vanilla JavaScript** - No framework dependencies
- **Modern CSS** - CSS Custom Properties, Grid, Flexbox
- **Browser Sync** - Development server with live reload
- **ESLint** - Code quality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

This radar includes:
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color schemes
- Semantic HTML structure
- Focus indicators

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Run linting (`npm run lint`)
5. Commit your changes (`git commit -am 'Add improvement'`)
6. Push to the branch (`git push origin feature/improvement`)
7. Create a Pull Request

## API Reference

### `radar_visualization(config)`

Renders the technology radar visualization.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `svg_id` | string | ID of the SVG element |
| `width` | number | Canvas width in pixels |
| `height` | number | Canvas height in pixels |
| `colors` | object | Color configuration |
| `title` | string | Radar title |
| `date` | string | Publication date |
| `quadrants` | array | Quadrant names (4 items) |
| `rings` | array | Ring definitions (4 items) |
| `entries` | array | Technology entries |
| `print_layout` | boolean | Enable print/legend layout |
| `links_in_new_tabs` | boolean | Open links in new tabs |

## License

MIT License - see [LICENSE.txt](LICENSE.txt)

## Credits

- Inspired by [ThoughtWorks Technology Radar](https://www.thoughtworks.com/radar)
- Built by the Glanbia Business Services Engineering Team
- Powered by [D3.js](https://d3js.org/)

## Support

For issues or questions:
- Open an issue on [GitHub](https://github.com/glanbia/tech-radar/issues)
- Contact the GBS Engineering Team

---

**Last Updated:** 2024.04
