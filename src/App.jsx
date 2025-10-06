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
  <h1 className="text-2xl font-bold" style={{ color: 'var(--bg)' }}>Hardware Store</h1>
        <nav className="flex items-center gap-4 flex-1">
          <Link to="/" className="px-4 py-2 rounded shadow transition" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>Home</Link>
          <DropdownMenu />
          <Link to="/favourites" className="px-4 py-2 rounded shadow transition" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>Favourites</Link>
          <Link to="/contacts" className="px-4 py-2 rounded shadow transition" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>Contacts</Link>
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
      <footer className="bg-gray-100 text-center p-2 text-xs text-gray-500">© 2025 Hardware Store</footer>
    </div>
  );
}

export default App;
