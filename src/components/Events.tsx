const Events = () => {
	const services = [
		{
			number: '01',
			title: 'Program Akademik',
			description:
				'Program akademik unggulan dengan kurikulum nasional dan internasional yang dirancang untuk mengembangkan potensi akademik siswa secara maksimal dengan pendekatan pembelajaran yang inovatif dan menyenangkan.',
			featured: true,
		},
		{
			number: '02',
			title: 'Ekstrakurikuler',
			description:
				'Beragam kegiatan ekstrakurikuler yang mengembangkan bakat dan minat siswa, mulai dari olahraga, seni, teknologi hingga kepemimpinan untuk membentuk karakter yang berimbang.',
			featured: false,
		},
		{
			number: '03',
			title: 'Pembinaan Karakter',
			description:
				'Program pembinaan karakter yang komprehensif untuk membentuk siswa yang berakhlak mulia, berjiwa pemimpin, dan memiliki kepedulian sosial yang tinggi terhadap lingkungan sekitar.',
			featured: false,
		},
		{
			number: '04',
			title: 'Teknologi Pembelajaran',
			description:
				'Integrasi teknologi modern dalam proses pembelajaran dengan smart classroom, e-learning platform, dan perangkat digital terdepan untuk meningkatkan efektivitas belajar mengajar.',
			featured: false,
		},
		{
			number: '05',
			title: 'Bimbingan Konseling',
			description:
				'Layanan bimbingan konseling profesional untuk mendukung perkembangan psikologis dan akademik siswa, membantu mengatasi berbagai tantangan dalam proses pembelajaran.',
			featured: false,
		},
		{
			number: '06',
			title: 'Persiapan Universitas',
			description:
				'Program khusus persiapan masuk universitas terbaik dalam dan luar negeri dengan bimbingan intensif, tes simulasi, dan konsultasi pemilihan jurusan yang tepat.',
			featured: false,
		},
	];

	return (
		<div className='max-w-7xl mx-auto'>
			{/* Header Section */}
			<div className='mb-10'>
				<h1 className='text-5xl font-bold text-slate-900 mb-6'>Layanan</h1>
			</div>

			{/* Services Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{services.map((service, index) => (
					<div
						key={index}
						className={`rounded-3xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${
							service.featured
								? 'bg-slate-900 text-white'
								: 'bg-white text-slate-900 shadow-lg hover:shadow-xl'
						}`}
					>
						{/* Number */}
						<div className='mb-6'>
							<span
								className={`text-4xl md:text-5xl font-bold ${
									service.featured ? 'text-white' : 'text-slate-300'
								}`}
							>
								{service.number}
							</span>
						</div>

						{/* Title */}
						<h2
							className={`text-2xl md:text-3xl font-bold mb-6 leading-tight ${
								service.featured ? 'text-white' : 'text-slate-900'
							}`}
						>
							{service.title}
						</h2>

						{/* Description */}
						<p
							className={`text-sm md:text-base leading-relaxed ${
								service.featured ? 'text-gray-300' : 'text-gray-600'
							}`}
						>
							{service.description}
						</p>

						{/* Learn More Button */}
						<div className='mt-8'>
							<button
								className={`px-6 py-3 rounded-full font-medium transition-colors ${
									service.featured
										? 'bg-white text-slate-900 hover:bg-gray-100'
										: 'bg-slate-900 text-white hover:bg-slate-800'
								}`}
							>
								Pelajari Lebih Lanjut
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Events;
