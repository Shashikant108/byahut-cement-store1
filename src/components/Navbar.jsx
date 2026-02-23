import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-red-700 to-red-600 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-16">
                    <div className="flex items-center">
                        <div className="flex items-center py-1">
                            <img
                                src="/logo.png"
                                alt="BYAHUT Cement Store"
                                className="h-14 md:h-20 w-auto object-contain drop-shadow-md"
                            />
                        </div>
                        <div className="hidden lg:block ml-8">
                            <div className="flex items-baseline space-x-5">
                                <a href="#" className="px-2 py-1 border-b-2 border-white text-xs font-bold uppercase tracking-wider">Home</a>
                                <a href="#" className="px-2 py-1 text-xs font-bold uppercase tracking-wider hover:border-b-2 hover:border-white transition-all">About Us</a>
                                <a href="#" className="px-2 py-1 text-xs font-bold uppercase tracking-wider hover:border-b-2 hover:border-white transition-all">Products</a>
                                <a href="#" className="px-2 py-1 text-xs font-bold uppercase tracking-wider hover:border-b-2 hover:border-white transition-all">Services</a>
                                <a href="#" className="px-2 py-1 text-xs font-bold uppercase tracking-wider hover:border-b-2 hover:border-white transition-all">Gallery</a>
                                <a href="#" className="px-2 py-1 text-xs font-bold uppercase tracking-wider hover:border-b-2 hover:border-white transition-all">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex items-center text-xs font-black italic">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 mr-2 text-white">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l.515 2.061a1.125 1.125 0 01-.504 1.29l-2.057 1.234a18.812 18.812 0 008.835 8.835l1.234-2.057a1.125 1.125 0 011.29-.504l2.061.515c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                            Call Us: +91 9709930***
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-1.5 rounded-md hover:bg-red-800 transition-colors"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-red-800 absolute top-20 w-full shadow-2xl border-t border-red-700 py-4 px-6 space-y-4 font-bold uppercase tracking-tight">
                    <a href="#" className="block hover:text-gray-200">Home</a>
                    <a href="#" className="block hover:text-gray-200">About Us</a>
                    <a href="#" className="block hover:text-gray-200">Products</a>
                    <a href="#" className="block hover:text-gray-200">Services</a>
                    <a href="#" className="block hover:text-gray-200">Gallery</a>
                    <a href="#" className="block hover:text-gray-200">Contact Us</a>
                    <div className="pt-4 border-t border-red-600 flex items-center text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 mr-2">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l.515 2.061a1.125 1.125 0 01-.504 1.29l-2.057 1.234a18.812 18.812 0 008.835 8.835l1.234-2.057a1.125 1.125 0 011.29-.504l2.061.515c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                        Call Us: +91 9709930***
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
