import { useEffect, useState } from 'react';
import { products } from './data.js';
import { getFavourites } from './utils.js';

export default function Favourites() {
	const [favs, setFavs] = useState([]);

	useEffect(() => {
		setFavs(getFavourites());
	}, []);

	const favProducts = products.filter(p => favs.includes(p.id));

	function removeFavourite(id) {
		const updated = favs.filter(fid => fid !== id);
		setFavs(updated);
		localStorage.setItem('favourites', JSON.stringify(updated));
	}

	if (!favProducts.length) {
		return <div className="text-center p-8 text-gray-500">No favourites yet. Add some from the products page!</div>;
	}

	return (
		<div className="max-w-5xl mx-auto p-4">
			<h2 className="text-2xl text-center font-bold mb-6" style={{ color: 'var(--highlight)' }}>Your Favourites</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{favProducts.map(product => (
							<div key={product.id} className="favourite-card border border-orange-400 rounded-lg p-4 shadow cursor-pointer hover:ring-2 hover:ring-orange-400 hover:shadow-lg transition relative group bg-[var(--card)]">
								<button
									className="absolute top-2 right-2 text-yellow-400 hover:text-yellow-500 text-xl z-0"
									title="Remove from favourites"
									onClick={e => { e.stopPropagation(); e.preventDefault(); removeFavourite(product.id); }}
								>
									★
								</button>
								<a
									href={`/products/${product.id}`}
									className="block outline-none rounded"
									tabIndex={-1}
									style={{ textDecoration: 'none' }}
								>
									<div className="mb-2 flex justify-center">
										<img src={product.images[0]} alt={product.name} className="h-48 w-48 object-cover rounded" />
									</div>
									<h3 className="text-lg font-bold">{product.name}</h3>
									<p className="text-sm text-gray-500">{product.brand} &middot; {product.type}</p>
									<p className="mt-2 text-gray-700">{product.description}</p>
									<div className="mt-2 text-blue-700 font-bold text-xl">
										{product.discountPercent ? (
											<>
												<span className="line-through text-gray-400 mr-2">€{product.price.toFixed(2)}</span>
												<span className="text-red-600 font-bold">
													€{(product.price * (1 - product.discountPercent / 100)).toFixed(2)}
												</span>
												<span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded">-{product.discountPercent}%</span>
											</>
										) : (
											<>€{product.price.toFixed(2)}</>
										)}
									</div>
								</a>
							</div>
						))}
			</div>
		</div>
	);
}
