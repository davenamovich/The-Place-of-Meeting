import { Calendar, Check, RefreshCw } from 'lucide-react';

interface Props {
  matrix: boolean[];
  onToggle: (index: number) => void;
  onReset: () => void;
}

export default function MatrixGrid({ matrix, onToggle, onReset }: Props) {
  const completedCount = matrix.filter(Boolean).length;

  return (
    <div className="glass-panel rounded-sm p-6 space-y-4 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="text-[10px] font-bold tracking-wide-extra text-[var(--color-app-text)] opacity-50 uppercase flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5" /> 60-Session Matrix
        </h2>
        <span className="text-[10px] bg-white/5 border border-[var(--color-app-border)] font-mono px-2 py-0.5 rounded-sm">
          {completedCount} / 60 Sessions
        </span>
      </div>

      <p className="text-[11px] opacity-70 leading-relaxed font-light">
        Consistency forms the physical impression. Morning and evening sessions are mandatory for maximum subconscious penetration.
      </p>

      <div className="grid grid-cols-6 gap-2 py-2 flex-1 items-center">
        {matrix.map((isCompleted, index) => (
          <button
            key={index}
            onClick={() => onToggle(index)}
            className={`aspect-square rounded-sm border flex flex-col items-center justify-center relative transition duration-200 ${
              isCompleted 
                ? 'bg-[var(--color-app-accent)]/20 border-[var(--color-app-accent)] text-[var(--color-app-accent)]' 
                : 'bg-[var(--color-app-panel)] border-[var(--color-app-border)] hover:border-white/20'
            }`}
          >
            <span className="text-[10px] font-mono font-bold">{index + 1}</span>
            {isCompleted && <Check className="w-2.5 h-2.5 absolute bottom-1 right-1" />}
          </button>
        ))}
      </div>

      <div className="pt-2 border-t border-[var(--color-app-border)] flex justify-end">
        <button
          onClick={onReset}
          className="text-[10px] opacity-40 hover:opacity-100 transition duration-150 flex items-center gap-1.5 uppercase tracking-wide-extra font-bold"
        >
          <RefreshCw className="w-3 h-3" />
          Reset Matrix
        </button>
      </div>
    </div>
  );
}
