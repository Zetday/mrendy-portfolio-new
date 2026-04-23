import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='py-12 border-t border-brand-outline-variant bg-white'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='text-xl font-bold tracking-tighter text-brand-on-surface'>
          DevPortfolio
        </div>

        <div className='text-xs font-bold text-brand-secondary uppercase tracking-[0.2em] text-center'>
          © 2024 Sophisticated Engineer. Built with Precision.
        </div>

        <div className='flex gap-6'>
          <Link
            href='https://github.com/Zetday'
            target='_blank'
            rel='noopener noreferrer'
            className='text-brand-on-surface-variant hover:text-brand-primary transition-colors'
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            href='#'
            className='text-brand-on-surface-variant hover:text-brand-primary transition-colors'
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href='#'
            className='text-brand-on-surface-variant hover:text-brand-primary transition-colors'
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
