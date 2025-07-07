const Reviews = () => {
	const testimonials = [
		{
			name: 'Sari Widodo',
			rating: 5,
			text: 'Ekstrakurikuler robotika di Accer School sangat membantu anak saya mengembangkan kemampuan problem solving dan kreativitas. Tim pengajar sangat profesional dan sabar dalam membimbing. Saya sangat merekomendasikan sekolah ini!',
		},
		{
			name: 'Budi Santoso',
			rating: 5,
			text: 'Program basket di Accer School luar biasa! Fasilitas lapangan yang modern dan pelatih berpengalaman membuat anak saya semakin percaya diri. Prestasi yang diraih juga membanggakan untuk sekolah.',
		},
		{
			name: 'Maya Putri',
			rating: 5,
			text: 'Klub sains Accer School memberikan pengalaman belajar yang menyenangkan. Laboratorium lengkap dan eksperimen yang menarik membuat anak saya semakin tertarik dengan sains. Terima kasih Accer School!',
		},
		{
			name: 'Andi Wijaya',
			rating: 5,
			text: 'Ekstrakurikuler musik di sini sangat berkualitas. Instrumen lengkap dan guru musik yang berpengalaman. Anak saya sekarang sudah bisa bermain piano dengan baik berkat bimbingan dari Accer School.',
		},
		{
			name: 'Lisa Andini',
			rating: 5,
			text: 'Program drama dan teater sangat membantu mengembangkan kepercayaan diri anak. Guru-guru sangat supportif dan menciptakan lingkungan belajar yang positif. Accer School memang terbaik!',
		},
		{
			name: 'Rizki Pratama',
			rating: 5,
			text: 'Klub fotografi di Accer School mengajarkan teknik-teknik yang profesional. Peralatan kamera yang disediakan juga sangat lengkap. Anak saya sekarang sudah mahir dalam fotografi digital.',
		},
	];

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, index) => (
			<span
				key={index}
				className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
			>
				★
			</span>
		));
	};

	return (
		<div className='min-h-screen p-4 md:p-8'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<div className='mb-12'>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4'>
						Apa kata orang tua siswa
					</h1>
					<p className='text-gray-600 text-lg max-w-2xl'>
						Dengarkan pengalaman langsung dari orang tua siswa tentang program ekstrakurikuler dan
						kualitas pendidikan di Accer School.
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow'
						>
							{/* Rating Stars */}
							<div className='flex mb-4'>{renderStars(testimonial.rating)}</div>

							{/* Testimonial Text */}
							<p className='text-gray-700 leading-relaxed mb-6 text-sm'>"{testimonial.text}"</p>

							{/* Name */}
							<div className='border-t pt-4'>
								<p className='font-semibold text-slate-900'>{testimonial.name}</p>
								<p className='text-sm text-gray-500'>Orang Tua Siswa Accer School</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Reviews;
