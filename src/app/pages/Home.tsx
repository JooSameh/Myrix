import React from 'react';
import { Section } from '../components/ui/Section';
import { HomeHero } from '../components/home/HomeHero';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { ClientMarquee } from '../components/home/ClientMarquee';
import { Button } from '../components/ui/Button';
import { useRouter } from '../components/utils/Router';
import { motion } from 'motion/react';
import { CountUp } from '../components/ui/CountUp';

export const Home = () => {
  const { navigate } = useRouter();

  return (
    <div className="bg-neutral-950 min-h-screen text-white">
      <HomeHero />
      
      <ClientMarquee />

      <Section>
        <FeaturedProjects />
      </Section>

      {/* About Agency Preview */}
      <Section className="bg-neutral-900/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkYXJrJTIwbW9vZHxlbnwxfHx8fDE3NjU0MzU2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Myrix Studio"
                className="w-full md:w-[90%] rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/10"
              />
              <div className="mt-6 md:mt-0 md:absolute -bottom-6 right-4 bg-neutral-950/95 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4">
                <img
                  src="/assets/aistudio/image_867abc8b.png"
                  alt="Myrix Logo"
                  className="w-12 h-12 object-contain rounded-xl"
                />
                <div>
                  <div className="font-bold text-white tracking-tight">MYRIX AGENCY</div>
                  <div className="text-xs text-indigo-400">Creative · Web &amp; IT · Marketing</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-indigo-500" />
                 <span className="text-sm font-medium text-neutral-400 uppercase tracking-wider">About Myrix</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                One powerhouse agency. <br />
                <span className="text-neutral-500">Every digital discipline.</span>
              </h2>
              <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                Myrix is a full-service creative, technology, and digital growth agency. Our specialized teams across video editing, motion graphics, graphic design, full-stack websites &amp; IT solutions, digital marketing, and social media management partner with ambitious brands to dominate their market.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10 border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">
                    <CountUp to={6} />
                  </h4>
                  <p className="text-sm text-neutral-500">Specialized Divisions</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">
                    <CountUp to={42} suffix="+" />
                  </h4>
                  <p className="text-sm text-neutral-500">Industry Awards</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">
                    <CountUp to={150} suffix="+" />
                  </h4>
                  <p className="text-sm text-neutral-500">Projects Delivered</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">
                    <CountUp to={100} suffix="%" />
                  </h4>
                  <p className="text-sm text-neutral-500">Client Retention</p>
                </div>
              </div>

              <Button variant="outline" onClick={() => navigate('about')}>Discover Myrix</Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="container mx-auto px-6 md:px-12 text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
           <p className="text-neutral-400 max-w-xl mx-auto">What executive partners say about working with the Myrix team.</p>
        </div>
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Myrix rebuilt our entire web & IT infrastructure while overhauling our brand identity. Our conversion rate more than doubled in the first quarter.",
              author: "Sarah Jenkins",
              role: "CEO, TechFlow"
            },
            {
              quote: "Their video editing and 3D motion graphics team delivered commercial campaigns that generated over 2.4M organic views across our launch channels.",
              author: "Marcus Vance",
              role: "CMO, Lumina Studios"
            },
            {
              quote: "Having our social media management, performance marketing, and graphic design under one roof at Myrix scaled our ROAS to 3.8x within 60 days.",
              author: "Elena Rostova",
              role: "VP of Growth, Vertex"
            }
          ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.5 }}
               className="bg-neutral-900 p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors flex flex-col justify-between"
             >
                <div>
                  <div className="flex gap-1 mb-6 text-indigo-400">
                    {"★★★★★"}
                  </div>
                  <p className="text-neutral-300 mb-8 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/aistudio/image_867abc8b.png"
                    alt="Myrix Partner"
                    className="w-10 h-10 rounded-full object-contain bg-neutral-950 p-1.5 border border-white/10"
                  />
                  <div className="text-left">
                    <div className="font-bold text-white">{item.author}</div>
                    <div className="text-xs text-neutral-500">{item.role}</div>
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};
