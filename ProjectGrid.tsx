import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

export function ProjectGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-24 px-6 bg-surface-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tighter">
              Products I've <span className="text-brand">Shaped</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed">
              A selection of strategic projects where data architecture met 
              user-centric product design to deliver measurable impact.
            </p>
          </div>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-brand hover:text-white transition-all">
            View All
          </button>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-surface border border-surface-border rounded-3xl overflow-hidden hover:border-brand/50 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/60 mb-8 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 border-t border-surface-border pt-6">
                  {project.stats.map(stat => (
                    <div key={stat.label}>
                      <div className="text-lg font-display font-black text-brand">{stat.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <button className="absolute top-6 right-6 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-brand hover:text-white">
                  <ArrowUpRight size={24} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
