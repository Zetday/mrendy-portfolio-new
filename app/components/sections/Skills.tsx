'use client';
import { Code2, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { skillCategories, languages } from '@/app/data/skills';

export default function Skills() {
  return (
    <section id='skills' className='py-huge'>
      <div className='flex items-center gap-3 mb-12'>
        <div className='p-2 bg-brand-primary/10 rounded-lg text-brand-primary'>
          <Code2 size={24} />
        </div>
        <h2 className='text-3xl font-bold text-brand-on-surface'>
          Technical Arsenal
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Languages Bento Item */}
        <div className='md:col-span-2 bg-[#111827] rounded-2xl p-8 border border-gray-800 flex flex-col justify-between h-full group'>
          <div>
            <div className='flex items-center gap-3 mb-8'>
              <div className='text-indigo-400'>
                <Terminal size={20} />
              </div>
              <h3 className='text-xl font-bold text-white'>
                Languages & Core Stack
              </h3>
            </div>

            <div className='font-mono text-sm space-y-2 mb-8'>
              <p className='text-indigo-400'>
                const <span className='text-blue-300'>stack</span> = {'{'}
              </p>
              <p className='pl-6 text-gray-400'>
                languages: [<span className='text-green-300'>&apos;TypeScript&apos;</span>
                , <span className='text-green-300'>&apos;Go&apos;</span>,{' '}
                <span className='text-green-300'>&apos;Python&apos;</span>],
              </p>
              <p className='pl-6 text-gray-400'>
                backend: [<span className='text-green-300'>&apos;NodeJS&apos;</span>,{' '}
                <span className='text-green-300'>&apos;Fiber&apos;</span>],
              </p>
              <p className='pl-6 text-gray-400'>
                cloud: [<span className='text-green-300'>&apos;AWS&apos;</span>,{' '}
                <span className='text-green-300'>&apos;Kubernetes&apos;</span>]
              </p>
              <p className='text-indigo-400'>{'}'};</p>
            </div>
          </div>

          <div className='flex flex-wrap gap-3'>
            {languages.map((lang) => (
              <span
                key={lang}
                className='px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 text-xs font-semibold group-hover:border-indigo-500/50 transition-colors'
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Other Categories */}
        <div className='flex flex-col gap-6'>
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='bg-white p-6 rounded-2xl border border-brand-outline-variant hover-shadow flex-grow'
            >
              <div className='flex items-center gap-3 mb-6 text-brand-primary'>
                {cat.icon}
                <h3 className='font-bold text-brand-on-surface'>{cat.title}</h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className='px-3 py-1.5 rounded-full bg-brand-primary/5 text-brand-primary text-xs font-semibold border border-brand-primary/10'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
