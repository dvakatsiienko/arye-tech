'use client';

import Image from 'next/image';

export const ProgressFooter = () => {
  return (
    <section className='py-12 px-6 md:px-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden'>
          <div className='px-4 py-2 border-b border-zinc-200 text-xs text-zinc-600 flex items-center justify-between'>
            <span>Arye RCC-1</span>
            <span>Development Progress</span>
          </div>
          <div className='relative w-full bg-zinc-50'>
            <Image
              alt='RCC-1 Development Progress'
              className='w-full h-auto object-contain'
              height={500}
              priority={false}
              sizes='(min-width: 1024px) 960px, 100vw'
              src='/arye-10.png'
              width={1500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
