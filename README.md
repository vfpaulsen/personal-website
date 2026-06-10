# Personal Portfolio Website

Personal portfolio website for Vegard Paulsen, built with React and Vite.

The site presents selected projects, contact information, a downloadable CV, and a job application tracker layout prepared for a future Google Sheets integration.

## Tech Stack

- React
- Vite
- React Router
- CSS
- ESLint

## Pages

- `Home` - Hero section, contact information, about section, and selected projects.
- `Job tracker` - A table-style job application tracker based on a Google Sheets structure.
- `Download CV` - Navbar link that downloads `public/cv.pdf`.

## Project Structure

```text
src/
  assets/          Logo and profile image assets
  components/      Navbar and footer components
  pages/           Home and job tracker pages
public/
  cv.pdf           Downloadable CV
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Google Sheets Job Tracker

The job tracker can read application rows from a published Google Sheet CSV URL.
When configured, the page refreshes the sheet data automatically every 60 seconds while the page is open.

Expected columns:

- `Applied`
- `Company`
- `Position`
- `Application Deadline`
- `Status`
- `Link`

Supported status values:

- `To apply`
- `Applied`
- `Interview`
- `Offer`
- `Hired`
- `Rejected`

Local setup:

1. Publish the Google Sheet to the web as CSV.
2. Copy `.env.example` to `.env.local`.
3. Add the published CSV URL:

```bash
VITE_APPLICATIONS_SHEET_CSV_URL="https://docs.google.com/spreadsheets/d/e/.../pub?gid=0&single=true&output=csv"
```

Vercel setup:

Add the same variable in the Vercel project settings:

```bash
VITE_APPLICATIONS_SHEET_CSV_URL
```

## Deployment

This project can be deployed on Vercel, Netlify, or any static hosting provider that supports Vite builds.

Recommended settings:

- Build command: `npm run build`
- Output directory: `dist`

## Notes

- Project entries are currently stored as local data in `src/pages/Home.jsx`.
- Job tracker rows are loaded from Google Sheets when `VITE_APPLICATIONS_SHEET_CSV_URL` is configured.
- If the sheet URL is missing or cannot be loaded, the job tracker shows an empty/error state instead of local dummy data.
- Google Sheets published CSV data can sometimes be cached by Google briefly, so updates may not always appear instantly.
