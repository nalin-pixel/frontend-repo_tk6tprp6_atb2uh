import { useState } from 'react';
import { apiPost } from '../lib/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      await apiPost('/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-white dark:from-black dark:to-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">Contact</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">Tell us about your challenge. We’ll get back within 1 business day.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="Name" className="px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100" />
          <input required type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} placeholder="Email" className="px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100" />
          <input value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} placeholder="Phone" className="px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 md:col-span-2" />
          <textarea required rows="5" value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} placeholder="Message" className="px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 md:col-span-2" />
          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors">Send</button>
            {status === 'loading' && <span className="text-zinc-500">Sending...</span>}
            {status === 'success' && <span className="text-emerald-500">Sent! We'll be in touch.</span>}
            {status === 'error' && <span className="text-red-500">Something went wrong. Try again.</span>}
          </div>
        </form>

        <div className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">
          <p>Email: hello@nexora.synergy</p>
          <p>Phone: +1 (555) 012-3456</p>
          <div className="mt-2 flex gap-4">
            <a href="#" className="hover:text-blue-500">Twitter</a>
            <a href="#" className="hover:text-blue-500">LinkedIn</a>
            <a href="#" className="hover:text-blue-500">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
