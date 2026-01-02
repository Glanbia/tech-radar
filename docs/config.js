/**
 * GLANBIA TECHNOLOGY RADAR CONFIGURATION
 * ======================================
 *
 * This configuration now loads technology entries from technologies.csv
 * for easier maintenance and updates.
 *
 * CSV FORMAT:
 * Quadrant,Ring,Label,Active,Moved,Link
 *
 * QUADRANTS:
 * - Languages & Frameworks
 * - Infrastructure & Tools
 * - Datastores
 * - Data Management
 *
 * RINGS:
 * - ADOPT: High confidence, widely used
 * - TRIAL: Proven success, some risk
 * - ASSESS: Promising, worth investigating
 * - HOLD: Not recommended for new projects
 *
 * MOVEMENT:
 * - 1: Moved IN (improved position, triangle up ▲)
 * - 0: No change (circle ●)
 * - -1: Moved OUT (downgraded, triangle down ▼)
 */

// =============================================================================
// CSV LOADER
// =============================================================================

/**
 * Parses CSV data and converts it to radar entries
 */
function parseCSV(csvText) {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',');

  // Define quadrant and ring mappings
  const quadrantMap = {
    'Languages & Frameworks': 0,
    'Infrastructure & Tools': 1,
    'Datastores': 2,
    'Data Management': 3
  };

  const ringMap = {
    'ADOPT': 0,
    'TRIAL': 1,
    'ASSESS': 2,
    'HOLD': 3
  };

  const entries = [];

  // Skip header row and process data rows
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = line.split(',');

    const entry = {
      quadrant: quadrantMap[values[0]],
      ring: ringMap[values[1]],
      label: values[2],
      active: values[3] === 'true',
      moved: parseInt(values[4]),
      link: values[5] || ''
    };

    entries.push(entry);
  }

  return entries;
}

/**
 * Loads technologies from CSV file
 */
async function loadTechnologies() {
  try {
    const response = await fetch('technologies.csv');
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error('Error loading technologies.csv:', error);
    return [];
  }
}

// =============================================================================
// RADAR INITIALIZATION
// =============================================================================

/**
 * Initialize the radar visualization
 */
async function initializeRadar() {
  const entries = await loadTechnologies();

  radar_visualization({
    svg_id: "radar",
    width: 1450,
    height: 1000,

    // Color scheme
    colors: {
      background: "#0a0e1a",
      grid: "#2a3040",
      inactive: "#ddd"
    },

    // Radar metadata
    title: "Glanbia Tech Radar",
    date: "2026.01",

    // Quadrant names (clockwise from bottom-right)
    quadrants: [
      { name: "Languages & Frameworks" },
      { name: "Infrastructure & Tools" },
      { name: "Datastores" },
      { name: "Data Management" }
    ],

    // Ring definitions (from center outward)
    rings: [
      { name: "ADOPT", color: "#5ba300" },
      { name: "TRIAL", color: "#009eb0" },
      { name: "ASSESS", color: "#c7ba00" },
      { name: "HOLD", color: "#e09b96" }
    ],

    print_layout: true,
    links_in_new_tabs: true,

    // Technology entries loaded from CSV
    entries: entries
  });
}

// Initialize the radar when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeRadar);
} else {
  initializeRadar();
}
