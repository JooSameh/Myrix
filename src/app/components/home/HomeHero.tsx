import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "../utils/Router";

export const HomeHero = () => {
  const { navigate } = useRouter();
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const yBackground = useTransform(
    scrollY,
    [0, 1000],
    [0, 400],
  );
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative h-[110vh] flex items-center overflow-hidden bg-neutral-950"
    >
      {/* Background Layer - Texture/Gradient */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 opacity-90 z-10" />
        <img
          src="https://i.pinimg.com/1200x/15/bd/5e/15bd5e486b8711c761ed385eafa4948c.jpg"
          alt="Texture"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      {/* Floating Elements / Glows */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 pt-20">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-px bg-indigo-500" />
            <span className="text-indigo-400 font-medium tracking-widest text-sm uppercase">
              Creative · Web &amp; IT · Digital Marketing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[1.1] mb-8"
          >
            Crafting work that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
              drives impact.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed mb-10"
          >
            Delivering cinematic video editing, motion graphics, graphic design, full-stack websites &amp; IT solutions, marketing, and social media growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button
              size="lg"
              onClick={() => navigate("contact")}
            >
              Book a Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("work")}
              icon={<ArrowRight size={18} />}
            >
              View Case Studies
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Foreground Parallax Mockup (Subtle) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-0 right-0 w-[80%] md:w-[50%] z-10 hidden md:block pointer-events-none"
      >
        <img
          src="https://i.pinimg.com/1200x/7a/35/d6/7a35d626f12e7bf088d01825a64df964.jpg"
          alt="UI Mockup"
          className="w-full h-auto object-contain drop-shadow-2xl opacity-80 mask-image-gradient-b"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
        />
      </motion.div>
    </div>
  );
};