import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 100);
  };

  const handleButtonClick = () => {
    setOpen(o => !o);
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="hover:underline focus:outline-none" onClick={handleButtonClick} aria-haspopup="true" aria-expanded={open}>Products ▾</button>
      {open && (
        <div
          className="absolute left-0 mt-2 w-40 rounded shadow-lg z-10"
          style={{ background: 'var(--card)', color: 'var(--fg)' }}
        >
          <Link to="/items" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>All Products</Link>
          <Link to="/items?type=CPU" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>CPU</Link>
          <Link to="/items?type=GPU" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>GPU</Link>
          <Link to="/items?type=Motherboard" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>Motherboard</Link>
          <Link to="/items?type=RAM" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>RAM</Link>
          <Link to="/items?type=Storage" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>Storage</Link>
          <Link to="/items?type=PSU" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>PSU</Link>
          <Link to="/items?type=Case" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>Case</Link>
          <Link to="/items?type=Peripheral" className="block px-4 py-2 hover:bg-orange-100" onClick={() => setOpen(false)}>Peripheral</Link>
        </div>
      )}
    </div>
  );
}