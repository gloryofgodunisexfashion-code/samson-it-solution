# SAMSON IT SOLUTION — Portfolio Prototype

A responsive, animated React + Vite portfolio prototype.

## Included
- Responsive landing page and mobile navigation
- Services, sample project concepts, about, reviews and contact sections
- Motion effects with reduced-motion accessibility support
- Front-end-only review and enquiry interactions (not connected to a server yet)
- Railway-friendly Vite host configuration

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Railway deployment
- Build command: `npm run build`
- Start command: `npm run preview -- --host 0.0.0.0 --port $PORT`
- After deploy, generate a public domain in Railway service networking settings.

## Prototype notes
- Project cards are sample visual concepts, not claimed client work.
- No fabricated testimonials are included.
- Review and contact forms are demo-only; submissions are not saved or sent to a server.
- Next phase: add a secure private admin area and database for managing content, projects, images, enquiries and moderated reviews.
- Replace placeholder contact and social links before launch.
