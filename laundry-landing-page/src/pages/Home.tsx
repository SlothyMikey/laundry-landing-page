import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
