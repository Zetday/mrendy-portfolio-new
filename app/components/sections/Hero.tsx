'use client';
import { motion } from 'motion/react';
import { FileText, School } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

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
            Muhammad Rendy
          </h1>
          <p className='text-lg text-brand-on-surface-variant max-w-xl leading-relaxed'>
            6th-semester college student at Politeknik Negeri Banjarmasin,
            passionate about Web and App Development, and always eager to
            explore the latest technologies. I enjoy turning ideas into
            functional and visually appealing digital solutions, and I&apos;m
            continuously learning to improve my skills in coding, design, and
            problem-solving.
          </p>
        </div>

        <div className='flex items-center gap-4 bg-white p-4 rounded-xl border border-brand-outline-variant w-fit'>
          <div className='relative p-3 w-14 h-14'>
            <Image
              src='/logo/poliban.png'
              alt='poliban'
              fill
              className='object-contain'
            />
          </div>
          <div>
            <div className='font-bold text-brand-on-surface'>
              Politeknik Negeri Banjarmasin
            </div>
            <div className='text-sm text-brand-secondary'>
              D4 Sistem Informasi Kota Cerdas • 3.95 GPA
            </div>
          </div>
        </div>

        <div className='flex flex-wrap gap-4'>
          <Link href='' className='inline-flex items-center gap-2 bg-brand-primary text-white font-medium px-6 py-3 rounded-xl hover:bg-brand-primary/90 transition-all custom-shadow'>
            <FileText size={18} />
            Download CV
          </Link>
          <Link href='https://github.com/Zetday' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 border border-brand-primary text-brand-primary font-medium px-6 py-3 rounded-xl hover:bg-brand-primary/5 transition-all'>
            <FaGithub size={18} />
            GitHub
          </Link>
          <Link href='https://www.linkedin.com/in/mrendy-17tech' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 border border-brand-primary text-brand-primary font-medium px-6 py-3 rounded-xl hover:bg-brand-primary/5 transition-all'>
            <FaLinkedin size={18} />
            LinkedIn
          </Link>
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
            src='/profil/pasFoto.jpg'
            alt='Professional Developer'
            fill
            className='object-cover'
            sizes='(max-width: 768px) 256px, 320px'
          />
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-3xl -z-10' />
      </motion.div>
    </section>
  );
}
