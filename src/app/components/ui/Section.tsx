import React from 'react';
import { cn } from '../utils/cn';

interface SectionProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ className, id, children, noPadding = false }) => {
  return (
    <section 
      id={id} 
      className={cn(
        "relative w-full overflow-hidden",
        !noPadding && "py-20 md:py-32",
        className
      )}
    >
      {children}
    </section>
  );
};
