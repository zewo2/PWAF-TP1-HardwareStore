

# BuildIT Hardware Store SPA


A modern, responsive single-page application for a computer hardware store, built with React, Tailwind CSS v4, and Vite. Features product browsing, cart, favourites, dark mode, custom dropdowns, and more. Branded as BuildIT.


## Features
- ⚡ Fast SPA with React Router
- 🛒 Client-side cart (localStorage persistence)
- ⭐ Favourites (localStorage persistence)
- 🔍 Product grid with search, filter, and discounts
- 📦 Product details with image gallery
- 🎨 Dark mode toggle and brand colors
- 🖥️ Responsive design (Tailwind CSS v4)
- 📝 Contact form with custom validation
- ⭐ Quick favourite toggle on product cards
- 📄 About Us page

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
│   │   └── data.js
│   ├── assets/
│   │   └── react.svg
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```


## Customization
- **Brand colors**: Easily change in `src/styles/index.css` via CSS variables.
- **Products**: Edit or expand product data in `src/pages/data.js`.


## Accessibility & Responsiveness
- Built with accessibility in mind.
- Uses semantic HTML and ARIA roles where appropriate.

## License
MIT

---

Made for PWAF coursework, 2025. Branded as BuildIT.
