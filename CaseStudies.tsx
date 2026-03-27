import React from "react";
import { PROJECTS } from "../constants";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { CTA } from "../components/CTA";
import { cn } from "../lib/utils";

export function CaseStudies() {
  return (
    <div className="pt-40">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-display font-black mb-12 tracking-tighter leading-[0.85]">
            The Strategic <span className="text-brand">Playbook</span>
          </h1>
          <p className="text-2xl text-white/60 max-w-3xl leading-relaxed">
            Deep dives into the products I've built, the problems I've solved, 
            and the measurable impact delivered through data architecture.
          </p>
        </div>
      </section>

      <section className="px-6 space-y-32 mb-32">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className={cn("order-2 lg:order-1", idx % 2 === 1 ? "lg:order-2" : "lg:order-1")}>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold uppercase tracking-widest text-brand border border-brand/20 bg-brand/5 px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-black mb-8 tracking-tighter">
                {project.title}
              </h2>
              
              <p className="text-xl text-white/60 leading-relaxed mb-12">
                {project.description}
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-12 border-y border-surface-border py-12">
                {project.stats.map(stat => (
                  <div key={stat.label}>
                    <div className="text-3xl md:text-5xl font-display font-black text-brand mb-2">{stat.value}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <button className="inline-flex items-center gap-4 text-2xl font-display font-black text-white hover:text-brand transition-colors group">
                Read Full Case Study
                <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className={cn("relative order-1 lg:order-2", idx % 2 === 1 ? "lg:order-1" : "lg:order-2")}>
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-8 right-8 w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-2xl">
                <ArrowUpRight size={32} />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <CTA />
    </div>
  );
}

