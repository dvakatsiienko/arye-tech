import Contact from '@/components/Contact';
import { Features } from '@/components/Features';
import Hero from '@/components/Hero';
import StickyBuyBar from '@/components/StickyBuyBar';

export default function Home() {
  return (
    <main className='bg-background text-foreground min-h-screen pb-24'>
      <Hero />
      <Features />
      <Contact />
      <StickyBuyBar />
    </main>
  );
}
