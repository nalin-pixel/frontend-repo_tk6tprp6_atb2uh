import { useEffect, useState } from 'react';
import { apiGet } from '../lib/api';

export default function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    apiGet('/api/content/projects').then(r => setItems(r.items)).catch(() => setItems([]));
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-white dark:from-black dark:to-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">Portfolio</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">A few highlights from recent collaborations.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, idx) => (
            <article key={idx} className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5">
              <div className="h-40 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-amber-500/20" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{p.summary}</p>
                {p.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-300">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
