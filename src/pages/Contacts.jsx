import { useEffect, useState } from 'react';

export default function Contacts() {
		const STORAGE_KEY = 'contactsFormData';

		const [form, setForm] = useState(() => {
			// Initialize from localStorage if available
			try {
				const saved = localStorage.getItem(STORAGE_KEY);
				if (saved) {
					const parsed = JSON.parse(saved);
					return {
						name: '',
						email: '',
						reason: '',
						message: '',
						...parsed,
					};
				}
			} catch {
				// ignore parse/storage errors and fall back to defaults
			}
			return {
				name: '',
				email: '',
				reason: '',
				message: '',
			};
		});
		const [errors, setErrors] = useState({});
		const [success, setSuccess] = useState(false);

		// Persist form to localStorage on change
		useEffect(() => {
			try {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
			} catch {
				// ignore quota/security errors silently
			}
		}, [form]);

	function validate(values) {
		const errs = {};
		if (!values.name.trim()) {
			errs.name = 'Name is required.';
		}
		if (!values.email.trim()) {
			errs.email = 'Email is required.';
		} else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
			errs.email = 'Invalid email address.';
		}
		if (!values.reason) {
			errs.reason = 'Please select a reason.';
		}
		if (!values.message.trim()) {
			errs.message = 'Message is required.';
		} else if (values.message.length > 255) {
			errs.message = 'Message must be 255 characters or less.';
		}
		return errs;
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setForm(f => ({ ...f, [name]: value }));
		// Remove error on change
		setErrors(errs => ({ ...errs, [name]: undefined }));
	}


		function handleSubmit(e) {
			e.preventDefault();
			const errs = validate(form);
			setErrors(errs);
			if (Object.keys(errs).length === 0) {
				setSuccess(true);
				setForm({ name: '', email: '', reason: '', message: '' });
				// Clear saved draft on successful submit
				try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
				// Optionally clear success after a delay
				setTimeout(() => setSuccess(false), 5000);
			} else {
				setSuccess(false);
			}
		}

	return (
		<div className="max-w-xl mx-auto p-6">
			{/* Basic contact info */}
			{/* <div className="mb-8 text-center">
				<h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--highlight)' }}>Contact Us</h2>
				<div className="text-sm mb-1">Email: <a href="mailto:info@hardwarestore.com" className="hover:underline text-[inherit]">info@hardwarestore.com</a></div>
				<div className="text-sm mb-1">Phone: <a href="tel:+351123456789" className="hover:underline text-[inherit]">+351 123 456 789</a></div>
				<div className="text-sm">Address: Rua do Computador 42, Lisboa</div>
			</div> */}
					{/* Contact form */}
					<div className="mb-2 text-center">
						<h3 className="text-xl font-semibold" style={{ color: 'var(--highlight)' }}>Have an issue or complaint?</h3>
					</div>
					<form className="bg-[var(--card)] rounded shadow p-6 flex flex-col gap-4" autoComplete="off" onSubmit={handleSubmit}>
						<h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--highlight)' }}>Send us a message</h3>
				<div>
					<label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
					<input
						id="name"
						name="name"
						type="text"
						className={`w-full rounded border px-3 py-2 bg-[var(--bg)] text-[var(--fg)] ${errors.name ? 'border-red-500' : ''}`}
						value={form.name}
						onChange={handleChange}
						required
					/>
					{errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						className={`w-full rounded border px-3 py-2 bg-[var(--bg)] text-[var(--fg)] ${errors.email ? 'border-red-500' : ''}`}
						value={form.email}
						onChange={handleChange}
						required
					/>
					{errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
				</div>
				<div>
					<label htmlFor="reason" className="block text-sm font-medium mb-1">Reason</label>
					<select
						id="reason"
						name="reason"
						className={`w-full rounded border px-3 py-2 bg-[var(--bg)] text-[var(--fg)] ${errors.reason ? 'border-red-500' : ''}`}
						value={form.reason}
						onChange={handleChange}
						required
					>
						<option value="">Select a reason...</option>
						<option value="RMA">RMA</option>
						<option value="refund">Refund</option>
						<option value="error">Error</option>
						<option value="suggestion">Suggestion</option>
					</select>
					{errors.reason && <div className="text-red-500 text-xs mt-1">{errors.reason}</div>}
				</div>
				<div>
					<label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
					<textarea
						id="message"
						name="message"
						rows={4}
						maxLength={255}
						className={`w-full rounded border px-3 py-2 bg-[var(--bg)] text-[var(--fg)] ${errors.message ? 'border-red-500' : ''}`}
						value={form.message}
						onChange={handleChange}
						required
					/>
					<div className="flex justify-between text-xs mt-1">
						<span className={errors.message ? 'text-red-500' : 'text-gray-400'}>
							{errors.message ? errors.message : `${form.message.length}/255`}
						</span>
					</div>
				</div>
						<button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition">Send</button>
					</form>
					{success && (
						<div className="mt-4 p-3 rounded bg-green-100 text-green-700 border border-green-300 text-center font-semibold">
							Message sent successfully!
						</div>
					)}
		</div>
	);
}
