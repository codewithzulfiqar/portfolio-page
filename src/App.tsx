import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { PROJECTS, SKILLS, BLOG_POSTS } from './constants';
import { Mail, Phone, Download, Github, ExternalLink } from 'lucide-react';

const CustomCursor = () => {
  const cursorX = useSpring(0, { damping: 20, stiffness: 200 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 200 });
  const outlineX = useSpring(0, { damping: 30, stiffness: 150 });
  const outlineY = useSpring(0, { damping: 30, stiffness: 150 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
      outlineX.set(e.clientX - 20);
      outlineY.set(e.clientY - 20);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, outlineX, outlineY]);

  return (
    <>
      <motion.div id="custom-cursor" style={{ x: cursorX, y: cursorY }} />
      <motion.div id="custom-cursor-outline" style={{ x: outlineX, y: outlineY }} />
    </>
  );
};

export default function App() {
  return (
    <div className="min-h-screen pt-24 pb-12 overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[320px_1fr_300px] gap-8 md:gap-10">
        
        {/* Left Column: Profile & Contact */}
        <div className="flex flex-col gap-6">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
          >
            <h2>Profile</h2>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Frontend Architect</h1>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Crafting high-performance, accessible digital experiences with a focus on modern React patterns and design systems.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card"
          >
            <h2>Skills</h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span 
                  key={skill.name}
                  className="px-3 py-1.5 bg-[#0d9488]/10 border border-[#0d9488]/20 rounded-md text-[#14b8a6] text-[0.7rem] font-bold"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card lg:mt-auto flex flex-col gap-4"
          >
            <h2>Inquiries</h2>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@zulfiqar.dev" className="flex items-center gap-3 text-xs font-mono text-[#f8fafc] hover:text-[#14b8a6] transition-colors">
                <Mail className="w-4 h-4" /> zulfiqar@dev.io
              </a>
              <a href="tel:+442079460123" className="flex items-center gap-3 text-xs font-mono text-[#f8fafc] hover:text-[#14b8a6] transition-colors">
                <Phone className="w-4 h-4" /> +44 20 7946 0123
              </a>
            </div>
            <button className="mt-2 w-full py-3 bg-[#0d9488] hover:bg-[#0f766e] text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Download CV
            </button>
          </motion.section>
        </div>

        {/* Middle Column: Works */}
        <div className="flex flex-col gap-6">
          <motion.section 
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card flex-1"
          >
            <h2>Selected Works</h2>
            <div className="flex flex-col gap-8 mt-6">
              {PROJECTS.map((project, i) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="grid grid-cols-[80px_1fr] gap-6 group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-[#0d0d0e] border border-[#134e4a] rounded-lg overflow-hidden flex items-center justify-center text-3xl transition-transform group-hover:scale-105">
                    {i === 0 ? '◈' : i === 1 ? '◌' : '▲'}
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold group-hover:text-[#14b8a6] transition-colors">{project.title}</h3>
                      <div className="flex gap-2">
                        {project.github && <Github className="w-4 h-4 text-[#94a3b8] hover:text-white" />}
                        {project.link && <ExternalLink className="w-4 h-4 text-[#94a3b8] hover:text-white" />}
                      </div>
                    </div>
                    <p className="text-sm text-[#94a3b8] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right Column: Insights */}
        <div className="flex flex-col gap-6">
          <motion.section 
            id="blog"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card flex-1"
          >
            <h2>Insights</h2>
            <div className="flex flex-col mt-4">
              {BLOG_POSTS.map((post, i) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className="py-5 border-b border-[#134e4a] last:border-0 group cursor-pointer"
                >
                  <span className="text-[0.65rem] font-bold text-[#0d9488] uppercase mb-1 block">
                    {post.date}
                  </span>
                  <h3 className="text-[0.95rem] font-medium text-[#f8fafc] group-hover:text-[#14b8a6] transition-colors leading-snug">
                    {post.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-[#134e4a] flex flex-col md:flex-row justify-between items-center gap-4 text-[0.7rem] text-[#94a3b8] uppercase tracking-widest font-bold">
        <span>© 2026 Zulfiqar Ali</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#14b8a6]">Twitter</a>
          <a href="#" className="hover:text-[#14b8a6]">LinkedIn</a>
          <a href="#" className="hover:text-[#14b8a6]">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
