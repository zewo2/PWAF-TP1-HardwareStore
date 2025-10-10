import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto text-center py-20">
      <h2 className="text-4xl font-extrabold mb-4" style={{ color: 'var(--highlight)' }}>404 — Page not found</h2>
      <p className="text-lg mb-6">Sorry, we couldn't find the page you're looking for.</p>
      <div className="flex items-center justify-center gap-3">
        <Link to="/" className="px-4 py-2 rounded bg-blue-600 text-white">Go to Home</Link>
        <Link to="/products" className="px-4 py-2 rounded bg-gray-200">Browse Products</Link>
      </div>
    </div>
  );
}
