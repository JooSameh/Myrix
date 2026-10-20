import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds total loading time
    const steps = 20;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration + 500); // Slight delay after reaching 100%

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950 text-white"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Percentage Counter */}
      <div className="absolute bottom-12 right-12 text-6xl md:text-8xl font-bold font-display tracking-tighter opacity-20">
        {count}%
      </div>

      {/* Center Brand */}
      <div className="relative overflow-hidden flex flex-col items-center gap-5">
        <motion.img
          src="/assets/aistudio/image_867abc8b.png"
          alt="Myrix Logo"
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-2xl"
        />
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="text-4xl md:text-6xl font-bold tracking-tighter"
        >
          MYRIX<span className="text-indigo-500">.</span>
        </motion.h1>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-indigo-500 transition-all duration-300 ease-out" style={{ width: `${count}%` }} />
    </motion.div>
  );
};
