# CampusConnect — College Event & Club Portal

Original TY B.Sc. Computer Science academic website project.

## Run locally
1. Extract this project ZIP.
2. Open `site/index.html` in a modern browser, or serve the `site` folder with a static server.
3. Try event search, category filters, register/cancel, club join/leave, demo event creation and reset.

## Features
- Responsive desktop, tablet and mobile layout.
- Event cards with keyword search and category filtering.
- Registration list with cancellation.
- Student club join/leave interactions.
- Demo event form and reset-to-sample-data control.
- Browser localStorage persistence.

## Important scope note
This is a functional front-end prototype. Its demo state is local to the current browser profile. It does not have a server database, authenticated accounts, shared cross-device registrations, real notifications, or a protected admin panel. Do not collect sensitive information through this prototype.

## Publish online with GitHub Pages
1. Create a new GitHub repository named `campusconnect` (or another available name).
2. Upload the *contents* of the `site` folder (`index.html`, `styles.css`, `script.js`) to the repository root.
3. In the repository, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish and copy the HTTPS URL displayed in Settings → Pages.
6. Open the generated URL on a phone and laptop and test the key features.

The site is prepared for static hosting, but no public live URL is claimed in this package because deployment requires access to a hosting account. Add the actual published URL to the report only after you have verified it works.

## Files
- `site/index.html` — semantic page structure
- `site/styles.css` — responsive visual styling
- `site/script.js` — interactions and localStorage demo state
- `report_assets/` — report screenshots and diagrams
- `CampusConnect_Black_Book_Report.pdf` — detailed report
