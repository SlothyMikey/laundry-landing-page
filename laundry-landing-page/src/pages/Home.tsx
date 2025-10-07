import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
