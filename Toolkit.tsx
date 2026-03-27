import React from "react";
import { SKILLS } from "../constants";
import * as Icons from "lucide-react";
import { motion } from "motion/react";

export function Toolkit() {
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="py-24 px-6 bg-surface-soft">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tighter">
            Strategic <span className="text-brand">Toolkit</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A specialized stack of technical skills and strategic frameworks 
            designed for high-impact product management.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SKILLS.map((skill) => {
            const Icon = (Icons as any)[skill.icon];
            return (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  borderColor: "rgba(255, 77, 0, 0.3)",
                  transition: { duration: 0.3 }
                }}
                className="p-8 rounded-3xl bg-surface border border-surface-border transition-all group"
              >
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-6">{skill.category}</h3>
                
                <ul className="space-y-4">
                  {skill.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-white/60 font-medium">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
