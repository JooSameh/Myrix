import React from 'react';
import { Section } from '../components/ui/Section';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '../components/ui/Button';
import { useRouter } from '../components/utils/Router';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const CaseStudy = () => {
  const { navigate } = useRouter();
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40">
        <button 
          onClick={() => navigate('work')}
          className="bg-black/50 backdrop-blur border border-white/10 p-3 rounded-full hover:bg-white hover:text-black transition-all"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* Hero */}
      <div className="relative h-[80vh] overflow-hidden">
        <motion.div style={{ y: yHero }} className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1748801584058-29faa47242ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMHV4JTIwZGVzaWduJTIwbW9iaWxlJTIwYXBwJTIwbW9ja3VwfGVufDF8fHx8MTc2NTQzNTYxNXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Case Study Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
            >
              <h5 className="text-indigo-400 font-bold uppercase tracking-widest mb-4">Websites &amp; IT • Motion &amp; Marketing</h5>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl">
                Reimagining the future of digital banking.
              </h1>
              <div className="flex flex-wrap gap-8 text-neutral-400 border-t border-white/10 pt-8 max-w-2xl">
                <div>
                  <span className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">Scope</span>
                  <span className="text-white">Web &amp; IT, Motion, Marketing</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">Timeline</span>
                  <span className="text-white">3 Months</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">Stack &amp; Tools</span>
                  <span className="text-white">React, After Effects, Adobe CC</span>
                </div>
                <div className="flex-1 text-right">
                  <Button size="sm" variant="outline" onClick={() => navigate('contact')}>Request similar project</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <Section>
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">The Challenge</h3>
            <p className="text-xl leading-relaxed text-neutral-300">
              The client needed to modernize their legacy banking application to appeal to a younger demographic without alienating existing users. The main goal was to simplify complex financial data into actionable insights.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-400">The Impact</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold mb-1">+42%</div>
                <div className="text-neutral-500">User Retention</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">-30%</div>
                <div className="text-neutral-500">Support Tickets</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">4.8/5</div>
                <div className="text-neutral-500">App Store Rating</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Visuals */}
      <div className="space-y-8 md:space-y-16 pb-16">
         <div className="container mx-auto px-6 md:px-12">
            <img 
               src="https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkYXJrJTIwbW9vZHxlbnwxfHx8fDE3NjU0MzU2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
               className="w-full rounded-2xl border border-white/5" 
               alt="Process"
            />
         </div>
         <div className="bg-neutral-900 py-20">
            <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
               <div className="md:col-span-1">
                 <h3 className="text-3xl font-bold mb-6">Visual Language</h3>
                 <p className="text-neutral-400">We established a dark-mode first design system to convey premium quality and reduce eye strain for heavy users.</p>
               </div>
               <div className="md:col-span-2 grid grid-cols-2 gap-4">
                 <div className="bg-neutral-800 h-40 rounded-lg"></div>
                 <div className="bg-indigo-600 h-40 rounded-lg"></div>
                 <div className="bg-neutral-700 h-40 rounded-lg"></div>
                 <div className="bg-white h-40 rounded-lg"></div>
               </div>
            </div>
         </div>
         <div className="container mx-auto px-6 md:px-12">
            <img 
               src="https://images.unsplash.com/photo-1656340194408-750a488b6a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjU0MzU2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
               className="w-full rounded-2xl border border-white/5" 
               alt="Final UI"
            />
         </div>
      </div>

      {/* Next Project */}
      <div className="border-t border-white/10 mt-20">
         <div 
           className="container mx-auto px-6 md:px-12 py-24 cursor-pointer group"
           onClick={() => {
             window.scrollTo(0,0);
             // Simulate loading new content
           }}
         >
           <p className="text-neutral-500 mb-4">Next Project</p>
           <h2 className="text-4xl md:text-6xl font-bold group-hover:text-indigo-400 transition-colors flex items-center gap-4">
             Luxury E-Commerce <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0" />
           </h2>
         </div>
      </div>
    </div>
  );
};
