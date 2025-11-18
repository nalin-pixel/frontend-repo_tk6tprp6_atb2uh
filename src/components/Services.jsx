import { Code, Shield, GitBranch, Cloud, LineChart, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { apiGet } from '../lib/api';

const ICONS = { Code, Shield, GitBranch, Cloud, LineChart };

export default function Services() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    apiGet('/api/content/services').then(r => setItems(r.items)).catch(() => setItems([]));
  }, []);

  return (
    <section id="services" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">Services</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl">Modular solutions spanning development, security, cloud, and data.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, idx) => {
            const Icon = ICONS[s.icon] || Code;
            return (
              <div key={idx} className="group rounded-2xl border border-zinc-200 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 hover:border-blue-400 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                  <Icon />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">{s.title}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{s.summary}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
