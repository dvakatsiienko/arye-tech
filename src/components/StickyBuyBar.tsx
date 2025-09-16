'use client';

import { redirectToCheckout } from '@/lib/checkout';

export const StickyBuyBar = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-[999] bg-white/90 backdrop-blur-[10px] border-t border-zinc-200 px-4 py-4'>
      <div className='max-w-[1200px] mx-auto w-full'>
        {/* Desktop: Horizontal Layout */}
        <div className='items-center justify-end sm:justify-between flex w-full'>
          {/* Product Specs */}
          <div className='sm:flex hidden items-center gap-[30px] text-sm'>
            <span className='text-zinc-600'>
              <strong className='text-primary'>RCC-1</strong> Gaming Mouse
            </span>
            <span className='text-zinc-600'>
              <strong className='text-primary'>46g</strong> Weight
            </span>
            <span className='text-zinc-600'>
              <strong className='text-primary'>8000Hz</strong> Polling
            </span>
          </div>

          {/* Price and Buy Button */}
          <div className='flex items-center gap-[15px]'>
            <span className='text-2xl font-bold'>$399</span>
            <button
              className='bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3 px-6 rounded-lg border border-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 m-0'
              onClick={redirectToCheckout}
              type='button'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
