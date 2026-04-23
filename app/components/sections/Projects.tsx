'use client';
import { motion } from 'motion/react';
import { FolderOpen, ExternalLink, ChevronRight, Code2 } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Job Portal Architecture",
      description: "A highly scalable job portal backend designed to handle millions of concurrent users. Features complex ERD design and full-text search.",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536ad89?auto=format&fit=crop&q=80&w=800",
      tags: ["PostgreSQL", "Elasticsearch", "Go"],
      links: { source: "#", demo: "#" }
    },
    {
      title: "Student Habit Tracker",
      description: "Analytical platform processing real-world datasets regarding student habits. Built predictive models to uncover behavioral patterns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "Pandas", "React"],
      links: { source: "#", demo: "#" }
    }
  ];

  return (
    <section id="projects" className="py-huge">
      <div className="flex justify-between items-end mb-12">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
            <FolderOpen size={24} />
          </div>
          <h2 className="text-3xl font-bold text-brand-on-surface">Featured Projects</h2>
        </div>
        <a href="#" className="flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all">
          View All <ChevronRight size={18} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl border border-brand-outline-variant overflow-hidden hover-shadow"
          >
            <div className="h-56 overflow-hidden relative">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                {project.title}
              </h3>
            </div>

            <div className="p-8">
              <p className="text-brand-on-surface-variant mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-primary/5 text-brand-primary border border-brand-primary/10">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 pt-6 border-t border-brand-outline-variant">
                <a href={project.links.source} className="flex items-center gap-2 text-brand-primary text-sm font-bold hover:text-brand-on-primary-container">
                  <Code2 size={16} /> View Source
                </a>
                <a href={project.links.demo} className="flex items-center gap-2 text-brand-primary text-sm font-bold hover:text-brand-on-primary-container">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};