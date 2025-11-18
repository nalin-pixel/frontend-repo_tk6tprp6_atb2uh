import { useEffect, useState } from 'react';
import { apiGet } from '../lib/api';

export default function Blog() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    apiGet('/api/blog').then(r => setItems(r.items)).catch(() => setItems([]));
  }, []);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">Insights</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl">Thoughts on building resilient, scalable, and secure systems.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((post, idx) => (
            <article key={idx} className="rounded-2xl border border-zinc-200 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{post.title}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
              <div className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">By {post.author}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
