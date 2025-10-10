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
      className="cart-count ml-1 text-xs font-bold leading-none inline-flex items-center"
      style={{ color: 'var(--highlight)' }}
    >
      {count}
    </span>
  );
}