import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../utils/cn';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-white text-black hover:bg-indigo-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
    ghost: "bg-transparent text-white hover:bg-white/10",
    outline: "border border-white/20 text-white hover:border-white hover:bg-white/5",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-2",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-3",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon && <span className="inline-block">{icon}</span>}
    </motion.button>
  );
};
