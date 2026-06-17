import { Activity, Play, Square } from 'lucide-react';
import { Circuit } from '../data';

interface Props {
  selectedCircuit: Circuit | null;
  isRunning: boolean;
  timeLeft: number;
  onToggle: () => void;
}

export default function SessionPlayer({ selectedCircuit, isRunning, timeLeft, onToggle }: Props) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="glass-panel rounded-sm p-6 flex flex-col items-center text-center relative overflow-hidden">
      <h2 className="text-[10px] font-bold tracking-wide-extra text-[var(--color-app-text)] opacity-50 uppercase mb-8 flex items-center gap-2">
        <Activity className="w-3.5 h-3.5" /> 2. Subconscious Seeding System
      </h2>

      <div className="relative w-44 h-44 flex items-center justify-center mb-6">
        <div className={`absolute inset-0 rounded-full border transition-all duration-1000 ${isRunning ? 'border-[var(--color-app-accent)] scale-105 opacity-50' : 'border-[var(--color-app-border)]'}`}></div>
        <div className="text-center space-y-1">
          <div className="text-3xl font-light tracking-wide text-[var(--color-app-text)] font-mono">{timeDisplay}</div>
          <div className="text-[10px] opacity-50 tracking-wide-extra uppercase">{isRunning ? 'Seeding Mind' : 'Ready'}</div>
        </div>
      </div>

      <div className="w-full bg-[var(--color-app-panel)] border border-[var(--color-app-border)] rounded-sm p-4 mb-6 min-h-[76px] flex items-center justify-center">
        <p className="text-xs italic opacity-70 leading-relaxed max-w-md font-serif">
          {selectedCircuit ? `"${selectedCircuit.mantra}"` : 'Select a focus circuit to initialize the treatment blueprint...'}
        </p>
      </div>

      <button
        disabled={!selectedCircuit}
        onClick={onToggle}
        className={`w-full py-3 text-xs font-bold tracking-wide-extra uppercase rounded-sm transition duration-200 flex items-center justify-center gap-2 ${
          !selectedCircuit 
            ? 'bg-[var(--color-app-panel)] opacity-30 cursor-not-allowed'
            : isRunning
              ? 'bg-white/5 hover:bg-white/10 border border-[var(--color-app-border)]'
              : 'bg-[var(--color-app-accent)] text-[var(--color-app-bg)] hover:bg-[var(--color-app-accent)]/90'
        }`}
      >
        {isRunning ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4" />}
        {isRunning ? 'Terminate Loop' : 'Initialize Session'}
      </button>
    </div>
  );
}
