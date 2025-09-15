'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className='min-h-screen bg-background flex items-center justify-center px-10'>
      <div className='max-w-[600px] mx-auto text-center'>
        <div className='bg-white p-[40px] rounded-xl border border-zinc-200 shadow-md'>
          <div className='text-6xl mb-6'>🎉</div>
          <h1 className='text-4xl font-bold mb-6 text-foreground'>
            Payment Successful!
          </h1>
          <p className='text-lg text-zinc-600 mb-8'>
            Thank you for your purchase of the{' '}
            <strong>ARYE RCC-1 Gaming Mouse</strong>! Your order has been
            confirmed and you'll receive an email confirmation shortly.
          </p>

          {sessionId && (
            <div className='bg-zinc-50 p-4 rounded-lg mb-8'>
              <p className='text-sm text-zinc-600'>
                Session ID:{' '}
                <code className='bg-zinc-200 px-2 py-1 rounded text-xs'>
                  {sessionId}
                </code>
              </p>
            </div>
          )}

          <div className='flex gap-4 justify-center'>
            <Link
              className='bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3 px-6 rounded-lg border border-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 no-underline'
              href='/'>
              Back to Home
            </Link>
          </div>

          <div className='mt-8 text-sm text-zinc-600'>
            🚀 Shipping starts September 2025 • Free worldwide shipping
          </div>
        </div>
      </div>
    </div>
  );
}
