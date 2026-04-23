'use client';
import { motion } from 'motion/react';
import { FileText, School } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id='hero'
      className='py-huge grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className='flex flex-col gap-8'
      >
        <div>
          <span className='text-sm font-semibold text-brand-primary uppercase tracking-widest mb-2 block'>
            Hello, I am
          </span>
          <h1 className='text-5xl md:text-6xl text-brand-on-surface mb-6 leading-tight'>
            Backend Architect & <br />
            <span className='text-brand-primary'>Data Analyst</span>
          </h1>
          <p className='text-lg text-brand-on-surface-variant max-w-xl leading-relaxed'>
            Designing robust, scalable architectures and extracting actionable
            insights from complex datasets. Specializing in high-performance
            APIs and automated data pipelines.
          </p>
        </div>

        <div className='flex items-center gap-4 bg-brand-surface-container-low p-4 rounded-xl border border-brand-outline-variant w-fit'>
          <div className='p-3 bg-brand-primary/10 rounded-lg text-brand-primary'>
            <School size={24} />
          </div>
          <div>
            <div className='font-bold text-brand-on-surface'>
              Top University
            </div>
            <div className='text-sm text-brand-secondary'>
              B.S. Computer Science • 3.9 GPA
            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-4'>
          <button className='inline-flex items-center gap-2 bg-brand-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-brand-primary/90 transition-all custom-shadow'>
            <FileText size={18} />
            Download CV
          </button>
          <button className='inline-flex items-center gap-2 border border-brand-primary text-brand-primary font-medium px-6 py-3 rounded-xl hover:bg-brand-primary/5 transition-all'>
            <FaGithub size={18} />
            GitHub
          </button>
          <button className='inline-flex items-center gap-2 border border-brand-primary text-brand-primary font-medium px-6 py-3 rounded-xl hover:bg-brand-primary/5 transition-all'>
            <FaLinkedin size={18} />
            LinkedIn
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='relative flex justify-center md:justify-end'
      >
        <div className='w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden relative z-10 custom-shadow border-4 border-white'>
          <Image
            src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
            alt='Professional Developer'
            fill
            className='object-cover'
            sizes="(max-width: 768px) 256px, 320px"
          />
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-3xl -z-10' />
      </motion.div>
    </section>
  );
}
