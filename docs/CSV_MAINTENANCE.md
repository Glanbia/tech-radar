# Technology Radar CSV Maintenance Guide

## Overview

The Glanbia Tech Radar now loads technology entries from a CSV file (`technologies.csv`) for easier maintenance and updates.

## CSV File Format

The CSV file has the following columns:

```
Quadrant,Ring,Label,Active,Moved,Link
```

### Column Descriptions

1. **Quadrant** - The category of the technology:
   - `Languages & Frameworks`
   - `Infrastructure & Tools`
   - `Datastores`
   - `Data Management`

2. **Ring** - The recommendation level:
   - `ADOPT` - High confidence, widely used in production
   - `TRIAL` - Proven success, some risk
   - `ASSESS` - Promising, worth investigating
   - `HOLD` - Not recommended for new projects

3. **Label** - The name of the technology (e.g., "Python", "Azure Data Factory")

4. **Active** - Whether to display this technology (true/false)

5. **Moved** - Movement indicator:
   - `1` - Moved IN (improved position, shows triangle up ▲)
   - `0` - No change (shows circle ●)
   - `-1` - Moved OUT (downgraded, shows triangle down ▼)

6. **Link** - URL to the technology's website or documentation

## How to Update Technologies

### Adding a New Technology

Add a new line to the CSV file with all required fields:

```csv
Infrastructure & Tools,TRIAL,New Technology,true,1,https://example.com
```

### Updating an Existing Technology

1. Find the technology row in the CSV
2. Update the appropriate fields (e.g., change Ring from ASSESS to TRIAL)
3. Update the Moved field to reflect the change (1 for improvement, -1 for downgrade)
4. Save the file

### Removing a Technology

Either:
- Set `Active` to `false` to hide it while keeping the data
- Delete the entire row to remove it completely

## Example CSV Entry

```csv
Languages & Frameworks,ADOPT,Python,true,0,https://www.python.org/
```

This creates an entry for Python in the "Languages & Frameworks" quadrant, in the "ADOPT" ring, with no recent movement.

## Tips for Maintenance

1. **Always keep the header row** - The first line must be: `Quadrant,Ring,Label,Active,Moved,Link`
2. **Use commas correctly** - Don't include commas in technology names
3. **Check links** - Ensure URLs are valid and use HTTPS when possible
4. **Reset movement indicators** - After an update cycle, set all `Moved` values back to `0`
5. **Use consistent naming** - Keep quadrant and ring names exactly as specified above

## Updating the Date

The radar date is configured in `config.js`:

```javascript
date: "2026.01"  // Format: YYYY.MM
```

Update this to reflect when the radar was last updated.

## Testing Changes

After updating the CSV:

1. Start the development server: `npm start`
2. Open http://localhost:3000
3. Verify all technologies appear correctly
4. Check that links work
5. Confirm movement indicators are correct

## File Locations

- **CSV File**: `/docs/technologies.csv`
- **Configuration**: `/docs/config.js`
- **Main HTML**: `/docs/index.html`
