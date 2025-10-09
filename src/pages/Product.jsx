import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from './data.js';
import { getFavourites } from './utils.js';

const productTypes = [
	'CPU',
	'GPU',
	'Motherboard',
	'RAM',
	'Storage',
	'PSU',
	'Case',
	'Peripheral'
];


function Product() {
	const [search, setSearch] = useState('');
	const [type, setType] = useState('');
	const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
	const [sort, setSort] = useState('none');
	const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
	const [favs, setFavs] = useState(getFavourites());
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

	function toggleFavourite(id) {
		let updated;
		if (favs.includes(id)) {
			updated = favs.filter(fid => fid !== id);
		} else {
			updated = [...favs, id];
		}
		setFavs(updated);
		localStorage.setItem('favourites', JSON.stringify(updated));
	}

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
			<div className="max-w-5xl mx-auto p-4">
				<div className="flex flex-col md:flex-row gap-4 mb-6">
					<input
						type="text"
						placeholder="Search by name or brand..."
						value={search}
						onChange={e => setSearch(e.target.value)}
						className="border p-2 rounded w-full md:w-1/2"
					/>
					<div className="relative w-full md:w-1/4">
						<button
							type="button"
							className="border p-2 rounded w-full text-left flex justify-between items-center"
							style={{ background: 'var(--card)', color: 'var(--fg)' }}
							onClick={() => setTypeDropdownOpen(o => !o)}
						>
							{type || 'All Products'}
							<span className="ml-2">▾</span>
						</button>
						{typeDropdownOpen && (
							<div className="absolute left-0 mt-1 w-full rounded shadow-lg z-30" style={{ background: 'var(--card)', color: 'var(--fg)' }}>
								<div
									className={`px-4 py-2 cursor-pointer hover:bg-orange-200 rounded ${type === '' ? 'font-bold' : ''}`}
									onClick={() => { setType(''); setTypeDropdownOpen(false); }}
								>All Products</div>
								{productTypes.map(t => (
									<div
										key={t}
										className={`px-4 py-2 cursor-pointer hover:bg-orange-200 rounded ${type === t ? 'font-bold' : ''}`}
										onClick={() => { setType(t); setTypeDropdownOpen(false); }}
									>{t}</div>
								))}
							</div>
						)}
					</div>
					<div className="relative w-full md:w-1/4">
						<button
							type="button"
							className="border p-2 rounded w-full text-left flex justify-between items-center"
							style={{ background: 'var(--card)', color: 'var(--fg)' }}
							onClick={() => setSortDropdownOpen(o => !o)}
						>
							{sort === 'none' ? 'Sort by Price' : sort === 'asc' ? 'Lowest First' : 'Highest First'}
							<span className="ml-2">▾</span>
						</button>
						{sortDropdownOpen && (
							<div className="absolute left-0 mt-1 w-full rounded shadow-lg z-30" style={{ background: 'var(--card)', color: 'var(--fg)' }}>
								<div
									className={`px-4 py-2 cursor-pointer hover:bg-orange-200 rounded ${sort === 'none' ? 'font-bold' : ''}`}
									onClick={() => { setSort('none'); setSortDropdownOpen(false); }}
								>Sort by Price</div>
								<div
									className={`px-4 py-2 cursor-pointer hover:bg-orange-200 rounded ${sort === 'asc' ? 'font-bold' : ''}`}
									onClick={() => { setSort('asc'); setSortDropdownOpen(false); }}
								>Lowest First</div>
								<div
									className={`px-4 py-2 cursor-pointer hover:bg-orange-200 rounded ${sort === 'desc' ? 'font-bold' : ''}`}
									onClick={() => { setSort('desc'); setSortDropdownOpen(false); }}
								>Highest First</div>
							</div>
						)}
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
					{filtered.map(product => (
						<div
							key={product.id}
							className="border border-orange-400 rounded-lg p-4 shadow cursor-pointer hover:ring-2 hover:ring-orange-400 hover:shadow-lg transition relative group bg-[var(--card)]"
						>
							<button
								className="absolute top-2 right-2 text-yellow-400 hover:text-yellow-500 text-xl z-0 opacity-80 group-hover:opacity-100 focus:opacity-100 transition"
								title={favs.includes(product.id) ? 'Remove from favourites' : 'Add to favourites'}
								onClick={e => { e.stopPropagation(); e.preventDefault(); toggleFavourite(product.id); }}
								tabIndex={0}
							>
								{favs.includes(product.id) ? '★' : '☆'}
							</button>
							<a
								href={`/items/${product.id}`}
								className="block outline-none"
								tabIndex={-1}
							>
								<div className="mb-2 flex justify-center">
									<img src={product.images[0]} alt={product.name} className="h-24 w-24 object-cover rounded" />
								</div>
								<h2 className="text-lg font-bold">{product.name}</h2>
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

export default Product;
