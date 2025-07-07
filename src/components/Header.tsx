import { useState } from 'react';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className='bg-white my-5'>
			<div className='max-w-7xl mx-auto shadow-sm rounded-full overflow-hidden bg-[#F7F8F8]'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<div className='flex items-center ps-4 md:ps-8'>
						<div className='flex items-center space-x-2'>
							<span className='text-lg md:text-xl font-bold text-gray-900'>Accer School</span>
						</div>
					</div>

					{/* Navigation Menu - Desktop */}
					<nav className='hidden md:flex space-x-8'>
						<a
							href='#'
							className='text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors'
						>
							Home
						</a>
						<a
							href='#'
							className='text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors'
						>
							About
						</a>
						<a
							href='#'
							className='text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors'
						>
							Services
						</a>
						<a
							href='#'
							className='text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors'
						>
							Reviews
						</a>
					</nav>

					{/* Contact Us Button - Desktop */}
					<div className='hidden md:flex items-center'>
						<button className='bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 rounded-lg transition-colors h-12'>
							Contact Us
						</button>
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden pe-4'>
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className='text-gray-500 hover:text-gray-900 p-2'
						>
							<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* Mobile Navigation Menu */}
			{isMobileMenuOpen && (
				<div className='md:hidden bg-white border-t border-gray-100'>
					<div className='px-4 py-3 space-y-3'>
						<a
							href='#'
							onClick={handleMenuClick}
							className='block text-gray-900 hover:text-blue-600 py-2 text-sm font-medium transition-colors'
						>
							Home
						</a>
						<a
							href='#'
							onClick={handleMenuClick}
							className='block text-gray-600 hover:text-blue-600 py-2 text-sm font-medium transition-colors'
						>
							About
						</a>
						<a
							href='#'
							onClick={handleMenuClick}
							className='block text-gray-600 hover:text-blue-600 py-2 text-sm font-medium transition-colors'
						>
							Services
						</a>
						<a
							href='#'
							onClick={handleMenuClick}
							className='block text-gray-600 hover:text-blue-600 py-2 text-sm font-medium transition-colors'
						>
							Reviews
						</a>
						<button
							onClick={handleMenuClick}
							className='w-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 rounded-lg transition-colors mt-4'
						>
							Contact Us
						</button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
