import React from 'react';

const categories = [
    { name: 'Cement', icon: '/cement.png' },
    { name: 'Sand & Gravel', icon: '/balu.png' },
    { name: 'Steel Sariya', icon: '/sariya.png' },
    { name: 'Pipes & Fittings', icon: '/pipe.png' },
];

const Categories = () => {
    return (
        <div className="bg-white py-4 md:py-10">
            <div className="max-w-7xl mx-auto px-2 md:px-4 grid grid-cols-4 gap-2 md:gap-6">
                {categories.map((cat, index) => (
                    <div key={index} className="bg-gray-50 p-2 md:p-6 rounded-lg md:rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center space-y-1.5 md:space-y-3 hover:shadow-lg transition-all cursor-pointer group hover:-translate-y-1">
                        <div className="w-10 h-10 sx:w-12 sx:h-12 md:w-24 md:h-24 flex-shrink-0 overflow-hidden rounded-md md:rounded-lg border border-gray-200 bg-white shadow-sm">
                            <img src={cat.icon} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="font-black text-gray-900 text-[7px] sx:text-[9px] md:text-xl uppercase tracking-tighter leading-tight">{cat.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
