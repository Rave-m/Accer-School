const Home = () => {
	return (
		<div className='py-2'>
			<div className='max-w-7xl mx-auto'>
				<div className='bg-gray-100 rounded-3xl p-6 md:p-12 relative overflow-hidden'>
					{/* Main Content Grid */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 h-full'>
						{/* Left Side - Text Content */}
						<div className='flex flex-col justify-between space-y-8'>
							{/* Capital Raised Card */}
							<div className='bg-white rounded-2xl p-6 shadow-lg'>
								<p className='text-sm text-gray-600 mb-2'>Alamat Sekolah</p>
								<h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>Accer School</h2>
								<p className='text-sm text-gray-600 leading-relaxed'>
									Jl. Pendidikan No. 123, Kelurahan Cerdas, Kecamatan Harapan, Kota Bandung, Jawa
									Barat 40132. Berlokasi strategis di jantung kota dengan akses transportasi yang
									mudah dan lingkungan yang kondusif untuk belajar.
								</p>
							</div>

							{/* Introduction Card */}
							<div className='bg-white rounded-2xl p-6 shadow-lg'>
								<p className='text-sm text-gray-600 mb-4'>Tentang Kami</p>
								<h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>
									Pendidikan berkualitas, inovatif & terjangkau.
								</h3>
								<p className='text-sm text-gray-600 leading-relaxed mb-6'>
									Accer School adalah institusi pendidikan yang berkomitmen menghadirkan
									pembelajaran berkualitas tinggi dengan pendekatan modern dan inovatif. Kami
									mengintegrasikan teknologi terdepan dalam proses belajar mengajar, didukung oleh
									tenaga pengajar profesional dan berpengalaman. Dengan lingkungan belajar yang
									nyaman dan fasilitas lengkap, kami mempersiapkan siswa untuk menghadapi tantangan
									masa depan dengan penuh percaya diri.
								</p>
								<button className='bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors'>
									Mulai Jelajahi
								</button>
							</div>
						</div>

						{/* Right Side - Main Title and Image */}
						<div className='flex flex-col justify-center space-y-8'>
							{/* Main Title */}
							<div className='text-center lg:text-left'>
								<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight'>
									Membangun masa depan melalui pendidikan.
								</h1>
							</div>
							{/* Building Image */}
							<div className='relative'>
								<div className='bg-gradient-to-br rounded-2xl h-64 md:h-80 lg:h-96 overflow-hidden'>
									<img
										src='/heroImage.png'
										alt='Modern building architecture'
										className='w-full h-full object-cover'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
