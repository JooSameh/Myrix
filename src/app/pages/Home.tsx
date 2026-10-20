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

      {/* About Preview */}
      <Section className="bg-neutral-900/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1658909835269-e76abd3ffb5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNyZWF0aXZlJTIwZGlyZWN0b3IlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8fHx8MTc2NTQzNTYxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Portrait"
                className="w-full md:w-[80%] rounded-lg grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-indigo-500" />
                 <span className="text-sm font-medium text-neutral-400">About Me</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Obsessed with details. <br />
                <span className="text-neutral-500">Focused on impact.</span>
              </h2>
              <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                Combining expertise across video editing, motion graphics, graphic design, full-stack websites &amp; IT solutions, digital marketing, and social media management to turn ambitious visions into measurable growth.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10 border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">
                    <CountUp to={10} suffix="+" />
                  </h4>
                  <p className="text-sm text-neutral-500">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">
                    <CountUp to={42} />
                  </h4>
                  <p className="text-sm text-neutral-500">Awards Won</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">
                    <CountUp to={85} suffix="+" />
                  </h4>
                  <p className="text-sm text-neutral-500">Projects Launched</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">
                    <CountUp to={100} suffix="%" />
                  </h4>
                  <p className="text-sm text-neutral-500">Client Satisfaction</p>
                </div>
              </div>

              <Button variant="outline" onClick={() => navigate('about')}>More About Me</Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="container mx-auto px-6 md:px-12 text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Words</h2>
        </div>
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.5 }}
               className="bg-neutral-900 p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors"
             >
                <div className="flex gap-1 mb-6 text-indigo-400">
                  {"★★★★★"}
                </div>
                <p className="text-neutral-300 mb-8 leading-relaxed">
                  "Alex transformed our product. The attention to detail and ability to translate complex requirements into a simple, beautiful interface is unmatched."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-700" />
                  <div className="text-left">
                    <div className="font-bold text-white">Sarah Jenkins</div>
                    <div className="text-xs text-neutral-500">CEO, TechFlow</div>
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};
