import React from "react";
import { SKILLS, CERTIFICATIONS } from "./constants";
import * as Icons from "lucide-react";
import { motion } from "motion/react";
import { CTA } from "./CTA";

export function Skills() {
  return (
    <div className="pt-40">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-display font-black mb-12 tracking-tighter leading-[0.85]">
            The Technical <span className="text-brand">Arsenal</span>
          </h1>
          <p className="text-2xl text-white/60 max-w-3xl leading-relaxed">
            A deep dive into the technical stack and strategic methodologies 
            I use to architect high-performance sports data products.
          </p>
        </div>
      </section>

      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skill, idx) => {
            const Icon = (Icons as any)[skill.icon];
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-12 rounded-[40px] bg-surface-soft border border-surface-border hover:border-brand/30 transition-all group"
              >
                <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                
                <h3 className="text-4xl font-display font-black mb-10 tracking-tighter">{skill.category}</h3>
                
                <div className="flex flex-wrap gap-4">
                  {skill.items.map(item => (
                    <span key={item} className="text-lg font-bold text-white/60 border border-white/10 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition-all">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-32 bg-surface-soft border-y border-surface-border mb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-16 tracking-tighter text-center">
            Professional <span className="text-brand">Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-10 rounded-3xl bg-surface border border-surface-border text-center group hover:border-brand/50 transition-all"
              >
                <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform">
                  <Icons.Award size={32} />
                </div>
                <h4 className="text-2xl font-display font-bold mb-4">{cert.name}</h4>
                <p className="text-white/40 font-bold uppercase tracking-widest text-sm mb-2">{cert.issuer}</p>
                <p className="text-brand font-black text-xl">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
