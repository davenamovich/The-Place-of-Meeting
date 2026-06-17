import { Moon, ShieldCheck } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-[var(--color-app-border)] bg-[var(--color-app-bg)] sticky top-0 z-40 px-6 py-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-full border border-[var(--color-app-border)] flex items-center justify-center">
            <Moon className="w-4 h-4 text-[var(--color-app-accent)]" />
          </div>
          <div>
            <h1 className="text-xs font-bold tracking-wide-extra text-[var(--color-app-text)] uppercase">The Place of Meeting</h1>
            <p className="text-[10px] opacity-50 tracking-wide uppercase">Joseph Murphy Discipline Engine</p>
          </div>
        </div>
        <div className="flex items-center gap-2 border border-[var(--color-app-border)] rounded-full px-4 py-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-[10px] font-bold tracking-wide-extra uppercase opacity-70">Private Local Vault</span>
        </div>
      </div>
    </header>
  );
}
