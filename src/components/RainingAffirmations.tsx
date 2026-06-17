import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { CIRCUITS } from "../data";

const statements = Object.values(CIRCUITS).flatMap(c => [
  c.mantra,
  c.opposite
]);

export default function RainingAffirmations() {
  const [items, setItems] = useState<{ id: number; text: string; left: string; duration: number; startX: number; endX: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: statements[Math.floor(Math.random() * statements.length)],
          left: `${Math.random() * 90 + 5}%`,
          duration: Math.random() * 15 + 10,
          startX: Math.random() * 200 - 100,
          endX: Math.random() * 400 - 200,
        }
      ].filter(item => item.id > Date.now() - 20000)); // Remove old items
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map(item => (
        <motion.div
          key={item.id}
          initial={{ y: -50, x: item.startX, opacity: 0 }}
          animate={{ y: "100vh", x: item.endX, opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: item.duration, ease: "linear" }}
          className="absolute text-[10px] font-mono text-white/10 whitespace-nowrap"
          style={{ left: item.left }}
        >
          {item.text}
        </motion.div>
      ))}
    </div>
  );
}
