'use client';

import Image from 'next/image';

export const Blueprint = () => {
  return (
    <section className='py-16 px-6 md:px-10'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-br from-zinc-900 to-zinc-600 bg-clip-text text-transparent'>
          Shape Blueprint
        </h2>

        <div className='rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden'>
          <div className='px-4 py-2 border-b border-zinc-200 text-xs text-zinc-600 flex items-center justify-between'>
            <span>ARYE RCC-1</span>
            <span>Design Reference</span>
          </div>
          <div className='relative w-full bg-zinc-50'>
            <Image
              alt='ARYE RCC-1 light-gray wireframe blueprint'
              className='w-full h-auto'
              height={1440}
              priority={false}
              sizes='(min-width: 1024px) 960px, 100vw'
              src='/arye-2.jpg'
              width={2048}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
