import { useEffect, useState } from 'react';

export default function CartCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function updateCount() {
      try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
        setCount(total);
      } catch {
        setCount(0);
      }
    }
    updateCount();
    window.addEventListener('storage', updateCount);
    return () => window.removeEventListener('storage', updateCount);
  }, []);

  // Also update on interval for local changes
  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
        setCount(total);
      } catch {
        setCount(0);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="ml-1 rounded-full px-2 py-0.5 text-xs font-bold"
      style={{ background: 'var(--card)', color: 'var(--highlight)' }}
    >
      {count}
    </span>
  );
}