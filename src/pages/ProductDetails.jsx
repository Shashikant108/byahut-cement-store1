import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-50 px-4">
        <div className="text-center">
          <p className="text-slate-600 mb-4">Product not found.</p>
          <Link to="/" className="inline-block bg-brand-link text-white px-4 py-2 rounded-lg font-semibold no-underline">Back to store</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-sm">Back</button>
          <Link to="/" className="text-brand-link font-semibold no-underline">Bhayut Cement Store</Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-700">{product.category}</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-white">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="m-0 text-2xl font-bold text-brand-dark">{product.name}</h1>
          <p className="m-0 mt-1 text-slate-600">{product.description}</p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <div className="text-xs text-slate-500">Category</div>
              <div className="font-semibold">{product.category}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <div className="text-xs text-slate-500">Quality</div>
              <div className="font-semibold">{product.quality}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <div className="text-xs text-slate-500">Price</div>
              <div className="font-semibold">₹{product.price} <span className="text-slate-500 font-normal">{product.unit}</span></div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3">
              <div className="text-xs text-slate-500">Rating</div>
              <div className="font-semibold">★ {product.rating}</div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="m-0 mb-2 text-lg font-semibold">Technical Specs</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              {product.specs.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>

          <div className="mt-6 flex gap-3">
            <Link
              to={`/inquiry?product=${encodeURIComponent(product.slug)}`}
              className="bg-brand-link text-white px-4 py-2 rounded-lg font-semibold no-underline"
            >
              Enquiry
            </Link>
            <a href="tel:+9709930***" className="px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 no-underline text-brand-dark">Call to order</a>
          </div>
        </div>
      </main>
    </div>
  );
}


