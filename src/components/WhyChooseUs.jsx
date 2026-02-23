import React from 'react';


const features = [
    {
        title: 'Best Quality',
        desc: 'Top-Grade Building Materials',
        icon: '/quality.png',
    },
    {
        title: 'Affordable Prices',
        desc: 'Competitive Rates',
        icon: '/price.png',
    },
    {
        title: 'Fast Delivery',
        desc: 'On-Time Supply',
        icon: '/delivery.png',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-12 md:py-24 bg-gray-50 border-y-2 border-gray-100">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-10 md:mb-20">
                    <div className="h-[2px] w-6 md:w-20 bg-red-700"></div>
                    <h2 className="text-3xl md:text-5xl font-black text-red-700 uppercase tracking-tighter">Why Choose Us?</h2>
                    <div className="h-[2px] w-6 md:w-20 bg-red-700"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-left">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-5 p-6 md:p-8 bg-white shadow-sm rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="bg-red-50 p-2 md:p-3 rounded-xl group-hover:bg-red-700 transition-colors flex-shrink-0 w-20 h-20 md:w-32 md:h-32 flex items-center justify-center overflow-hidden border border-red-100">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-full h-full object-contain transition-all duration-300"
                                />
                            </div>
                            <div>
                                <h4 className="font-black text-gray-900 text-base md:text-2xl uppercase tracking-tighter leading-none mb-1">{feature.title}</h4>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
