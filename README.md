# Trend Hound — Website

Static site for trendhound.ai. Pure HTML/CSS/JS. No build step.

## Deploy

### Vercel (recommended)
1. Import this repo at vercel.com → "Add New Project".
2. Framework Preset: **Other**.
3. Build Command: *(leave blank)*.
4. Output Directory: `./`.
5. Deploy.

### Custom domain (GoDaddy → Vercel)
1. Vercel → Project → Settings → Domains → add `trendhound.ai` and `www.trendhound.ai`.
2. Vercel will show DNS records. In GoDaddy DNS Management:
   - Root `@` → A record → `76.76.21.21`
   - `www` → CNAME → `cname.vercel-dns.com`
3. Remove GoDaddy's default parking A record.
4. SSL provisions automatically. Propagation: ~5–60 min.

## Files
- `index.html` — entry point
- `site.css`, `colors_and_type.css` — styles
- `app.compiled.js`, `pages.compiled.js`, `pages2.compiled.js`, `main.compiled.js` — pre-compiled React (no in-browser Babel)
- `app.jsx`, `pages.jsx`, `pages2.jsx` — source (edit these, then re-compile)
- `fonts/` — self-hosted Outfit + Audiowide
- `assets/` — logos and brand marks

## Editing
Edit the `.jsx` files. To produce production JS, transpile with Babel:
```
npx @babel/cli --presets=@babel/preset-react app.jsx -o app.compiled.js
npx @babel/cli --presets=@babel/preset-react pages.jsx -o pages.compiled.js
npx @babel/cli --presets=@babel/preset-react pages2.jsx -o pages2.compiled.js
```

## Compliance
Trend Hound is a technology and infrastructure provider. The company does not provide brokerage, custody, investment advisory, portfolio management, or other regulated financial services.
