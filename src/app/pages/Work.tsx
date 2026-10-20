import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'motion/react';
import { useRouter } from '../components/utils/Router';

const projects = [
  { id: 1, title: 'Enterprise Web & IT Platform', category: 'Websites & IT', type: 'Websites & IT', image: 'https://images.unsplash.com/photo-1748801584058-29faa47242ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMHV4JTIwZGVzaWduJTIwbW9iaWxlJTIwYXBwJTIwbW9ja3VwfGVufDF8fHx8MTc2NTQzNTYxNXww&ixlib=rb-4.1.0&q=80&w=1080', outcome: '+40% Retention' },
  { id: 2, title: 'Brand Identity & Key Visuals', category: 'Graphic Design', type: 'Graphic Design', image: 'https://images.unsplash.com/photo-1656340194408-750a488b6a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYWJzdHJhY3QlMjBzaGFwZXN8ZW58MXx8fHwxNzY1NDM1NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080', outcome: '2.5x Conv. Rate' },
  { id: 3, title: 'Cinematic Brand Commercial', category: 'Video Editing', type: 'Video Editing', image: 'https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkYXJrJTIwbW9vZHxlbnwxfHx8fDE3NjU0MzU2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', outcome: '2.4M+ Views' },
  { id: 4, title: '3D Kinetic Product Launch', category: 'Motion Graphics', type: 'Motion Graphics', image: 'https://images.unsplash.com/photo-1748801584058-29faa47242ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMHV4JTIwZGVzaWduJTIwbW9iaWxlJTIwYXBwJTIwbW9ja3VwfGVufDF8fHx8MTc2NTQzNTYxNXww&ixlib=rb-4.1.0&q=80&w=1080', outcome: '+65% Engagement' },
  { id: 5, title: 'Omnichannel Growth Campaign', category: 'Marketing', type: 'Marketing', image: 'https://images.unsplash.com/photo-1656340194408-750a488b6a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYWJzdHJhY3QlMjBzaGFwZXN8ZW58MXx8fHwxNzY1NDM1NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080', outcome: '3.8x ROAS' },
  { id: 6, title: 'Viral Social Media Growth', category: 'Social Media', type: 'Social Media', image: 'https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkYXJrJTIwbW9vZHxlbnwxfHx8fDE3NjU0MzU2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', outcome: '+180K Followers' },
];

const filters = ['All', 'Video Editing', 'Motion Graphics', 'Graphic Design', 'Websites & IT', 'Marketing', 'Social Media'];

export const Work = () => {
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter || p.type === activeFilter); // Simplified matching for demo

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24">
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
        >
          Selected Work
        </motion.h1>
        
        <div className="flex flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeFilter === filter 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pb-24">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="group cursor-pointer"
            onClick={() => navigate('case-study')}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-neutral-900 group-hover:shadow-2xl group-hover:shadow-indigo-900/20 transition-all duration-500">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white border border-white px-6 py-2 rounded-full backdrop-blur-md">View Case Study</span>
              </div>
            </div>
            
            <div className="flex justify-between items-start border-t border-white/10 pt-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-neutral-500">{project.category}</p>
              </div>
              <div className="text-right">
                <span className="block font-medium text-indigo-400">{project.outcome}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
