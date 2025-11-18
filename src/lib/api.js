export const API_BASE = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, '') || 'http://localhost:8000';

export async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`, { headers: { 'Accept': 'application/json' } });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export async function apiPost(path, data) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed: ${res.status}`);
  }
  return res.json();
}
