
# Hardware Store SPA

A modern, responsive single-page application for a computer hardware store, built with React, Tailwind CSS v4, and Vite. Features product browsing, cart, favourites, dark mode, and more.

## Features
- ⚡ Fast SPA with React Router
- 🛒 Client-side cart (localStorage persistence)
- ⭐ Favourites (localStorage persistence)
- 🔍 Product grid with search, filter, and discounts
- 📦 Product details with image gallery
- 🎨 Dark mode toggle and brand colors
- 🖥️ Responsive design (Tailwind CSS v4)
- 📝 Contact form with autosave (localStorage)

## Getting Started

1. **Install dependencies**
	```bash
	npm install
	```
2. **Start development server**
	```bash
	npm run dev
	```
3. **Open in browser**
	Navigate to `http://localhost:5173` (or the port shown in your terminal).

## Project Structure
```
PWAF-TP1/
├── public/
├── src/
│   ├── App.jsx
│   ├── Home.jsx
│   ├── Product.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── CartCount.jsx
│   ├── Favourites.jsx
│   ├── Contacts.jsx
│   ├── ThemeToggle.jsx
│   ├── DropdownMenu.jsx
│   ├── assets/
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization
- **Brand colors**: Easily change in `src/index.css` via CSS variables.
- **Products**: Edit or expand product data in `src/data.js`.

## Accessibility & Responsiveness
- Built with accessibility and mobile-first design in mind.
- Uses semantic HTML and ARIA roles where appropriate.

## License
MIT

---
Made for PWAF coursework, 2025.
