/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Zap, ShieldAlert } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import CircuitSelector from './components/CircuitSelector';
import SessionPlayer from './components/SessionPlayer';
import MatrixGrid from './components/MatrixGrid';
import SubstitutionModal from './components/SubstitutionModal';
import RainingAffirmations from './components/RainingAffirmations';
import { CIRCUITS } from './data';

export default function App() {
  const [selectedCircuitId, setSelectedCircuitId] = useState<string | null>(null);
  const [isSessionRunning, setIsSessionRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200);
  const [matrix, setMatrix] = useState<boolean[]>(Array(60).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('place_of_meeting_matrix');
    if (saved) setMatrix(JSON.parse(saved));
    else setMatrix(Array(60).fill(false));
  }, []);

  const saveMatrix = useCallback((newMatrix: boolean[]) => {
    setMatrix(newMatrix);
    localStorage.setItem('place_of_meeting_matrix', JSON.stringify(newMatrix));
  }, []);

  useEffect(() => {
    let interval: number;
    if (isSessionRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isSessionRunning) {
      setIsSessionRunning(false);
      setTimeLeft(1200);
      const firstOpen = matrix.findIndex(d => !d);
      if (firstOpen !== -1) {
        const newMatrix = [...matrix];
        newMatrix[firstOpen] = true;
        saveMatrix(newMatrix);
        alert('Session complete. Impression dropped.');
      }
    }
    return () => clearInterval(interval);
  }, [isSessionRunning, timeLeft, matrix, saveMatrix]);

  const toggleSession = () => {
    if (isSessionRunning) {
      setIsSessionRunning(false);
      setTimeLeft(1200);
    } else {
      setIsSessionRunning(true);
    }
  };

  const selectedCircuit = selectedCircuitId ? CIRCUITS[selectedCircuitId] : null;

  return (
    <div className="text-[var(--color-app-text)] min-h-screen font-sans flex flex-col antialiased bg-[var(--color-app-bg)] bg-grid">
      <RainingAffirmations />
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-6 space-y-6 pb-24">
        <div className="glass-panel rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[var(--color-app-accent)]">
              <Zap className="w-4 h-4" />
              <h3 className="font-bold text-xs tracking-wide-extra uppercase">Waking Law of Substitution</h3>
            </div>
            <p className="text-xs opacity-70 max-w-xl font-light">
              Intercept doubts and switch thoughts instantly.
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-[var(--color-app-border)] text-xs font-bold tracking-wide-extra uppercase transition duration-200 flex items-center justify-center gap-2 shrink-0"
          >
            <ShieldAlert className="w-4 h-4 text-[var(--color-app-accent)]" />
            Intercept Spiral
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <section className="md:col-span-7 space-y-6">
            <CircuitSelector 
              selectedId={selectedCircuitId} 
              onSelect={setSelectedCircuitId} 
              disabled={isSessionRunning}
            />
            <SessionPlayer 
              selectedCircuit={selectedCircuit}
              isRunning={isSessionRunning}
              timeLeft={timeLeft}
              onToggle={toggleSession}
            />
          </section>
          
          <section className="md:col-span-5">
            <MatrixGrid 
              matrix={matrix} 
              onToggle={(index) => {
                const newMatrix = [...matrix];
                newMatrix[index] = !newMatrix[index];
                saveMatrix(newMatrix);
              }}
              onReset={() => {
                if (confirm('Reset matrix?')) saveMatrix(Array(60).fill(false));
              }}
            />
          </section>
        </div>
      </main>
      
      <SubstitutionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        oppositeMantra={selectedCircuit?.opposite || 'Choose a circuit...'} 
      />
    </div>
  );
}
