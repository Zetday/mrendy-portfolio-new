import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className='max-w-7xl mx-auto px-6'>
        <Hero />
      </main>
    </div>
  );
}
