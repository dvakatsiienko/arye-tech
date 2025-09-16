'use client';

import Image from 'next/image';

import { redirectToCheckout } from '@/lib/checkout';

import { BlueprintFrame } from './BlueprintFrame';

export const Hero = () => {
  return (
    <section
      className='grid pt-[140px] pb-20 px-10 w-full min-h-screen'
      id='hero'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-[60px] items-start w-full'>
          {/* Hero Content */}
          <div className='hero-content w-full lg:col-span-7 grid gap-2'>
            <h1 className='text-[48px] leading-[1.2] font-bold bg-gradient-to-br from-zinc-900 to-zinc-600 bg-clip-text text-transparent'>
              RCC-1
              <br />
              Redefining Performance
            </h1>

            <p className='text-lg text-zinc-600 flex'>
              The world&apos;s most advanced gaming mouse. 46 grams of pure
              innovation.
            </p>

            {/* Specs Grid */}
            <div className='grid grid-cols-2 gap-5 mt-8' id='specs'>
              <div className='bg-white p-[15px] rounded-lg border border-zinc-200 shadow-sm'>
                <div className='text-2xl font-bold text-zinc-900'>46g</div>
                <div className='text-sm text-zinc-600 mt-[5px]'>
                  Ultra-Light Weight
                </div>
              </div>
              <div className='bg-white p-[15px] rounded-lg border border-zinc-200 shadow-sm'>
                <div className='text-2xl font-bold text-zinc-900'>8000Hz</div>
                <div className='text-sm text-zinc-600 mt-[5px]'>
                  Polling Rate
                </div>
              </div>
              <div className='bg-white p-[15px] rounded-lg border border-zinc-200 shadow-sm'>
                <div className='text-2xl font-bold text-zinc-900'>30K DPI</div>
                <div className='text-sm text-zinc-600 mt-[5px]'>
                  PMW-3950 Sensor
                </div>
              </div>
              <div className='bg-white p-[15px] rounded-lg border border-zinc-200 shadow-sm'>
                <div className='text-2xl font-bold text-zinc-900'>300mAh</div>
                <div className='text-sm text-zinc-600 mt-[5px]'>
                  Battery Life
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visuals */}
          <div className='hero-image relative w-full lg:col-span-5 self-end'>
            <div className='flex flex-col gap-4'>
              <BlueprintFrame subtitle='Product Photo' title='ARYE RCC-1'>
                <Image
                  alt='ARYE RCC-1 mouse photo'
                  className='w-full h-auto object-contain'
                  height={900}
                  priority={false}
                  sizes='(min-width: 1024px) 480px, 100vw'
                  src='/arye-11.jpg'
                  width={1440}
                />
              </BlueprintFrame>
            </div>
          </div>
        </div>

        {/* Hero Footer - Compact Payment Section */}
        <div className='mt-12 grid auto-rows-min content-end'>
          <div className='bg-white p-6 rounded-lg border border-zinc-200 shadow-sm'>
            <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
              <div className='flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left'>
                <div className='text-2xl font-bold'>$399 USD</div>
                <div className='text-sm text-zinc-600'>
                  🚀 Shipping September 2025
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
                <button
                  className='bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 px-6 rounded-md shadow-sm transition-all duration-300 hover:-translate-y-0.5 text-sm w-full sm:w-auto'
                  onClick={redirectToCheckout}
                  type='button'>
                  Order Now →
                </button>
                <button
                  className='bg-transparent border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-foreground py-3 px-6 rounded-md transition-all duration-300 text-sm w-full sm:w-auto'
                  type='button'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
