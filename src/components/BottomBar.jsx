import React from 'react';


const BottomBar = () => {
    return (
        <div className="bg-gray-950 text-gray-400 py-3 border-t border-gray-900 relative w-full z-10 md:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-[10px] md:text-sm">
                <div className="flex items-center justify-center space-x-6 md:space-x-8 mb-2 md:mb-0 w-full md:w-auto">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 md:h-4 md:w-4 text-red-500">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l.515 2.061a1.125 1.125 0 01-.504 1.29l-2.057 1.234a18.812 18.812 0 008.835 8.835l1.234-2.057a1.125 1.125 0 011.29-.504l2.061.515c.834.209 1.42.959 1.42 1.819V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                        <span className="font-bold tracking-widest uppercase">Call Us</span>
                    </div>
                    <div className="flex items-center space-x-2 border-l border-gray-800 pl-6 md:pl-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 md:h-4 md:w-4 text-red-500">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        <span className="font-bold tracking-widest uppercase">Email</span>
                    </div>
                </div>

                <div className="flex items-center space-x-3 md:space-x-4">
                    <a href="#" className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all shadow-lg active:scale-95">f</a>
                    <a href="#" className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-all shadow-lg active:scale-95">w</a>
                    <a href="#" className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-sky-400 flex items-center justify-center text-white hover:bg-sky-500 transition-all shadow-lg active:scale-95">t</a>
                    <a href="#" className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-all shadow-lg active:scale-95">y</a>
                </div>
            </div>
        </div>
    );
};

export default BottomBar;
