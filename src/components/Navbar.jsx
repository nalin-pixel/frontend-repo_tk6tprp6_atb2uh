import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme');
    const isDark = saved ? saved === 'dark' : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">NEXORA <span className="text-blue-500">SYNERGY</span></a>
        <div className="hidden md:flex items-center gap-6 text-zinc-700 dark:text-zinc-300">
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#projects" className="hover:text-blue-500">Portfolio</a>
          <a href="#blog" className="hover:text-blue-500">Insights</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <button onClick={() => setDark(d => !d)} className="ml-2 p-2 rounded-lg border border-white/10 text-zinc-700 dark:text-zinc-200 hover:bg-white/10">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <button onClick={() => setOpen(o => !o)} className="md:hidden p-2 text-zinc-700 dark:text-zinc-200">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-zinc-800 dark:text-zinc-200">
          <a href="#services" className="block">Services</a>
          <a href="#projects" className="block">Portfolio</a>
          <a href="#blog" className="block">Insights</a>
          <a href="#contact" className="block">Contact</a>
          <button onClick={() => setDark(d => !d)} className="mt-2 px-3 py-2 rounded-lg border border-white/10">Toggle Theme</button>
        </div>
      )}
    </header>
  );
}
