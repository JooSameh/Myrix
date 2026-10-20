import React, { useState, useEffect } from 'react';
import { useRouter } from '../utils/Router';
import { useTheme } from '../utils/ThemeContext';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

export const Navbar = () => {
  const { navigate, currentPage } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', value: 'work' },
    { name: 'Services', value: 'services' },
    { name: 'About', value: 'about' },
    { name: 'Contact', value: 'contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-12',
          isScrolled ? 'bg-neutral-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        )}
      >
        <div 
          className="text-2xl font-bold tracking-tighter text-white cursor-pointer z-50 mix-blend-difference"
          onClick={() => navigate('home')}
        >
          MYRIX<span className="text-indigo-500">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => navigate(link.value as any)}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-indigo-400 relative group",
                currentPage === link.value ? "text-white" : "text-neutral-400"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-full h-px bg-indigo-500 transform origin-left transition-transform duration-300",
                currentPage === link.value ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
              )} />
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => navigate('contact')}
            className="ml-4 px-5 py-2.5 text-sm font-medium text-black bg-white rounded-full hover:bg-indigo-500 hover:text-white transition-colors"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden z-50">
          <button
            onClick={toggleTheme}
            className="p-2 text-white"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button 
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-neutral-950 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  navigate(link.value as any);
                  setIsMobileMenuOpen(false);
                }}
                className="text-3xl font-light text-white hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                navigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className="mt-8 px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-indigo-500 hover:text-white transition-colors flex items-center gap-2"
            >
              Start a Project <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
