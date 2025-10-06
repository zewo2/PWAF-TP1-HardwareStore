import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from './data.js';

const productTypes = [...new Set(products.map(p => p.type))];

function Product() {
	const [search, setSearch] = useState('');
	const [type, setType] = useState('');
	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const typeParam = params.get('type');
		if (typeParam && productTypes.includes(typeParam)) {
			setType(typeParam);
		} else if (!typeParam) {
			setType('');
			setSearch('');
			setSort('none');
		}
	}, [location.search]);
	const [sort, setSort] = useState('none');

	// favourites state persisted in localStorage
	const [favourites, setFavourites] = useState(() => {
		try { return JSON.parse(localStorage.getItem('favourites')) || []; } catch { return []; }
	});

	useEffect(() => {
		const syncFavourites = () => setFavourites(() => {
			try { return JSON.parse(localStorage.getItem('favourites')) || []; } catch { return []; }
		});
		window.addEventListener('storage', syncFavourites);
		const interval = setInterval(syncFavourites, 500);
		return () => { window.removeEventListener('storage', syncFavourites); clearInterval(interval); };
	}, []);

	useEffect(() => {
		try { localStorage.setItem('favourites', JSON.stringify(favourites)); }
		catch (e) { console.warn('Could not persist favourites', e); }
	}, [favourites]);

	const toggleFavourite = id => setFavourites(favs => favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]);

	let filtered = products.filter(p =>
		(p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase())) &&
		(type ? p.type === type : true)
	);

	if (sort !== 'none') {
		filtered = [...filtered].sort((a, b) => {
			const getPrice = p => p.discountPercent ? p.price * (1 - p.discountPercent / 100) : p.price;
			if (sort === 'asc') return getPrice(a) - getPrice(b);
			if (sort === 'desc') return getPrice(b) - getPrice(a);
			return 0;
		});
	}

	return (
		<div>
			<div className="flex flex-col md:flex-row gap-4 mb-6">
				<input
					type="text"
					placeholder="Search by name or brand..."
					value={search}
					onChange={e => setSearch(e.target.value)}
					className="border p-2 rounded w-full md:w-1/2"
				/>
				<select
					value={type}
					onChange={e => setType(e.target.value)}
					className="border p-2 rounded w-full md:w-1/4"
				>
					<option value="">All Types</option>
					{productTypes.map(t => (
						<option key={t} value={t}>{t}</option>
					))}
				</select>
				<select
					value={sort}
					onChange={e => setSort(e.target.value)}
					className="border p-2 rounded w-full md:w-1/4"
				>
					<option value="none">Sort by Price</option>
					<option value="asc">Lowest First</option>
					<option value="desc">Highest First</option>
				</select>
			</div>
			<div className="min-h-[60vh] flex justify-center">
				<div className="product-grid w-full">
					{filtered.map(product => (
						<article key={product.id} className="product-card card-soft relative">
							<button
								aria-label={favourites.includes(product.id) ? 'Remove favourite' : 'Add favourite'}
								onClick={() => toggleFavourite(product.id)}
								className={`star-hit absolute top-3 right-3 focus:outline-none ${favourites.includes(product.id) ? 'star-on' : 'star-off'}`}
							>
								{favourites.includes(product.id) ? '★' : '☆'}
							</button>
							<a href={`/items/${product.id}`} className="block focus:ring-2 focus:ring-blue-400 outline-none" tabIndex={0}>
								<div className="mb-2 flex justify-center">
									<img src={product.images[0]} alt={product.name} className="h-24 w-24 object-cover product-image" />
								</div>
								<h2 className="text-lg font-bold product-title">{product.name}</h2>
								<p className="text-sm text-gray-500 product-meta">{product.brand} &middot; {product.type}</p>
								<p className="mt-2 text-gray-700">{product.description}</p>
								<div className="mt-2 price text-xl">
									{product.discountPercent ? (
										<>
											<span className="old">€{product.price.toFixed(2)}</span>
											<span>€{(product.price * (1 - product.discountPercent / 100)).toFixed(2)}</span>
										</>
									) : (
										<>€{product.price.toFixed(2)}</>
									)}
								</div>
							</a>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}

export default Product;
