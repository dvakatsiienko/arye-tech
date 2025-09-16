'use client';

import Image from 'next/image';

import { BlueprintFrame } from './BlueprintFrame';
import { SectionHeading } from './SectionHeading';

export const Blueprint = () => {
  return (
    <section className='py-16 px-6 md:px-10' id='blueprint'>
      <div className='max-w-6xl mx-auto'>
        <SectionHeading text='Blueprint' />

        <BlueprintFrame subtitle='Design Reference' title='ARYE RCC-1'>
          <Image
            alt='ARYE RCC-1 light-gray wireframe blueprint'
            className='w-full h-auto'
            height={1440}
            priority={false}
            sizes='(min-width: 1024px) 960px, 100vw'
            src='/arye-2.jpg'
            width={2048}
          />
        </BlueprintFrame>
      </div>
    </section>
  );
};
