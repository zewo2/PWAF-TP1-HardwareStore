
import { useState, useMemo, useEffect } from 'react';
import { products } from './data.js';

function getRandomProducts(arr, n) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function Home() {
  const picks = useMemo(() => getRandomProducts(products, 9), []);
  const [favourites, setFavourites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('favourites')) || []; } catch { return []; }
  });

  useEffect(() => {
    const sync = () => {
      try { setFavourites(JSON.parse(localStorage.getItem('favourites')) || []); } catch { setFavourites([]); }
    };
    window.addEventListener('storage', sync);
    const interval = setInterval(sync, 500);
    return () => { window.removeEventListener('storage', sync); clearInterval(interval); };
  }, []);

  useEffect(() => {
    try { localStorage.setItem('favourites', JSON.stringify(favourites)); } catch (e) { console.warn(e); }
  }, [favourites]);

  const toggleFavourite = id => setFavourites(favs => favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]);
  const [start, setStart] = useState(0);
  const visible = picks.slice(start, start + 3);

  const handlePrev = () => setStart(s => Math.max(0, s - 3));
  const handleNext = () => setStart(s => Math.min(6, s + 3));

  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600 text-center mb-2">
        Welcome to the Hardware Store
      </h1>
      <p className="mt-4 text-gray-600 text-center mb-8">
        Lose yourself in our selection of powerful tech.
      </p>
      <div className="mb-4 text-2xl font-bold text-center text-gray-800">Our Picks</div>
      <div className="flex items-center justify-center gap-2">
        <button onClick={handlePrev} disabled={start === 0} className="px-2 py-1 bg-gray-200 rounded-full text-xl font-bold disabled:opacity-50">&#8592;</button>
        <div className="flex gap-6">
          {visible.map(item => (
            <div key={item.id} className="border rounded-lg p-4 shadow w-64 flex flex-col items-center cursor-pointer hover:shadow-lg transition relative">
              <button
                aria-label={favourites.includes(item.id) ? 'Remove favourite' : 'Add favourite'}
                onClick={() => toggleFavourite(item.id)}
                className={`absolute top-3 right-3 text-2xl ${favourites.includes(item.id) ? 'text-yellow-400' : 'text-gray-300 hover:text-gray-500'}`}
              >{favourites.includes(item.id) ? '★' : '☆'}</button>
              <a href={`/items/${item.id}`} style={{ textDecoration: 'none' }} className="block w-full text-center">
                <img src={item.images[0]} alt={item.name} className="h-24 w-24 object-cover rounded mb-2" />
                <div className="font-bold text-lg text-blue-700 text-center">{item.name}</div>
                <div className="text-sm text-gray-500 text-center">{item.brand} &middot; {item.type}</div>
                <div className="mt-2 text-gray-700 text-center text-sm">{item.description}</div>
                <div className="mt-2 text-blue-700 font-bold text-xl">
                  {item.discountPercent ? (
                    <>
                      <span className="line-through text-gray-400 mr-2">€{item.price.toFixed(2)}</span>
                      <span className="text-red-600 font-bold">€{(item.price * (1 - item.discountPercent / 100)).toFixed(2)}</span>
                      <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded">-{item.discountPercent}%</span>
                    </>
                  ) : (
                    <>€{item.price.toFixed(2)}</>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
        <button onClick={handleNext} disabled={start === 6} className="px-2 py-1 bg-gray-200 rounded-full text-xl font-bold disabled:opacity-50">&#8594;</button>
      </div>
    </div>
  );
}
export default Home;