export default function AboutUs() {
	return (
		<div className="max-w-3xl mx-auto p-6 bg-[var(--card)] rounded shadow">
			<h2 className="text-3xl font-bold mb-4 text-center" style={{ color: 'var(--highlight)' }}>About BuildIT</h2>
			<p className="mb-4 text-lg text-center text-[var(--fg)]">
			BuildIT is your trusted source for the latest and greatest in computer hardware, peripherals, and accessories. We are passionate about technology and dedicated to helping you build, upgrade, and enjoy your dream PC setup.
			</p>
			<div className="mb-6 text-center">
				<span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">Serving tech enthusiasts since 2022</span>
			</div>
			<h3 className="text-xl text-center font-semibold mb-2" style={{ color: 'var(--highlight)' }}>Our Team</h3>
			<ul className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
				<li className="bg-white/10 rounded p-4 shadow w-full sm:w-1/3 text-center">
					<div className="font-bold text-lg">Bimg Bomss</div>
					<div className="text-sm text-gray-500">Founder &amp; Hardware Expert</div>
				</li>
				<li className="bg-white/10 rounded p-4 shadow w-full sm:w-1/3 text-center">
					<div className="font-bold text-lg">DMPL</div>
					<div className="text-sm text-gray-500">Customer Support</div>
				</li>
				<li className="bg-white/10 rounded p-4 shadow w-full sm:w-1/3 text-center">
					<div className="font-bold text-lg">Gonçalo Pinto</div>
					<div className="text-sm text-gray-500">Web Developer</div>
				</li>
			</ul>
			<div className="text-center text-sm text-gray-500 mt-6">
			Rua do Computador 42, Lisboa &middot; info@builditstore.com &middot; +351 123 456 789
			</div>
		</div>
	);
}
