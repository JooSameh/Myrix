import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'motion/react';

interface CountUpProps {
  to: number;
  from?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const CountUp = ({ 
  to, 
  from = 0,
  suffix = "", 
  prefix = "", 
  duration = 2, 
  className = "" 
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!isInView || !ref.current) return;

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.floor(value)}${suffix}`;
        }
      },
      ease: [0.25, 0.1, 0.25, 1], // Ease out cubic
    });

    return () => controls.stop();
  }, [isInView, from, to, duration, suffix, prefix]);

  return <span ref={ref} className={className}>{prefix}{from}{suffix}</span>;
};
