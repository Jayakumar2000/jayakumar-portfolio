import React from "react";
import { ArrowRight, Mail, Linkedin, Github, Phone } from "lucide-react";
import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="py-32 px-6 bg-brand relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full bg-white/10 blur-[120px] rounded-full -z-10 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-12 tracking-tighter leading-[0.9]">
            Let's build the <span className="text-black italic">next</span> big thing.
          </h2>
          <p className="text-2xl text-white/80 max-w-2xl mx-auto mb-16 leading-relaxed">
            Ready to transform your sports data into a competitive advantage? Let's connect and discuss your next strategic move.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            <motion.a
              href="mailto:jayakumarm.0801@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-brand px-12 py-6 rounded-full text-2xl font-black transition-all flex items-center gap-4 group shadow-2xl"
            >
              Get In Touch
              <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/15axp0cfpR_S3FaWdFPFE8qkT3VCiZMrt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-12 py-6 rounded-full text-2xl font-black hover:bg-white hover:text-black transition-all shadow-2xl"
            >
              Download CV
            </motion.a>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { icon: Mail, label: "jayakumarm.0801@gmail.com", href: "mailto:jayakumarm.0801@gmail.com" },
              { icon: Phone, label: "+91 90870 59907", href: "tel:+919087059907" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jayakumarproductlead/" },
              { icon: Github, label: "GitHub", href: "https://github.com/Jayakumar2000" },
            ].map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <item.icon size={24} />
                <span className="text-lg font-bold">{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
