'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id='main-nav'
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm h-16'
          : 'bg-transparent h-20'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 h-full flex justify-between items-center'>
        <div className='text-xl font-bold tracking-tighter text-brand-on-surface'>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href='/' className='cursor-pointer'>
            Rendy
          </a>
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-md font-medium text-brand-on-surface-variant hover:text-brand-primary relative group'
            >
              {link.name}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full' />
            </a>
          ))}
          <button className='p-2 rounded-full hover:bg-brand-surface-container transition-colors text-brand-on-surface-variant'>
            <Moon size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className='md:hidden flex items-center gap-4'>
          <button className='p-2 rounded-full hover:bg-brand-surface-container transition-colors text-brand-on-surface-variant'>
            <Moon size={20} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='p-2 rounded-lg text-brand-on-surface-variant'
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='absolute top-16 left-0 w-full bg-white border-b border-brand-outline-variant p-6 shadow-lg md:hidden'
          >
            <div className='flex flex-col gap-4'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className='text-lg font-medium text-brand-on-surface hover:text-brand-primary transition-colors'
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
