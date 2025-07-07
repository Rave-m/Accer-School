const About = () => {
	return (
		<div className='py-4 px-4 sm:px-6 md:px-8 lg:px-12'>
			<div className='max-w-7xl mx-auto'>
				<div className='min-h-[85vh]'>
					{/* Main Content Grid */}
					<div className='grid grid-cols-1 lg:grid-cols-15 gap-4 sm:gap-6 lg:gap-8 h-full items-center'>
						{/* Left Side - Image */}
						<div className='lg:col-span-4 order-2 lg:order-1'>
							<div className='relative'>
								<div className='rounded-2xl sm:rounded-3xl h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[45rem] overflow-hidden shadow-xl'>
									<img
										src='/bangunan.jpg'
										alt='Modern architecture building'
										className='w-full h-full object-cover'
									/>
								</div>
							</div>
						</div>

						{/* Right Side - Content */}
						<div className='lg:col-span-11 order-1 lg:order-2 lg:pl-8 bg-gray-100 rounded-2xl sm:rounded-3xl h-full p-4 sm:p-6 md:p-8 lg:p-10'>
							{/* Statistics */}
							<div className='mb-4 sm:mb-6 md:mb-8'>
								<p className='text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2'>
									Siswa yang Terdaftar
								</p>
								<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4'>
									2.5K+
								</h2>
							</div>

							{/* Main Title */}
							<div className='mb-4 sm:mb-6 md:mb-8'>
								<h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight mb-3 sm:mb-4 md:mb-6'>
									Kami menciptakan generasi masa depan melalui pendidikan berkualitas
									<span className='block mt-1 sm:mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-medium'>
										visi dan misi Anda adalah inspirasi kami.
									</span>
								</h1>

								<p className='text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8'>
									<strong className='text-slate-900'>Accer School</strong> berkomitmen menghadirkan
									pendidikan terdepan dengan kurikulum inovatif dan fasilitas modern. Kami memadukan
									pembelajaran akademik yang solid dengan pengembangan karakter, mempersiapkan siswa
									menghadapi tantangan global. Dengan tenaga pengajar berpengalaman dan lingkungan
									belajar yang kondusif, kami mewujudkan potensi terbaik setiap siswa untuk masa
									depan yang gemilang.
								</p>

								<div className='mb-4 sm:mb-6 md:mb-8'>
									<h3 className='text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4'>
										Keunggulan Accer School:
									</h3>
									<ul className='text-gray-600 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base'>
										<li>
											• <strong>Kurikulum Internasional</strong> - Standar pendidikan global dengan
											pendekatan lokal
										</li>
										<li>
											• <strong>Teknologi Terdepan</strong> - Pembelajaran digital dan smart
											classroom
										</li>
										<li>
											• <strong>Pengembangan Karakter</strong> - Membentuk pribadi yang
											berintegritas
										</li>
										<li>
											• <strong>Fasilitas Lengkap</strong> - Laboratorium, perpustakaan, dan area
											olahraga modern
										</li>
									</ul>
								</div>

								<button className='bg-slate-900 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-medium hover:bg-slate-800 transition-colors text-xs sm:text-sm md:text-base w-full sm:w-auto'>
									Lihat Selengkapnya
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
