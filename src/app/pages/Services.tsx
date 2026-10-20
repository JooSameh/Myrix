import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRouter } from '../components/utils/Router';
import { ArrowRight, Check } from 'lucide-react';

export const Services = () => {
  const { navigate } = useRouter();
  
  const services = [
    { title: 'Video Editing', description: 'Cinematic video editing, color grading, sound design, and high-retention commercial & social cuts.', price: 'from $1.5k' },
    { title: 'Motion Graphics', description: 'Dynamic 2D/3D motion graphics, animated explainers, visual effects, and kinetic typography.', price: 'from $2k' },
    { title: 'Graphic Design', description: 'Complete brand identity systems, visual direction, print & digital assets, and creative key visuals.', price: 'from $2k' },
    { title: 'Websites & IT Solutions', description: 'Full-stack website design & development, e-commerce platforms, custom web apps, and complete IT solutions.', price: 'from $4k' },
    { title: 'Digital Marketing', description: 'Data-driven marketing campaigns, performance ads, conversion rate optimization, and growth strategy.', price: 'from $2.5k' },
    { title: 'Social Media Specialist', description: 'End-to-end social media management, content strategy, community growth, and viral campaign execution.', price: 'from $1.8k' },
  ];

  const timeline = [
    { step: '01', title: 'Discovery', desc: 'Understanding your business goals, target audience, and technical requirements.' },
    { step: '02', title: 'Strategy', desc: 'Planning the creative direction, marketing funnel, and technical architecture.' },
    { step: '03', title: 'Execution', desc: 'Crafting the visuals, motion, code, and campaign assets with precision.' },
    { step: '04', title: 'Launch & Scale', desc: 'Deploying, optimizing performance, and scaling your brand impact.' },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-24">
      <div className="container mx-auto px-6 md:px-12 mb-24">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            Capabilities
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Delivering integrated creative production, full-stack websites &amp; IT solutions, and high-conversion marketing &amp; social media growth.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 mb-32">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-10 rounded-2xl bg-neutral-900 border border-white/5 hover:border-indigo-500/50 hover:bg-neutral-900/80 transition-all duration-300"
          >
            <h3 className="text-3xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{service.title}</h3>
            <p className="text-neutral-400 text-lg mb-8">{service.description}</p>
            <div className="flex justify-between items-center">
               <span className="text-neutral-500 font-mono">{service.price}</span>
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
                 <ArrowRight size={16} />
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Section className="bg-neutral-900/30">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold mb-16 text-center">How I Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
             {timeline.map((item, i) => (
               <div key={i} className="relative">
                 <div className="text-6xl font-bold text-neutral-800 mb-6">{item.step}</div>
                 <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                 <p className="text-neutral-400">{item.desc}</p>
                 {i !== timeline.length - 1 && (
                   <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-neutral-800 to-transparent -z-10 translate-x-1/2" />
                 )}
               </div>
             ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-6 md:px-12 bg-indigo-900/20 rounded-3xl p-12 md:p-24 text-center border border-indigo-500/20">
           <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start?</h2>
           <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
             Let's discuss your project and how I can help you achieve your goals.
           </p>
           <Button size="lg" onClick={() => navigate('contact')}>Book a 30-min Discovery Call</Button>
        </div>
      </Section>
    </div>
  );
};
