import React from 'react';
import { Banknote, HeartPulse, Wind, Shield } from 'lucide-react';
import { CIRCUITS } from '../data';

const ICONS: Record<string, React.ReactNode> = {
  banknote: <Banknote className="w-4 h-4" />,
  'heart-pulse': <HeartPulse className="w-4 h-4" />,
  wind: <Wind className="w-4 h-4" />,
  shield: <Shield className="w-4 h-4" />
};

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
  disabled: boolean;
}

export default function CircuitSelector({ selectedId, onSelect, disabled }: Props) {
  return (
    <div className="glass-panel rounded-sm p-6 space-y-4">
      <h2 className="text-[10px] font-bold tracking-wide-extra text-[var(--color-app-text)] opacity-50 uppercase flex items-center gap-2">
        1. Select Active Focus Circuit
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.values(CIRCUITS).map(circuit => {
          const isSelected = selectedId === circuit.id;
          return (
            <button
              key={circuit.id}
              disabled={disabled}
              onClick={() => onSelect(circuit.id)}
              className={`p-4 rounded-sm border transition duration-200 flex items-start gap-4 ${
                isSelected
                  ? 'border-[var(--color-app-accent)] bg-white/5'
                  : 'bg-[var(--color-app-panel)] border-[var(--color-app-border)] hover:border-white/20'
              }`}
            >
              <div className={`h-8 w-8 rounded-full border border-[var(--color-app-border)] flex items-center justify-center shrink-0 ${
                isSelected ? 'text-[var(--color-app-accent)]' : 'opacity-40'
              }`}>
                {ICONS[circuit.icon]}
              </div>
              <div className="space-y-0.5">
                <div className={`text-xs font-bold tracking-wide-extra uppercase ${isSelected ? 'text-[var(--color-app-accent)]' : 'opacity-80'}`}>
                  {circuit.title}
                </div>
                <div className="text-[10px] opacity-40 uppercase tracking-wide">{circuit.subtitle}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
