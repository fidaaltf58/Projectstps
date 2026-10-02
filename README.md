# Shoppify: React + Bootstrap Lab Project

**Shoppify** is a starter project from practical lab sessions (*TPs*) on building a front-end with **React 18**, **Vite**, and **React-Bootstrap**. It is the base for a small shopping web app.

> **Status:** early scaffold. The project is set up with Vite, React, and Bootstrap and renders a Bootstrap navbar. The shop pages are not built yet.

---

## Tech stack

| | |
|---|---|
| UI library | React 18 |
| Build tool | Vite 5 (with `@vitejs/plugin-react`) |
| Styling / components | Bootstrap 5.3 + React-Bootstrap 2 |
| Linting | ESLint 9 (react, react-hooks, react-refresh plugins) |

## Getting started

### Prerequisites
- Node.js 18+
- npm

### Install and run

```bash
git clone https://github.com/fidaaltf58/Projectstps.git
cd Projectstps
npm install
npm run dev
```

Then open <http://localhost:5173>.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
Projectstps/
├── index.html
├── public/
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Root component (Bootstrap navbar)
│   ├── App.css
│   ├── index.css
│   ├── Components/
│   │   └── Navbar.jsx      # Navbar component (placeholder)
│   └── assets/
├── vite.config.js
└── eslint.config.js
```

## Next steps

- [ ] Product listing page with React-Bootstrap `Card`s
- [ ] Product details page
- [ ] Shopping cart with state management
- [ ] Routing with `react-router-dom`

## Author

**Fidaa Letaief** · [@fidaaltf58](https://github.com/fidaaltf58)
