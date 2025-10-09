import { Routes, Route, Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu.jsx';
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import Product from './Product.jsx';
import ProductDetails from './ProductDetails.jsx';
import Favourites from './Favourites.jsx';
import Contacts from './Contacts.jsx';
import Cart from './Cart.jsx';
import CartCount from './CartCount.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-700 text-white p-4 flex items-center justify-between">
  <h1 className="text-2xl font-bold" style={{ color: 'var(--bg)' }}>BuildIT</h1>
        <nav className="flex items-center gap-4 flex-1">
          <Link to="/" className="px-4 py-2 rounded shadow transition-transform duration-150 hover:scale-95 focus:scale-95" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>Home</Link>
          <DropdownMenu />
          <Link to="/favourites" className="px-4 py-2 rounded shadow transition-transform duration-150 hover:scale-95 focus:scale-95" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>Favourites</Link>
          <Link to="/contacts" className="px-4 py-2 rounded shadow transition-transform duration-150 hover:scale-95 focus:scale-95" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>Contacts</Link>
            <Link to="/about" className="px-4 py-2 rounded shadow transition-transform duration-150 hover:scale-95 focus:scale-95" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>About Us</Link>
        </nav>
        <div className="flex items-center ml-auto">
          <ThemeToggle />
          <Link to="/cart" className="hover:underline flex items-center px-4 py-2 rounded shadow transition" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="var(--highlight)" viewBox="0 0 24 24" width="24" height="24" className="mr-1">
              <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm1.447-2.105l1.553-9.895h-17v2h2l3.6 7.59-1.35 2.44c-.16.28-.25.61-.25.96 0 1.104.896 2 2 2h12v-2h-11.42c-.14 0-.25-.11-.25-.25s.11-.25.25-.25h11.42c.14 0 .25.11.25.25s-.11.25-.25.25h-11.42c-.14 0-.25-.11-.25-.25s.11-.25.25-.25h11.42c.14 0 .25.11.25.25s-.11.25-.25.25h-11.42c-.14 0-.25-.11-.25-.25s.11-.25.25-.25h11.42c.14 0 .25.11.25.25s-.11.25-.25.25h-11.42c-.14 0-.25-.11-.25-.25s.11-.25.25-.25h11.42c.14 0 .25.11.25.25s-.11.25-.25.25h-11.42c-.14 0-.25-.11-.25-.25s.11-.25.25-.25h11.42c.14 0 .25.11.25.25s-.11.25-.25.25h-11.42c-.14 0-.25-.11-.25-.25s.11-.25.25-.25h11.42c.14 0 .25.11.25.25s-.11.25-.25.25h-11.42c-.14 0-.25-.11-.25-.25s.11-.25.25-.25h11.42c.14 0 .25.11.25.25s-.11.25-.25.25h-11.42c-.14 0-.25-.11-.25-.25s.11-.25.25-.25h11.42c.14 0 .25.11.25.25s-.11.25-.25.25z"/>
            </svg>
            <CartCount />
          </Link>
        </div>
      </header>
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Product />} />
          <Route path="/items/:id" element={<ProductDetails />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
        <footer
          className="flex-none"
          style={{ background: 'var(--card)', color: 'var(--fg)', minHeight: '64px' }}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-4 py-4">
            {/* Brand left */}
            <div className="font-bold text-lg md:text-left text-center w-full md:w-auto mb-4 md:mb-0" style={{ color: 'var(--highlight)' }}>BuildIT</div>
            {/* Contact info centered*/}
            <div className="flex-1 text-xs text-center md:text-center mb-4 md:mb-0">
              <div className="font-semibold text-sm mb-2" style={{ color: 'var(--highlight)' }}>Contact Us</div>
              <div>Email: <a href="mailto:info@hardwarestore.com" className="hover:underline text-[inherit]">info@builditstore.com</a></div>
              <div>Phone: <a href="tel:+351123456789" className="hover:underline text-[inherit]">+351 123 456 789</a></div>
              <div>Address: Rua do Computador 42, Lisboa</div>
            </div>
            {/* Links right*/}
            <nav className="flex flex-col gap-2 text-sm text-right w-full md:w-auto items-end">
              <div className="font-semibold text-sm mb-2" style={{ color: 'var(--highlight)' }}>Quick Links</div>
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/items" className="hover:underline">Products</Link>
              <Link to="/contacts" className="hover:underline">Contact</Link>
              <Link to="/about" className="hover:underline">About</Link>
            </nav>
          </div>
        </footer>
    </div>
  );
}

export default App;
