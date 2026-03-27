import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function StoryHook() {
  return (
    <section className="py-24 px-6 bg-surface overflow-hidden relative">
      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-full h-full bg-brand/5 blur-[120px] rounded-full -z-10 translate-x-1/2 translate-y-1/2" 
      />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] rounded-[40px] overflow-hidden group shadow-2xl"
        >
          <motion.img 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://picsum.photos/seed/jayakumar/800/1000" 
            alt="Jayakumar"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
          <div className="absolute bottom-12 left-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl font-display font-black text-white tracking-tighter mb-2 italic"
            >
              "The Narrative is the Architecture"
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-brand font-bold uppercase tracking-widest text-sm"
            >
              My Core Philosophy
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 tracking-tighter leading-tight">
            I believe data without <span className="text-brand">storytelling</span> is just noise.
          </h2>
          
          <div className="space-y-6 text-xl text-white/60 leading-relaxed mb-12">
            <p>
              In the world of sports, data is everywhere. But the real value 
              isn't in the raw numbers—it's in the narrative they build. 
              Whether it's a scouting report or a fan engagement app, the 
              story is what makes the data actionable.
            </p>
            <p>
              My role is to bridge the gap between technical complexity and 
              human intuition, architecting systems that don't just process 
              data, but tell a compelling story about performance and potential.
            </p>
          </div>
          
          <button className="inline-flex items-center gap-4 text-2xl font-display font-black text-white hover:text-brand transition-colors group">
            Read The Full Story
            <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
