import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  oppositeMantra: string;
}

export default function SubstitutionModal({ isOpen, onClose, oppositeMantra }: Props) {
  const [inputValue, setInputValue] = useState('');
  const [isSubstituted, setIsSubstituted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setIsSubstituted(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-[var(--color-app-bg)]/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center space-y-8 p-6 relative">
        {!isSubstituted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex h-12 w-12 rounded-full border border-[var(--color-app-border)] items-center justify-center mb-2">
                <ShieldAlert className="w-6 h-6 text-rose-500" />
              </div>
              <h2 className="text-xl font-light tracking-wide text-[var(--color-app-text)]">Intercepting Mental Loop</h2>
              <p className="text-xs opacity-60 max-w-sm mx-auto leading-relaxed">
                What limitation is trying to present itself right now?
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleSubmit}
                placeholder="Type the limitation here..."
                className="w-full bg-[var(--color-app-panel)] border border-[var(--color-app-border)] focus:border-[var(--color-app-accent)] focus:ring-1 focus:ring-[var(--color-app-accent)] rounded-sm px-4 py-3 text-sm text-[var(--color-app-text)] placeholder-white/20 focus:outline-none transition duration-150 text-center font-medium"
              />
              <p className="text-[10px] opacity-40 mt-2.5 font-bold tracking-wide-extra uppercase">Press [Enter] to run the chemical substitution protocol</p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="inline-flex h-12 w-12 rounded-full border border-[var(--color-app-border)] items-center justify-center mb-2 animate-bounce">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
              </div>
              <h2 className="text-[10px] font-bold tracking-wide-extra text-emerald-500 uppercase">Substituted Successfully</h2>
              <p className="text-xs opacity-60">The previous thought has been dissolved. Dwell instantly on the truth below:</p>
            </div>

            <div className="bg-[var(--color-app-panel)] border border-[var(--color-app-border)] rounded-sm p-6 shadow-2xl relative overflow-hidden max-w-lg mx-auto">
              <p className="text-lg md:text-xl font-serif text-[var(--color-app-text)] leading-relaxed italic">
                "{oppositeMantra}"
              </p>
            </div>

            <div>
              <button
                onClick={() => {
                  setIsSubstituted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-[var(--color-app-border)] text-[var(--color-app-text)] text-xs font-bold tracking-wide-extra uppercase rounded-sm transition duration-150"
              >
                Return in Confidence
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
