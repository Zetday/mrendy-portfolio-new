'use client';
import { Cloud, Terminal, Award, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      icon: <Cloud size={20} className='text-[#FF9900]' />,
      iconBg: 'bg-[#FF9900]/10',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDHeDdQsn-jDSqIcrKrH-TF2znD4qM82EC0mgJhsjwpUv3YfgaRYLvWgd3DufHQrpwL92962s_U8IrEHsFKz6-b7bdRSYPM-GYpJ472Q49JNIQtMIv07UpWMmL5oZ3i4vStl6PmRZrFulUyQ17yY9hZRrSWwnfM8CylYR1JVwgJ8wjZBH01HMKSG_ntBt3LiI-W2Qs0Cmzgv5oIw8UtAiSmkZpwGeJ34FIq7T2c79ckkxfAINT28ztzkmfFbeYkI1sWBfYUEhJ1fz7i',
    },
    {
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      icon: <Terminal size={20} className='text-[#326CE5]' />,
      iconBg: 'bg-[#326CE5]/10',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDuTZoskkgke-fIKlZMarTM-8hZN87PZWYRpkoLQRInENopJcbO0gPg17CDeGEMD1xjFb45V1UyNUCXAzU6NAar-amcmpBUMa2Tj431Quso3UYuG4DcBHJ3FKNmnHHwakqi6-PzG5zrtB4oxEyaFE00yI1sZZOlzMYYACx7AI9cnkSdrZjplCq5-PJwc6vUxLZiERRXmN-Mel1InNOeKXnwSjbh8yrfPCos0TNyo2LqwvI1gCtZBo8ksAXgyYQq8-JUMfFKKTCLMG4X',
    },
  ];

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
