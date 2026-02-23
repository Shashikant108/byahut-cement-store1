import React, { useState, useEffect } from 'react';

const Hero = () => {
    const images = ['/image1.png', '/shop2.jpeg', '/shop4.jpeg'];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative min-h-[400px] md:h-[600px] overflow-hidden flex items-center justify-center">
            {/* Background Images Slider */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={image}
                        alt={`Building Materials ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* Dark Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-10 md:py-0">
                <h2 className="text-white text-3xl sm:text-4xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] leading-none mb-4 md:mb-6">
                    BYAHUT <span className="text-yellow-500">CEMENT</span> STORE
                </h2>

                <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-8 md:mb-10">
                    <div className="h-[2px] w-6 sm:w-10 md:w-20 bg-white shadow-xl hidden xs:block"></div>
                    <p className="text-white text-sm sm:text-base md:text-3xl font-black tracking-[0.2em] md:tracking-widest uppercase drop-shadow-md px-2">
                        All Building Material Available Here
                    </p>
                    <div className="h-[2px] w-6 sm:w-10 md:w-20 bg-white shadow-xl hidden xs:block"></div>
                </div>

                <button className="bg-red-700 hover:bg-red-800 text-white text-sm sm:text-base md:text-2xl font-black py-3 md:py-4 px-8 md:px-16 rounded-sm shadow-[0_5px_0_rgb(153,27,27)] md:shadow-[0_8px_0_rgb(153,27,27)] hover:shadow-[0_3px_0_rgb(153,27,27)] md:hover:shadow-[0_4px_0_rgb(153,27,27)] active:translate-y-[2px] md:active:translate-y-[4px] transition-all duration-100 uppercase tracking-widest border-2 border-red-900">
                    SHOP NOW
                </button>
            </div>
        </div>
    );
};

export default Hero;
