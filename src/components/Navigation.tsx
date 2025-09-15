'use client';

export const Navigation = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-[1000] px-10 py-5 bg-nav-bg backdrop-blur-[10px] border-b border-[var(--nav-border)]'>
      <nav className='max-w-[1200px] mx-auto flex items-center justify-between'>
        <div className='text-2xl font-bold tracking-[2px]'>ARYE</div>

        <ul className='flex items-center gap-[30px] list-none'>
          <li>
            <a
              className='text-muted hover:text-foreground transition-colors duration-300 no-underline'
              href='#specs'>
              Specs
            </a>
          </li>
          <li>
            <a
              className='text-muted hover:text-foreground transition-colors duration-300 no-underline'
              href='#blueprint'>
              Blueprint
            </a>
          </li>
          <li>
            <a
              className='text-muted hover:text-foreground transition-colors duration-300 no-underline'
              href='#features'>
              Features
            </a>
          </li>
          <li>
            <a
              className='text-muted hover:text-foreground transition-colors duration-300 no-underline'
              href='#contact'>
              Contact
            </a>
          </li>
          <li>
            <a
              className='text-white font-medium px-3 py-1.5 rounded-md border border-zinc-900 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 no-underline shadow-sm'
              href='#buy'>
              Buy Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
