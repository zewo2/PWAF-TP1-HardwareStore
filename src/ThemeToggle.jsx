import { useEffect, useState } from 'react';

const LIGHT = {
  '--bg': '#fff',
  '--fg': '#222',
  '--card': '#f3f4f6',
  '--highlight': '#ff9800',
  '--header': '#f9fafb',
  '--border': '#e5e7eb',
};
const DARK = {
  '--bg': '#18181b',
  '--fg': '#f3f4f6',
  '--card': '#232323',
  '--highlight': '#ff9800',
  '--header': '#232323',
  '--border': '#333',
};

function setThemeVars(vars) {
  for (const k in vars) {
    document.documentElement.style.setProperty(k, vars[k]);
  }
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    setThemeVars(dark ? DARK : LIGHT);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      className="mr-4 px-3 py-2 rounded-full border font-bold"
      style={{ background: 'var(--card)', color: 'var(--highlight)', borderColor: 'var(--border)' }}
      onClick={() => setDark(d => !d)}
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
