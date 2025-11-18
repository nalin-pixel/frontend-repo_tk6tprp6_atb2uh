import Spline from '@splinetool/react-spline';

export default function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black/70" />
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[.3em] text-zinc-400">NEXORA SYNERGY</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300">
          Empowering Digital Evolution
        </h1>
        <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
          We design, build, and secure modern digital platforms that scale with your ambitions.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={onPrimaryClick} className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors">Explore Services</button>
          <button onClick={onSecondaryClick} className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
