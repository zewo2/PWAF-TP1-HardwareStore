import { Routes, Route, Link } from 'react-router-dom';
import DropdownMenu from './components/DropdownMenu.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Product from './pages/Product.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Favourites from './pages/Favourites.jsx';
import Contacts from './pages/Contacts.jsx';
import Cart from './pages/Cart.jsx';
import CartCount from './components/CartCount.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-700 text-white p-1 px-30 flex items-center justify-between">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--bg)' }}>BuildIT</h1>
        <nav className="flex items-center gap-4 flex-1">
          <Link to="/" className="px-4 py-2 rounded shadow transition-transform duration-150 hover:scale-95 focus:scale-95" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>Home</Link>
          <DropdownMenu />
          <Link to="/favourites" className="px-4 py-2 rounded shadow transition-transform duration-150 hover:scale-95 focus:scale-95" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>Favourites</Link>
          <Link to="/contacts" className="px-4 py-2 rounded shadow transition-transform duration-150 hover:scale-95 focus:scale-95" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>Contact Us</Link>
            <Link to="/about" className="px-4 py-2 rounded shadow transition-transform duration-150 hover:scale-95 focus:scale-95" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>About Us</Link>
        </nav>
          <div className="flex items-center ml-auto">
            <ThemeToggle />
            <Link to="/cart" className="flex items-center gap-1 whitespace-nowrap px-2 py-2 rounded shadow transition-transform duration-150 hover:scale-95 focus:scale-95" style={{ background: 'var(--card)', color: 'var(--highlight)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart mr-1 shrink-0" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
              <span className="ml-1 inline-flex items-center leading-none">
                <CartCount />
              </span>
            </Link>
          </div>
      </header>
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
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
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-2 py-4">
            {/* Brand left */}
            <div className="font-bold text-lg md:text-left text-center w-full md:w-auto mb-4 md:mb-0" style={{ color: 'var(--highlight)' }}>BuildIT</div>
            {/* Contact info centered*/}
            <div className="flex-1 text-xs text-center md:text-center mb-4 md:mb-0">
              <div className="font-semibold text-sm mb-2" style={{ color: 'var(--highlight)' }}>Contact Us</div>
              <div>Email: <a href="mailto:info@hardwarestore.com" className="hover:underline text-[inherit]">info@builditstore.com</a></div>
              <div>Phone: <a href="tel:+351123456789" className="hover:underline text-[inherit]">+351 123 456 789</a></div>
              <div>Address: Rua do Computador 42, Lisboa</div>
            </div>
            {/* livro de reclamações */}
            <div className="text-xs text-center md:text-left mb-4 md:mb-0 flex flex-col items-center md:items-start gap-2">
              <div className="font-semibold text-sm mb-2" style={{ color: 'var(--highlight)' }}>Complaints Book</div>
              <div>
                To file a public complaint, please use the Electronic Complaints Book:
              </div>
              <div>
                <a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noopener noreferrer" className="text-[inherit]"><img src="https://publicitario.pt/application/files/6815/3688/0009/livro_reclamacoes-500x-207-b.png" alt="Complaints Book" className="w-48 h-16"/></a>
              </div>
            </div>
            {/* Links right*/}
            <nav className="flex flex-col gap-2 text-sm text-right w-full md:w-auto items-end">
              <div className="font-semibold text-sm mb-2" style={{ color: 'var(--highlight)' }}>Quick Links</div>
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/products" className="hover:underline">Products</Link>
              <Link to="/contacts" className="hover:underline">Contact</Link>
              <Link to="/about" className="hover:underline">About</Link>
            </nav>
          </div>
        </footer>
    </div>
  );
}

export default App;
