import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/sections/Pricing';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
    </div>
  );
}
