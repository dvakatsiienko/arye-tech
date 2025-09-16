'use client';

import Image from 'next/image';
import { BlueprintFrame } from './BlueprintFrame';

export const ProgressFooter = () => {
  return (
    <section className='py-12 px-6 md:px-10'>
      <div className='max-w-6xl mx-auto'>
        <BlueprintFrame title='Arye RCC-1' subtitle='Development Progress'>
          <Image
            alt='RCC-1 Development Progress'
            className='w-full h-auto object-contain'
            height={500}
            priority={false}
            sizes='(min-width: 1024px) 960px, 100vw'
            src='/arye-10.png'
            width={1500}
          />
        </BlueprintFrame>
      </div>
    </section>
  );
};
