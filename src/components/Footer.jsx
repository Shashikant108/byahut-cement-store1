import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Contact Form */}
                <div className="p-6 md:p-10 lg:p-12 bg-gradient-to-br from-red-700 to-red-900 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-4xl font-black mb-1 uppercase tracking-tighter drop-shadow-md">Get In Touch</h3>
                    <p className="mb-6 md:mb-8 font-bold text-red-100 uppercase tracking-widest text-[9px] md:text-xs">Have Any Questions? Contact Us Today!</p>

                    <form className="space-y-2 md:space-y-3">
                        <div className="grid grid-cols-1 gap-2 md:gap-3">
                            <input type="text" placeholder="Your Name" className="w-full p-2.5 md:p-3 rounded-md bg-white text-gray-800 outline-none focus:ring-2 focus:ring-red-500/50 transition-all font-bold uppercase text-[9px] md:text-xs tracking-widest placeholder:text-gray-400 border border-transparent focus:border-red-500" />
                            <input type="email" placeholder="Your Email" className="w-full p-2.5 md:p-3 rounded-md bg-white text-gray-800 outline-none focus:ring-2 focus:ring-red-500/50 transition-all font-bold uppercase text-[9px] md:text-xs tracking-widest placeholder:text-gray-400 border border-transparent focus:border-red-500" />
                            <input type="text" placeholder="Your Mobile" className="w-full p-2.5 md:p-3 rounded-md bg-white text-gray-800 outline-none focus:ring-2 focus:ring-red-500/50 transition-all font-bold uppercase text-[9px] md:text-xs tracking-widest placeholder:text-gray-400 border border-transparent focus:border-red-500" />
                            <textarea placeholder="Your Message" rows="2" className="w-full p-2.5 md:p-3 rounded-md bg-white text-gray-800 outline-none focus:ring-2 focus:ring-red-500/50 transition-all font-bold uppercase text-[9px] md:text-xs tracking-widest placeholder:text-gray-400 border border-transparent focus:border-red-500"></textarea>
                        </div>
                        <button className="bg-gray-950 hover:bg-black text-white font-black py-2.5 md:py-3 px-8 md:px-10 rounded-md transition-all uppercase tracking-widest text-[9px] md:text-xs shadow-lg active:scale-95">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right: Store Presence */}
                <div className="p-6 md:p-10 lg:p-12 bg-gray-100 text-gray-900 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 text-red-700 uppercase tracking-tighter drop-shadow-sm">Visit Our Store</h3>
                    <div className="relative overflow-hidden shadow-xl rounded-xl group max-w-lg mx-auto lg:mx-0">
                        <img
                            src="/shop2.jpeg"
                            alt="Byahut Cement Store Front"
                            className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-red-700 p-3 md:p-4 flex items-center space-x-3 md:space-x-4">
                            <div className="bg-white p-1 rounded shadow-lg flex-shrink-0 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center overflow-hidden">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="text-left leading-tight text-white">
                                <p className="font-black text-sm md:text-xl uppercase tracking-tighter">Byahut Cement Store</p>
                                <p className="text-[7px] md:text-[9px] font-bold uppercase tracking-widest text-red-100 italic">All Building Material Available Here</p>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.google.com/maps/place/Byahut+Cement+Store+Bhaiyabahni+Bhikhabandh+841244/@26.1027688,84.5361376,17z/data=!3m1!4b1!4m6!3m5!1s0x3992e90db79ea6f7:0x5ef1a9d91583b9be!8m2!3d26.1027688!4d84.5361376!16s%2Fg%2F11tcwyl9nn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 md:mt-6 flex items-center space-x-2 md:space-x-3 text-gray-600 hover:text-red-700 transition-colors font-bold uppercase tracking-widest text-[9px] md:text-xs no-underline group"
                    >
                        <i className="fas fa-location-dot text-red-700 text-xl md:text-2xl group-hover:scale-110 transition-transform"></i>
                        <p className="italic">Bhaiya Bahini (Pull ke Pass), Bhikhabandh, Siwan, Bihar (841244)</p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
