import React from "react";
import { FRAMEWORK } from "./constants";
import * as Icons from "lucide-react";
import { motion } from "motion/react";
import { CTA } from "./CTA";

export function Story() {
  return (
    <div className="pt-40">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-display font-black mb-12 tracking-tighter leading-[0.85]">
            The Narrative <span className="text-brand">Lead</span>
          </h1>
          <p className="text-2xl text-white/60 max-w-3xl leading-relaxed">
            I'm Jayakumar, a Product Manager and Data Architect who believes 
            that the most powerful products are built on a foundation of 
            compelling storytelling and robust data architecture.
          </p>
        </div>
      </section>

      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <img 
              src="https://picsum.photos/seed/jayakumar-story/800/1000" 
              alt="Jayakumar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-xl text-white/60 leading-relaxed"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black mb-10 tracking-tighter text-white">
              The intersection of <span className="text-brand italic">data</span> and <span className="text-brand italic">product</span>.
            </h2>
            <p>
              My journey started with a fascination for how raw numbers could 
              predict outcomes in sports. This curiosity evolved into a 
              career dedicated to building products that make these insights 
              accessible and actionable for everyone from professional scouts 
              to casual fans.
            </p>
            <p>
              I've spent the last 5+ years at the forefront of sports 
              technology, leading cross-functional teams to deliver 
              high-impact products that have collectively reached millions of 
              users and generated significant revenue growth.
            </p>
            <p>
              I don't just manage products; I architect the data systems that 
              power them, ensuring that every feature is grounded in 
              technical feasibility and strategic value.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-32 bg-surface-soft border-y border-surface-border mb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-24 tracking-tighter text-center">
            Strategic <span className="text-brand">Framework</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-surface-border hidden md:block -z-10" />
            
            {FRAMEWORK.map((step, idx) => {
              const Icon = (Icons as any)[step.icon];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-10 rounded-3xl bg-surface border border-surface-border text-center group hover:border-brand/50 transition-all"
                >
                  <div className="w-20 h-20 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-2xl">
                    <Icon size={40} />
                  </div>
                  <h4 className="text-2xl font-display font-black mb-6 tracking-tighter">{step.title}</h4>
                  <p className="text-white/60 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
