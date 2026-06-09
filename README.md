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

## Deployment

This project can be deployed on Vercel, Netlify, or any static hosting provider that supports Vite builds.

Recommended settings:

- Build command: `npm run build`
- Output directory: `dist`

## Notes

- Project entries are currently stored as local data in `src/pages/Home.jsx`.
- Job tracker rows are currently dummy data in `src/pages/Applications.jsx`.
- The job tracker is designed to match a future Google Sheets integration with columns for applied date, company, position, deadline, status, and link.
