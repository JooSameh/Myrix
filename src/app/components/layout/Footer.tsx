import React from 'react';
import { useRouter } from '../utils/Router';
import { Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-neutral-950 pt-24 pb-12 border-t border-white/5 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="max-w-2xl mb-12 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              Let's create something <br />
              <span className="text-indigo-500">unforgettable</span> together.
            </h2>
            <button 
              onClick={() => navigate('contact')}
              className="group flex items-center gap-4 text-xl md:text-2xl font-light border-b border-white/20 pb-2 hover:border-white transition-all hover:pl-4"
            >
              Start a Project
              <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-col gap-8 md:text-right">
            <div>
              <h3 className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Contact</h3>
              <p className="text-lg hover:text-indigo-400 transition-colors cursor-pointer">hello@myrix.com</p>
              <p className="text-lg">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Socials</h3>
              <div className="flex gap-4 md:justify-end">
                <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-neutral-500 text-sm">
          <p>© 2026 Myrix. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
