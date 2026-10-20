import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from '../utils/Router';

const projects = [
  {
    id: 1,
    title: 'Enterprise Web & IT Platform',
    category: 'Websites & IT Solutions',
    image: 'https://images.unsplash.com/photo-1748801584058-29faa47242ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMHV4JTIwZGVzaWduJTIwbW9iaWxlJTIwYXBwJTIwbW9ja3VwfGVufDF8fHx8MTc2NTQzNTYxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    metric: '+42% Conversion Lift'
  },
  {
    id: 2,
    title: 'Brand Identity & Motion Campaign',
    category: 'Graphic Design & Motion Graphics',
    image: 'https://images.unsplash.com/photo-1656340194408-750a488b6a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYWJzdHJhY3QlMjBzaGFwZXN8ZW58MXx8fHwxNzY1NDM1NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    metric: '2.5x Engagement Rate'
  },
  {
    id: 3,
    title: 'Viral Commercial & Social Growth',
    category: 'Video Editing, Marketing & Social Media',
    image: 'https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkYXJrJTIwbW9vZHxlbnwxfHx8fDE3NjU0MzU2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    metric: '3.8x Campaign ROAS'
  }
];

export const FeaturedProjects = () => {
  const { navigate } = useRouter();

  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
          <p className="text-neutral-400">A curation of our best creative, web &amp; IT, and marketing work.</p>
        </div>
        <button 
          onClick={() => navigate('work')}
          className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 ease-[0.22,1,0.36,1] group"
        >
          <span className="font-medium tracking-wide"> All Projects</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-1">
             <path d="M5 12h14" />
             <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="group cursor-pointer"
            onClick={() => navigate('case-study')}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-neutral-900">
              <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/20 z-10 transition-colors duration-500" />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 z-20 bg-neutral-950/80 backdrop-blur text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                View Case Study
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-neutral-500 text-sm uppercase tracking-wide">{project.category}</p>
              </div>
              <div className="text-right hidden sm:block">
                <span className="block text-2xl font-light text-white">{project.metric}</span>
                <span className="text-neutral-500 text-xs">Key Outcome</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center md:hidden">
        <button 
          onClick={() => navigate('work')}
          className="text-white border-b border-white/20 pb-1 hover:border-white transition-all"
        >
          View All Projects
        </button>
      </div>
    </div>
  );
};
