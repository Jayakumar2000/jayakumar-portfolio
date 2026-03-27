import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-soft border-t border-surface-border py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 mb-6">
            <span className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white text-sm">JK</span>
            JAYAKUMAR
          </Link>
          <p className="text-white/60 text-lg max-w-md leading-relaxed">
            Turning complex sports data into products people love. Strategically architecting the future of sports technology.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-white/60">
            <li><Link to="/" className="hover:text-brand transition-colors">Home</Link></li>
            <li><Link to="/case-studies" className="hover:text-brand transition-colors">Case Studies</Link></li>
            <li><Link to="/skills" className="hover:text-brand transition-colors">Skills</Link></li>
            <li><Link to="/story" className="hover:text-brand transition-colors">Story</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Connect</h4>
          <div className="flex gap-4 mb-8">
            <a href="https://github.com/Jayakumar2000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center hover:bg-brand transition-all" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jayakumarproductlead/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center hover:bg-brand transition-all" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="tel:+919087059907" className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center hover:bg-brand transition-all" title="Call +91 90870 59907">
              <Phone size={20} />
            </a>
            <a href="mailto:jayakumarm.0801@gmail.com" className="w-10 h-10 rounded-full bg-surface-border flex items-center justify-center hover:bg-brand transition-all" title="Email">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-white/40">© 2026 Jayakumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
