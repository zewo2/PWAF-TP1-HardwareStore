import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from './data.js';

function ProductDetails() {
	const [showSuccess, setShowSuccess] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();
	const product = products.find(p => p.id === Number(id));
		const [imgIdx, setImgIdx] = useState(0);
		const mainImg = product?.images?.[imgIdx] || '';
	const [favourites, setFavourites] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem('favourites')) || [];
		} catch {
			return [];
		}
	});
	
	function addToCart(productId) {
		let cart = [];
		try {
			cart = JSON.parse(localStorage.getItem('cart')) || [];
		} catch {
			cart = [];
		}
		const idx = cart.findIndex(item => item.id === productId);
		if (idx > -1) {
			cart[idx].qty += 1;
		} else {
			cart.push({ id: productId, qty: 1 });
		}
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	useEffect(() => {
		localStorage.setItem('favourites', JSON.stringify(favourites));
	}, [favourites]);

	if (!product) {
		return <div className="text-center text-red-600">Product not found.</div>;
	}

	const isFavourite = favourites.includes(product.id);

	const handleFavourite = () => {
		setFavourites(favs =>
			favs.includes(product.id)
				? favs.filter(fid => fid !== product.id)
				: [...favs, product.id]
		);
	};

		const handleAddToCart = () => {
			addToCart(product.id);
			setShowSuccess(true);
			setTimeout(() => setShowSuccess(false), 1500);
		};

			return (
				<div className="max-w-2xl mx-auto p-4">
					{/* Success Modal */}
					{showSuccess && (
						<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
							<div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg px-8 py-6 flex flex-col items-center border border-orange-400 animate-fade-in">
								<span className="text-3xl mb-2 text-green-600">✔</span>
								<span className="font-semibold text-lg text-zinc-800 dark:text-zinc-100">Added to cart!</span>
							</div>
						</div>
					)}
					<button className="mb-4 text-blue-600 underline" onClick={() => navigate('/products')}>&larr; Back</button>
					<div className="flex flex-col md:flex-row gap-6">
						<div className="flex flex-col items-center">
							<div className="relative flex items-center justify-center mb-2 group">
								<img src={mainImg} alt={product.name} className="h-86 w-86 object-cover rounded border" />
								{product.images.length > 1 && (
									<>
									<button
										className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-zinc-800/80 rounded-full p-0.5 shadow hover:bg-orange-100 dark:hover:bg-orange-900 z-10 border border-gray-300 dark:border-zinc-700 text-lg w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200"
										onClick={() => setImgIdx(i => (i - 1 + product.images.length) % product.images.length)}
										aria-label="Previous image"
									>
										&#8592;
									</button>
									<button
										className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-zinc-800/80 rounded-full p-0.5 shadow hover:bg-orange-100 dark:hover:bg-orange-900 z-10 border border-gray-300 dark:border-zinc-700 text-lg w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200"
										onClick={() => setImgIdx(i => (i + 1) % product.images.length)}
										aria-label="Next image"
									>
										&#8594;
									</button>
									</>
								)}
							</div>
							<div className="flex gap-2">
								{product.images.map((img, idx) => (
									<img
										key={idx}
										src={img}
										alt={product.name}
										className={`h-12 w-12 object-cover rounded cursor-pointer border ${imgIdx === idx ? 'border-blue-500' : ''}`}
										onClick={() => setImgIdx(idx)}
									/>
								))}
							</div>
						</div>
						<div className="flex-1">
						<h2 className="text-2xl font-bold mb-2">{product.name}</h2>
						<p className="text-sm text-gray-500 mb-1">{product.brand} &middot; {product.type}</p>
						<p className="mb-4 text-gray-700">{product.description}</p>
						<div className="mb-4">
							{product.discountPercent ? (
								<>
									<span className="line-through text-gray-400 mr-2">€{product.price.toFixed(2)}</span>
									<span className="text-red-600 font-bold text-xl">
										€{(product.price * (1 - product.discountPercent / 100)).toFixed(2)}
									</span>
									<span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded">-{product.discountPercent}%</span>
								</>
							) : (
								<span className="text-blue-700 font-bold text-xl">€{product.price.toFixed(2)}</span>
							)}
						</div>
						<div className="flex gap-4">
							<button
								className={`px-4 py-2 rounded font-bold ${isFavourite ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-700'}`}
								onClick={handleFavourite}
							>
								{isFavourite ? 'Remove Favourite' : 'Add to Favourites'}
							</button>
							<button
								className="px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700"
								onClick={handleAddToCart}
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		);
}

export default ProductDetails;
