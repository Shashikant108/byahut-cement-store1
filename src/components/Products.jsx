import React from 'react';

const productList = [
    { name: 'Cement', image: '/cement.png' },
    { name: 'Sand & Gravel', image: '/balu.png' },
    { name: 'Steel Sariya', image: '/sariya.png' },
    { name: 'Pipes & Fittings', image: '/pipe.png' },
];

const Products = () => {
    return (
        <section className="py-12 md:py-24 bg-[#3AF6C2] border-y border-stone-200">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-4">
                    <div className="h-[2px] w-6 md:w-20 bg-red-700"></div>
                    <h2 className="text-2xl md:text-6xl font-black text-red-700 uppercase tracking-tighter">Our Products</h2>
                    <div className="h-[2px] w-6 md:w-20 bg-red-700"></div>
                </div>
                <p className="text-gray-400 font-bold italic mb-10 md:mb-16 uppercase tracking-widest text-[10px] md:text-sm">We Provide Quality Building Materials</p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
                    {productList.map((product, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="bg-white p-2 md:p-4 shadow-sm border border-gray-100 rounded-xl group-hover:border-red-700 group-hover:shadow-xl transition-all duration-300">
                                <div className="relative overflow-hidden aspect-[4/3] mb-3 md:mb-4 rounded-lg">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-sm md:text-2xl font-black text-gray-900 py-1 md:py-2 uppercase tracking-tighter">{product.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:mt-20">
                    <button className="bg-red-700 hover:bg-red-800 text-white text-xs md:text-xl font-black py-3 md:py-4 px-8 md:px-16 rounded-sm shadow-[0_5px_0_rgb(153,27,27)] md:shadow-[0_8px_0_rgb(153,27,27)] hover:translate-y-[2px] md:hover:translate-y-[4px] transition-all duration-100 uppercase tracking-widest border-2 border-red-900">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;
