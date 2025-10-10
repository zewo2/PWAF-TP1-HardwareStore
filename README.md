

# BuildIT Hardware Store SPA

Modern, responsive single-page application for a computer hardware store, built with React, Tailwind CSS v4, and Vite. Includes product browsing, cart, favourites, dark mode, a contact form with validation and draft persistence, and more.


## Features
- ⚡ Fast SPA using React 19 + React Router 7
- 🛒 Client-side cart (localStorage persistence)
- ⭐ Favourites list (localStorage persistence)
- 🔍 Product grid with search, type filter, and price sorting (with discount display)
- 📦 Product details with image gallery, add-to-cart and favourite toggle
- 🎨 Dark mode toggle and brand colors
- 🖥️ Responsive design (Tailwind CSS v4)
- 📝 Contact form with validation + draft auto-save (localStorage) and clear on successful submit
- ⬇️ Products dropdown with click-to-open and outside-click close
- � Footer includes a link to the official Electronic Complaints Book
- 🧭 Home carousel with mobile-friendly centered nav arrows

## Getting Started

Prerequisites:
- Node.js 18+ (Node 20+ recommended)

1) Install dependencies

```powershell
npm install
```

2) Start the development server

```powershell
npm run dev
```

3) Open in your browser

Navigate to http://localhost:5173 (or the port shown in the terminal).


## Project Structure
```
PWAF-TP1/
├── public/
├── src/
│   ├── components/
│   │   ├── CartCount.jsx
│   │   ├── DropdownMenu.jsx
│   │   └── ThemeToggle.jsx
│   ├── pages/
│   │   ├── AboutUs.jsx
│   │   ├── Cart.jsx
│   │   ├── Contacts.jsx
│   │   ├── Favourites.jsx
│   │   ├── Home.jsx
│   │   ├── Product.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── utils.js
│   │   └── data.js
│   ├── assets/
│   │   ├── main_logo.png
│   │   └── small_logo.png
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```


## Customization
- Brand colors: change in `src/styles/index.css` via CSS variables (`--bg`, `--fg`, `--card`, `--highlight`, etc.).
- Products: edit or expand product data in `src/pages/data.js`.
- Footer: Complaints Book link is configurable in `src/App.jsx`.

## Routes
- `/` — Home (carousel)
- `/products` — Product listing (search, filter, sort)
- `/products/:id` — Product details
- `/favourites` — Favourites list
- `/contacts` — Contact form
- `/about` — About page
- `/cart` — Cart

## LocalStorage keys
- `cart`: array of items `{ id, qty }`
- `favourites`: array of product ids
- `theme`: "light" | "dark"
- `contactsFormData`: draft of the contact form `{ name, email, reason, message }` (cleared on successful submit)


## Accessibility & Responsiveness
- Uses semantic HTML and ARIA where appropriate.
- Mobile layout tuned for header, dropdowns, product cards, and carousel arrow placement.

## Scripts
- `npm run dev` — Start Vite dev server
- `npm run build` — Production build
- `npm run preview` — Preview the production build
- `npm run lint` — Lint the project

## License
MIT

---

Made for PWAF coursework, 2025. Branded as BuildIT.
