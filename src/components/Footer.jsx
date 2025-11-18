export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="text-lg font-bold text-zinc-900 dark:text-zinc-100">NEXORA <span className="text-blue-500">SYNERGY</span></div>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Innovation. Efficiency. Reliability.</p>
        </div>
        <div className="text-zinc-700 dark:text-zinc-300">
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Portfolio</a></li>
            <li><a href="#blog" className="hover:text-blue-500">Insights</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
        <div className="text-zinc-700 dark:text-zinc-300">
          <div className="font-semibold">Contact</div>
          <p className="mt-2">Email: hello@nexora.synergy</p>
          <p>Phone: +1 (555) 012-3456</p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-xs text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} NEXORA SYNERGY. All rights reserved.</div>
    </footer>
  );
}
