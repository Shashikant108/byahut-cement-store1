import React from 'react';
import SocialButtons from '../components/SocialButtons';

export default function Login() {
  return (
    <div className="min-h-screen bg-brand-blue relative">
      <div className="hidden md:block w-[140px] h-[140px] bg-white rounded-full opacity-95 shadow-xl absolute top-6 left-28" />
      <div className="hidden md:block w-[110px] h-[110px] bg-white rounded-full opacity-95 shadow-xl absolute bottom-12 right-28" />

      <main className="min-h-screen grid place-items-center px-5 py-12">
        <section className="grid w-[92vw] max-w-[1100px] min-h-[560px] grid-cols-1 md:grid-cols-[1.1fr_1fr] bg-white rounded-[18px] shadow-[0_24px_80px_rgba(0,36,66,.25)] overflow-hidden">
          <div className="p-6 md:p-6 grid grid-rows-[1fr_auto_auto] gap-4 border-b md:border-b-0 md:border-r border-gray-100">
            <figure className="m-0 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
                alt="Traveler looking at mountains"
                className="w-full h-full object-cover block"
              />
            </figure>
            <div className="text-center px-3">
              <h1 className="mt-3 mb-0 leading-none flex items-baseline justify-center gap-2">
                <span className="text-[44px] font-light text-brand-link" style={{fontFamily:'"Great Vibes", cursive'}}>Travelista</span>
                <span className="font-bold text-[28px] text-brand-dark">Tours</span>
              </h1>
              <p className="mt-1 text-xs text-slate-500">
                Travel is the only purchase that enriches you beyond material wealth
              </p>
            </div>
            <div className="w-full h-[84px] pb-2 px-2">
              <svg viewBox="0 0 800 100" preserveAspectRatio="none" aria-hidden="true" className="w-full h-full fill-brand-blue opacity-85">
                <path d="M0,80 L20,80 L20,40 L40,40 L40,70 L60,70 L60,20 L90,20 L90,80 L120,80 L120,50 L160,50 L160,80 L220,80 L220,30 L240,30 L240,80 L320,80 L320,45 L350,45 L350,80 L420,80 L420,25 L440,25 L440,80 L520,80 L520,55 L560,55 L560,80 L620,80 L620,30 L660,30 L660,80 L720,80 L720,50 L760,50 L760,80 L800,80 L800,100 L0,100 Z" />
              </svg>
            </div>
          </div>

          <div className="p-8 md:p-14 grid content-center">
            <div className="relative text-center mb-4">
              <div className="absolute -top-6 right-3">
                <svg viewBox="0 0 64 64" className="w-7 h-7 fill-brand-link rotate-[18deg] drop-shadow-md"><path d="M2 34l28-6 10-16 6 6-16 10-6 28-4-12-12-4z"/></svg>
                <span className="absolute right-[18px] top-[22px] w-[120px] h-px rotate-[-12deg] bg-[repeating-linear-gradient(90deg,rgba(10,121,185,0)_0_12px,rgba(10,121,185,.35)_12px_24px)]"></span>
              </div>
              <h2 className="m-0 font-bold text-[36px] text-brand-dark">Welcome</h2>
              <p className="m-0 mt-1 text-xs text-slate-500">Login with Email</p>
            </div>

            <form className="grid gap-3 w-full max-w-[420px] mx-auto" onSubmit={(e)=>e.preventDefault()}>
              <label className="grid gap-1">
                <span className="text-xs text-slate-500">Email</span>
                <div className="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden">
                  <span className="w-10 grid place-items-center text-slate-500">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current"><path d="M2 6h20v12H2z"/><path d="M2 6l10 7 10-7"/></svg>
                  </span>
                  <input type="email" placeholder="you@email.com" required className="flex-1 border-0 outline-none p-3 text-brand-dark" />
                </div>
              </label>

              <label className="grid gap-1">
                <span className="text-xs text-slate-500">Password</span>
                <div className="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden">
                  <span className="w-10 grid place-items-center text-slate-500">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current"><path d="M6 10h12v10H6z"/><path d="M8 10V7a4 4 0 118 0v3"/></svg>
                  </span>
                  <input type="password" placeholder="••••••••" required className="flex-1 border-0 outline-none p-3 text-brand-dark" />
                </div>
              </label>

              <div className="flex justify-end">
                <a href="/" onClick={(e)=>e.preventDefault()} className="text-brand-link font-medium no-underline hover:underline text-sm">Forgot your password?</a>
              </div>

              <button type="submit" className="rounded-lg bg-gradient-to-b from-[#1aa6f1] to-brand-link text-white font-semibold py-3 shadow-[0_10px_24px_rgba(10,121,185,.35)] active:translate-y-px">Login</button>

              <div className="relative text-center text-xs text-slate-500 my-1">
                <span className="before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[42%] before:h-px before:bg-slate-200 after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[42%] after:h-px after:bg-slate-200">OR</span>
              </div>

              <SocialButtons />

              <p className="text-center text-sm text-slate-500 mt-2">
                Don't have an account?{' '}
                <a href="/" onClick={(e)=>e.preventDefault()} className="text-brand-link font-medium hover:underline">Register Now</a>
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
