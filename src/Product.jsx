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
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
					{filtered.map(product => (
						<a
							key={product.id}
							href={`/items/${product.id}`}
							className="border rounded-lg p-4 shadow hover:shadow-lg transition block hover:ring-2 hover:ring-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
							tabIndex={0}
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
					))}
				</div>
			</div>
		</div>
	);
}

export default Product;
