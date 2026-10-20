import React from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Download } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
           >
              <img 
                src="https://images.unsplash.com/photo-1658909835269-e76abd3ffb5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNyZWF0aXZlJTIwZGlyZWN0b3IlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc2NTQzNTYxNXww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Portrait" 
                className="w-full rounded-lg shadow-2xl"
              />
           </motion.div>
           <div>
             <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
              >
                Beyond the <br /><span className="text-indigo-500">Pixels.</span>
             </motion.h1>
             <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
               Specializing in Video Editing, Motion Graphics, Graphic Design, Websites &amp; IT Solutions, Digital Marketing, and Social Media Management — turning ambitious ideas into high-performing visual and technical experiences.
             </p>
             <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
               Over the past decade, we've partnered with startups and enterprise brands alike, helping them build scalable web &amp; IT platforms, produce standout creative visuals &amp; motion, and scale their social media and marketing reach.
             </p>
             <Button variant="outline" icon={<Download size={18} />}>Download Profile</Button>
           </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 mb-24">
           <div>
              <h3 className="text-2xl font-bold mb-8">Core Expertise</h3>
              <div className="space-y-8">
                 {[
                   { role: 'Websites & Full-Stack IT Solutions', company: 'Web Development, Systems & Cloud Architecture', period: 'Full Lifecycle' },
                   { role: 'Video Editing, Motion & Graphic Design', company: 'Post-Production, 2D/3D Motion & Brand Identity', period: 'Creative Production' },
                   { role: 'Digital Marketing & Social Media Specialist', company: 'Performance Campaigns, Content & Growth Strategy', period: 'Brand Scaling' },
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
              <h3 className="text-2xl font-bold mb-8">Awards & Recognition</h3>
              <div className="space-y-6">
                 {[
                   { award: 'Site of the Day', org: 'Awwwards', year: '2023' },
                   { award: 'Best Mobile UX', org: 'Webby Awards', year: '2022' },
                   { award: 'Developer Choice', org: 'CSS Design Awards', year: '2021' },
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
