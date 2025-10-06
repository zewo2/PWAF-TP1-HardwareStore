import { useEffect, useState } from 'react';
import { products } from './data.js';

function getFavouritesFromStorage() {
	try { return JSON.parse(localStorage.getItem('favourites')) || []; } catch { return []; }
}

export default function Favourites() {
	const [favourites, setFavourites] = useState(() => getFavouritesFromStorage());

	useEffect(() => {
		const sync = () => setFavourites(getFavouritesFromStorage());
		window.addEventListener('storage', sync);
		const interval = setInterval(sync, 500);
		return () => { window.removeEventListener('storage', sync); clearInterval(interval); };
	}, []);

	useEffect(() => {
		try { localStorage.setItem('favourites', JSON.stringify(favourites)); }
		catch (e) { console.warn('Could not persist favourites', e); }
	}, [favourites]);

	const favProducts = favourites.map(id => products.find(p => p.id === id)).filter(Boolean);

	const removeFavourite = id => setFavourites(favs => favs.filter(f => f !== id));

	const addToCart = id => {
		try {
			const raw = localStorage.getItem('cart');
			const cart = raw ? JSON.parse(raw) : [];
			const idx = cart.findIndex(i => i.id === id);
			if (idx > -1) cart[idx].qty += 1;
			else cart.push({ id, qty: 1 });
			localStorage.setItem('cart', JSON.stringify(cart));
			// optional: notify via storage event for other tabs
			window.dispatchEvent(new Event('storage'));
		} catch (e) { console.warn('Could not add to cart', e); }
	};

	return (
		<div className="max-w-3xl mx-auto p-4">
			<h2 className="text-2xl font-bold mb-4">Your Favourites</h2>
			{favProducts.length === 0 ? (
				<div className="text-gray-500">You have no favourites yet. Browse products and click the star to add them.</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{favProducts.map(p => (
						<div key={p.id} className="border rounded p-4 flex gap-4 items-center">
							<img src={p.images[0]} alt={p.name} className="h-20 w-20 object-cover rounded" />
							<div className="flex-1">
								<div className="font-bold">{p.name}</div>
								<div className="text-xs text-gray-500">{p.brand} &middot; {p.type}</div>
								<div className="mt-2 text-blue-700 font-bold">{p.discountPercent ? (
									<>
										<span className="line-through text-gray-400 mr-2">€{p.price.toFixed(2)}</span>
										<span className="text-red-600">€{(p.price * (1 - p.discountPercent / 100)).toFixed(2)}</span>
									</>
								) : (`€${p.price.toFixed(2)}`)}</div>
							</div>
							<div className="flex flex-col gap-2">
								<button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={() => addToCart(p.id)}>Add to cart</button>
								<button className="px-3 py-1 bg-red-100 text-red-700 rounded" onClick={() => removeFavourite(p.id)}>Remove</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
