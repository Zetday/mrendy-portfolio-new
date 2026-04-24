'use client';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { experiences } from '@/app/data/experience';

export default function Experience() {
  return (
    <section id='experience' className='py-huge'>
      <div className='flex items-center gap-3 mb-12'>
        <div className='p-2 bg-brand-primary/10 rounded-lg text-brand-primary'>
          <Terminal size={24} />
        </div>
        <h2 className='text-3xl font-bold text-brand-on-surface'>Experience</h2>
      </div>

      <div className='relative pl-8 space-y-12 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-outline-variant'>
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative p-8 rounded-2xl border border-brand-outline-variant bg-white hover-shadow ${exp.isCurrent ? 'border-brand-primary/30 ring-1 ring-brand-primary/10' : ''}`}
          >
            <div
              className={`absolute -left-[41px] top-8 w-4 h-4 rounded-full border-4 border-brand-surface transition-colors ${exp.isCurrent ? 'bg-brand-primary' : 'bg-brand-outline-variant'}`}
            />

            <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6'>
              <div>
                <h3 className='text-xl font-bold text-brand-on-surface'>
                  {exp.role}
                </h3>
                <div className='text-brand-secondary font-medium'>
                  {exp.company} • {exp.location}
                </div>
              </div>
              <div
                className={`text-sm font-semibold px-3 py-1 rounded-full ${exp.isCurrent ? 'bg-brand-primary/10 text-brand-primary' : 'bg-brand-surface-container text-brand-on-surface-variant'}`}
              >
                {exp.period}
              </div>
            </div>

            <p className='text-brand-on-surface-variant mb-6 leading-relaxed'>
              {exp.description}
            </p>

            <div className='flex flex-wrap gap-2'>
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className='text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-primary/5 text-brand-primary border border-brand-primary/10'
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
