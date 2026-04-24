import Navbar from '@/app/components/layout/Navbar';
import Hero from '@/app/components/sections/Hero';
import Experience from '@/app/components/sections/Experience';
import Skills from '@/app/components/sections/Skills';
import Projects from '@/app/components/sections/Projects';
import Certifications from '@/app/components/sections/Certifications';
import Contact from '@/app/components/sections/Contact';
import Footer from '@/app/components/layout/Footer';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className='max-w-7xl mx-auto px-6'>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
