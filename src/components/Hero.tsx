'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className='pt-[140px] pb-20 px-10 w-full'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='grid grid-cols-2 gap-[60px] items-center min-h-screen w-full'>
          {/* Hero Content */}
          <div className='hero-content w-full'>
            <h1 className='text-[48px] leading-[1.2] font-bold mb-5 bg-gradient-to-br from-zinc-900 to-zinc-600 bg-clip-text text-transparent'>
              RCC-1
              <br />
              Redefining Performance
            </h1>

            <p className='text-lg text-zinc-600 mb-[30px]'>
              The world&apos;s most advanced gaming mouse. 46 grams of pure
              innovation.
            </p>

            {/* Specs Grid */}
            <div className='grid grid-cols-2 gap-5 my-[30px]' id='specs'>
              <div className='bg-white p-[15px] rounded-lg border border-zinc-200 shadow-sm'>
                <div className='text-2xl font-bold text-primary'>46g</div>
                <div className='text-sm text-zinc-600 mt-[5px]'>
                  Ultra-Light Weight
                </div>
              </div>
              <div className='bg-white p-[15px] rounded-lg border border-zinc-200 shadow-sm'>
                <div className='text-2xl font-bold text-primary'>8000Hz</div>
                <div className='text-sm text-zinc-600 mt-[5px]'>
                  Polling Rate
                </div>
              </div>
              <div className='bg-white p-[15px] rounded-lg border border-zinc-200 shadow-sm'>
                <div className='text-2xl font-bold text-primary'>30K DPI</div>
                <div className='text-sm text-zinc-600 mt-[5px]'>
                  PMW-3950 Sensor
                </div>
              </div>
              <div className='bg-white p-[15px] rounded-lg border border-zinc-200 shadow-sm'>
                <div className='text-2xl font-bold text-primary'>300mAh</div>
                <div className='text-sm text-zinc-600 mt-[5px]'>
                  Battery Life
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className='bg-white p-[30px] rounded-xl border border-zinc-200 shadow-md mt-10'>
              <div className='text-4xl font-bold mb-5'>$399 USD</div>

              <div className='flex gap-5 mb-5'>
                <button className='flex-1 bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-[15px] px-[30px] rounded-lg border border-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 text-lg'>
                  Order Now →
                </button>
                <button className='flex-1 bg-transparent border-2 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-foreground py-[15px] px-[30px] rounded-lg transition-all duration-300 text-lg'>
                  Learn More
                </button>
              </div>

              <div className='text-sm text-zinc-600 mt-[10px]'>
                🚀 Shipping starts January 2025 • Free worldwide shipping on
                orders over $200
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className='hero-image relative p-10 w-full'>
            <div className='relative'>
              <div className='absolute -top-[10px] -right-[10px] bg-foreground text-white px-[15px] py-[5px] rounded-[20px] text-xs font-bold z-10'>
                In Production
              </div>

              <div className='w-[70%] max-w-[280px] h-[400px] mx-auto bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-[45%_45%_45%_45%_/_70%_70%_30%_30%] flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative'>
                <Image
                  alt='ARYE RCC-1 Gaming Mouse'
                  className='rounded-lg object-cover'
                  height={200}
                  priority
                  src='/arye-1.jpg'
                  width={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
