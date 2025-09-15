'use client';

import Link from 'next/link';

export default function Cancel() {
  return (
    <div className='min-h-screen bg-background flex items-center justify-center px-10'>
      <div className='max-w-[600px] mx-auto text-center'>
        <div className='bg-white p-[40px] rounded-xl border border-zinc-200 shadow-md'>
          <div className='text-6xl mb-6'>⏸️</div>
          <h1 className='text-4xl font-bold mb-6 text-foreground'>
            Payment Cancelled
          </h1>
          <p className='text-lg text-zinc-600 mb-8'>
            Your payment was cancelled. No charges were made to your card. You
            can try again anytime!
          </p>

          <div className='flex gap-4 justify-center'>
            <Link
              className='bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3 px-6 rounded-lg border border-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 no-underline'
              href='/'>
              Back to Home
            </Link>
          </div>

          <div className='mt-8 text-sm text-zinc-600'>
            Need help? Contact our support team.
          </div>
        </div>
      </div>
    </div>
  );
}
