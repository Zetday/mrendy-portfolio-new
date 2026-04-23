import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className='max-w-7xl mx-auto px-6'>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
