import React from 'react';
import { motion } from 'motion/react';

const clients = [
  "TechFlow", "Lumina", "Vertex", "Oasis", "Nebula", "Quantum", "Apex", "Zenith"
];

export const ClientMarquee = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-neutral-950/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10" />
      
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-24 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...clients, ...clients, ...clients].map((client, i) => (
            <span key={i} className="text-2xl md:text-3xl font-bold text-neutral-800 uppercase tracking-tighter hover:text-indigo-900 transition-colors cursor-default select-none">
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
