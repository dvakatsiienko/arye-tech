import { Blueprint } from '@/components/Blueprint';
import { Contact } from '@/components/Contact';
import { Design } from '@/components/Design';
import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero';
import { ProgressFooter } from '@/components/ProgressFooter';
import { StickyBuyBar } from '@/components/StickyBuyBar';

export default function Home() {
  return (
    <main className='bg-background text-foreground min-h-screen pb-24'>
      <Hero />
      <Blueprint />
      <Features />
      <Design />
      <Contact />
      <ProgressFooter />
      <StickyBuyBar />
    </main>
  );
}
