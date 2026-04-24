'use client';
import { Cloud, Terminal, Award, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { certifications } from '@/app/data/certifications';

export default function Certifications() {
  return (
    <section id='certifications' className='py-huge'>
      <div className='flex justify-between items-end mb-12'>
        <div className='flex items-center gap-3'>
          <div className='p-2 bg-brand-primary/10 rounded-lg text-brand-primary'>
            <Award size={24} />
          </div>
          <h2 className='text-3xl font-bold text-brand-on-surface'>
            Certifications
          </h2>
        </div>
        <a
          href='#'
          className='flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all'
        >
          View All <ChevronRight size={18} />
        </a>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='bg-white rounded-2xl border border-brand-outline-variant overflow-hidden hover-shadow group'
          >
            <div className='h-48 relative overflow-hidden bg-brand-surface-container'>
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
                sizes='(max-width: 768px) 100vw, 50vw'
                referrerPolicy='no-referrer'
              />
            </div>
            <div className='p-6 flex items-center gap-4'>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${cert.iconBg}`}
              >
                {cert.icon}
              </div>
              <div>
                <h4 className='font-bold text-brand-on-surface leading-tight mb-1'>
                  {cert.title}
                </h4>
                <p className='text-sm text-brand-secondary font-medium'>
                  {cert.issuer}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
