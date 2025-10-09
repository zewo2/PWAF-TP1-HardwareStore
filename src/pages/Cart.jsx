import { useState, useEffect } from 'react';
import { products } from './data.js';

function getCartFromStorage() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch {
    return [];
  }
}

export default function Cart() {
  const [checkoutMsg, setCheckoutMsg] = useState('');
  const [cart, setCart] = useState(() => getCartFromStorage());

  useEffect(() => {
    const syncCart = () => setCart(getCartFromStorage());
    window.addEventListener('storage', syncCart);
    const interval = setInterval(syncCart, 500);
    return () => {
      window.removeEventListener('storage', syncCart);
      clearInterval(interval);
    };
  }, []);

  const cartItems = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return product ? { ...product, qty: item.qty } : null;
  }).filter(Boolean);

  function updateCart(newCart) {
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  }

  const handleRemove = id => {
    const newCart = cart.filter(item => item.id !== id);
    updateCart(newCart);
  };

  const handleAdd = id => {
    const idx = cart.findIndex(item => item.id === id);
    let newCart;
    if (idx > -1) {
      newCart = [...cart];
      newCart[idx].qty += 1;
    } else {
      newCart = [...cart, { id, qty: 1 }];
    }
    updateCart(newCart);
  };

  const handleSubtract = id => {
    const idx = cart.findIndex(item => item.id === id);
    let newCart = [...cart];
    if (idx > -1) {
      if (newCart[idx].qty > 1) {
        newCart[idx].qty -= 1;
      } else {
        newCart = newCart.filter(item => item.id !== id);
      }
      updateCart(newCart);
    }
  };

  const handleClear = () => {
    updateCart([]);
    setCheckoutMsg('');
  };

  const handleCheckout = () => {
    updateCart([]);
    setCheckoutMsg('Checkout successful! Thank you for your purchase.');
  };

  const total = cartItems.reduce((sum, item) => {
    const price = item.discountPercent ? item.price * (1 - item.discountPercent / 100) : item.price;
    return sum + price * item.qty;
  }, 0);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-gray-500">Your cart is empty.</div>
      ) : (
        <table className="w-full mb-4 border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Product</th>
              <th className="p-2">Qty</th>
              <th className="p-2">Price</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id} className="border-t">
                <td className="p-2">
                  <div className="font-bold">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.brand} &middot; {item.type}</div>
                </td>
                <td className="p-2 text-center">{item.qty}</td>
                <td className="p-2 text-right">€{((item.discountPercent ? item.price * (1 - item.discountPercent / 100) : item.price) * item.qty).toFixed(2)}</td>
                <td className="p-2 text-center">
                  <button className="px-2 py-1 bg-blue-100 rounded mr-1" onClick={() => handleAdd(item.id)}>+</button>
                  <button className="px-2 py-1 bg-blue-100 rounded mr-1" onClick={() => handleSubtract(item.id)}>-</button>
                  <button className="px-2 py-1 bg-red-100 rounded" onClick={() => handleRemove(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="mb-4 font-bold text-lg">Total: €{total.toFixed(2)}</div>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-green-600 text-white rounded font-bold" onClick={handleCheckout} disabled={cartItems.length === 0}>Checkout</button>
        <button className="px-4 py-2 bg-gray-300 rounded font-bold" onClick={handleClear} disabled={cartItems.length === 0}>Clear Cart</button>
      </div>
      {checkoutMsg && <div className="mt-4 text-green-600 font-bold">{checkoutMsg}</div>}
    </div>
  );
}
