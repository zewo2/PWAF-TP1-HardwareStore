import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const handleButtonClick = () => setOpen(o => !o);

  // Close when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full md:inline-block md:w-auto"
    >
      <button
        className="px-4 py-2 rounded shadow transition-transform duration-150 hover:scale-95 focus:scale-95 w-full md:w-auto text-left md:text-center"
        style={{ background: 'var(--card)', color: 'var(--highlight)' }}
        onClick={handleButtonClick}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Products ▾
      </button>
      {open && (
        <div
          className="absolute left-0 mt-2 w-full md:w-40 rounded shadow-lg z-10"
          style={{ background: 'var(--card)', color: 'var(--fg)' }}
        >
          <Link to="/products" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>All Products</Link>
          <Link to="/products?type=CPU" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>CPU</Link>
          <Link to="/products?type=GPU" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>GPU</Link>
          <Link to="/products?type=Motherboard" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>Motherboard</Link>
          <Link to="/products?type=RAM" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>RAM</Link>
          <Link to="/products?type=Storage" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>Storage</Link>
          <Link to="/products?type=PSU" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>PSU</Link>
          <Link to="/products?type=Case" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>Case</Link>
          <Link to="/products?type=Peripheral" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>Peripheral</Link>
        </div>
      )}
    </div>
  );
}