import React from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Download } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="relative bg-neutral-900/80 border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden"
           >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
              <img 
                src="/assets/aistudio/image_867abc8b.png" 
                alt="Myrix Agency Logo" 
                className="w-40 h-40 md:w-52 md:h-52 object-contain rounded-2xl mb-6 relative z-10"
              />
              <h3 className="text-3xl font-bold tracking-tighter mb-2 relative z-10">
                MYRIX<span className="text-indigo-500">.</span>
              </h3>
              <p className="text-sm text-neutral-400 uppercase tracking-widest relative z-10">
                Creative · Web &amp; IT · Digital Marketing Agency
              </p>
           </motion.div>
           <div>
             <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
              >
                We Are <br /><span className="text-indigo-500">Myrix.</span>
             </motion.h1>
             <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
               Myrix is an integrated digital agency uniting six specialized departments: Video Editing, Motion Graphics, Graphic Design, Websites &amp; IT Solutions, Digital Marketing, and Social Media Management.
             </p>
             <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
               We partner with ambitious startups and established enterprises to build high-performance digital platforms, craft unforgettable visual &amp; motion campaigns, and drive measurable revenue growth.
             </p>
             <Button variant="outline" icon={<Download size={18} />}>Download Company Profile</Button>
           </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 mb-24">
           <div>
              <h3 className="text-2xl font-bold mb-8">Our Specialized Divisions</h3>
              <div className="space-y-8">
                 {[
                   { role: 'Websites & Full-Stack IT Solutions', company: 'Custom Web Platforms, E-Commerce & IT Infrastructure', period: 'Engineering Division' },
                   { role: 'Video Editing, Motion & Graphic Design', company: 'Post-Production, 2D/3D Motion Graphics & Brand Identity', period: 'Creative Studio' },
                   { role: 'Digital Marketing & Social Media Specialist', company: 'Performance Ads, Content Strategy & Community Growth', period: 'Growth Division' },
                 ].map((job, i) => (
                   <div key={i} className="border-l-2 border-neutral-800 pl-6 py-1">
                      <h4 className="text-xl font-bold">{job.role}</h4>
                      <p className="text-indigo-400">{job.company}</p>
                      <p className="text-neutral-500 text-sm mt-1">{job.period}</p>
                   </div>
                 ))}
              </div>
           </div>
           
           <div>
              <h3 className="text-2xl font-bold mb-8">Agency Recognition</h3>
              <div className="space-y-6">
                 {[
                   { award: 'Agency of the Year Nominee', org: 'Awwwards', year: '2025' },
                   { award: 'Best Integrated Digital Campaign', org: 'Webby Awards', year: '2024' },
                   { award: 'Excellence in Web & Motion Systems', org: 'CSS Design Awards', year: '2024' },
                 ].map((award, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <div>
                        <h4 className="text-lg font-bold">{award.award}</h4>
                        <p className="text-neutral-500">{award.org}</p>
                      </div>
                      <span className="text-neutral-600 font-mono">{award.year}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
