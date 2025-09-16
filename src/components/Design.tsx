/* Core */
'use client';

import Image from 'next/image';

import { BlueprintFrame } from './BlueprintFrame';
import { SectionHeading } from './SectionHeading';

export const Design = () => {
  return (
    <section className='py-16 px-6 md:px-10' id='internal-blueprint'>
      <div className='max-w-6xl mx-auto'>
        <SectionHeading text='Design' />

        <BlueprintFrame subtitle='High Quality Materials' title='ARYE RCC-1'>
          <Image
            alt='ARYE RCC-1 internal component layout'
            className='w-full h-auto object-contain'
            height={900}
            priority={false}
            sizes='(min-width: 1024px) 960px, 100vw'
            src='/arye-9.jpeg'
            width={1440}
          />
        </BlueprintFrame>
      </div>
    </section>
  );
};
