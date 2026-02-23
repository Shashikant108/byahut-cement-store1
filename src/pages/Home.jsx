import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center bg-brand-blue px-4">
      <div className="bg-white p-6 rounded-xl shadow-[0_24px_80px_rgba(0,36,66,.25)] text-center">
        <h1 className="m-0 mb-2 text-brand-dark">Travelista Tours</h1>
        <p className="m-0 text-slate-500">Welcome! Proceed to the login page.</p>
        <div className="mt-4">
          <Link to="/login" className="inline-block bg-brand-link text-white px-4 py-2 rounded-lg font-semibold no-underline">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}


