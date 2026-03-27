import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { IMPACT_STATS } from "./constants";
import { cn } from "./utils";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" 
      />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            Product Manager & Data Architect
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-black leading-[0.95] mb-8 tracking-tighter text-balance"
          >
            I turn complex <span className="text-brand">sports data</span> into products people love.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/60 max-w-xl leading-relaxed mb-12"
          >
            Strategically architecting data-driven experiences that drive 
            growth and engagement for global sports organizations.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-6"
          >
            <button className="bg-brand text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group">
              View Case Studies
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-surface-soft border border-surface-border text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-surface-border transition-all">
              The Story
            </button>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4">
          {IMPACT_STATS.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5 + (idx * 0.1),
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={cn(
                "p-8 rounded-3xl border border-surface-border bg-surface-soft flex flex-col justify-center transition-colors hover:border-brand/30",
                idx === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"
              )}
            >
              <div className="text-5xl md:text-7xl font-display font-black text-brand mb-2">{stat.value}</div>
              <div className="text-lg text-white/40 font-medium uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

