'use client';

import { useState } from 'react';
import { useScrollLock } from 'usehooks-ts';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { redirectToCheckout } from '@/lib/checkout';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scrolling when mobile menu is open
  const { lock, unlock } = useScrollLock({
    autoLock: false,
  });

  const handlePopoverChange = (open: boolean) => {
    setIsOpen(open);
    if (open) lock();
    if (!open) unlock();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handlePopoverChange(false); // Properly close and unlock scroll
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-[1000] px-4 sm:px-10 py-5 bg-nav-bg backdrop-blur-[10px] border-b border-[var(--nav-border)]'>
      <nav className='max-w-[1200px] mx-auto flex items-center justify-between'>
        {/* Logo */}
        <button
          className='cursor-pointer group bg-transparent border-none p-0'
          onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
          type='button'>
          <Logo />
        </button>

        {/* Desktop Navigation */}
        <ul className='hidden lg:flex items-center gap-[30px] list-none text-sm'>
          <li>
            <a
              className='text-zinc-800 hover:text-foreground transition-colors duration-300 no-underline'
              href='#hero'>
              Specs
            </a>
          </li>
          <li>
            <a
              className='text-zinc-800 hover:text-foreground transition-colors duration-300 no-underline'
              href='#blueprint'>
              Blueprint
            </a>
          </li>
          <li>
            <a
              className='text-zinc-800 hover:text-foreground transition-colors duration-300 no-underline'
              href='#features'>
              Features
            </a>
          </li>
          <li>
            <a
              className='text-zinc-800 hover:text-foreground transition-colors duration-300 no-underline'
              href='#design'>
              Design
            </a>
          </li>
          <li>
            <a
              className='text-zinc-800 hover:text-foreground transition-colors duration-300 no-underline'
              href='#contact'>
              Contact
            </a>
          </li>
          <li>
            <button
              className='text-white font-medium px-3 py-1.5 rounded-md border border-zinc-900 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 no-underline shadow-sm'
              onClick={redirectToCheckout}
              type='button'>
              Buy Now
            </button>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className='flex lg:hidden items-center gap-3'>
          {/* Mobile Buy Button */}
          <button
            className='text-white font-medium px-3 py-1.5 rounded-md border border-zinc-900 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 text-sm'
            onClick={redirectToCheckout}
            type='button'>
            Buy Now
          </button>

          {/* Burger Menu */}
          <Popover onOpenChange={handlePopoverChange} open={isOpen}>
            <PopoverTrigger asChild>
              <button
                className='p-2 hover:bg-zinc-100 rounded-md transition-colors duration-200'
                type='button'>
                <BurgerIcon />
              </button>
            </PopoverTrigger>
            <PopoverContent
              align='end'
              avoidCollisions
              className='w-screen h-screen bg-white border-none shadow-none rounded-none'
              collisionPadding={0}
              side='bottom'
              sideOffset={0}>
              <div className='flex flex-col h-full pt-20 pb-10 px-6'>
                <div className='flex-1 flex flex-col justify-center space-y-8'>
                  <NavLink
                    onClick={() => scrollToSection('hero')}
                    text='Specs'
                  />
                  <NavLink
                    onClick={() => scrollToSection('blueprint')}
                    text='Blueprint'
                  />
                  <NavLink
                    onClick={() => scrollToSection('features')}
                    text='Features'
                  />
                  <NavLink
                    onClick={() => scrollToSection('design')}
                    text='Design'
                  />
                  <NavLink
                    onClick={() => scrollToSection('contact')}
                    text='Contact'
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
};

const Logo = (props: { size?: number }) => {
  return (
    <svg
      className='transition-all duration-300 []'
      fill='none'
      style={{
        '--accent-hover': 'var(--orange-600)',
      }}
      viewBox='0 0 57 17'
      width={props.size || 124}
      xmlns='http://www.w3.org/2000/svg'>
      <title>ARYE Logo</title>
      <path
        className='transition-colors duration-300 group-hover:fill-zinc-700'
        d='M1.97869 14H0.348011L4.01207 3.81818H5.78693L9.45099 14H7.82031L4.94176 5.66761H4.86222L1.97869 14ZM2.25213 10.0128H7.5419V11.3054H2.25213V10.0128ZM10.9213 14V3.81818H14.5506C15.3394 3.81818 15.994 3.95407 16.5144 4.22585C17.0381 4.49763 17.4292 4.87382 17.6877 5.3544C17.9462 5.83168 18.0755 6.38352 18.0755 7.00994C18.0755 7.63305 17.9445 8.18158 17.6827 8.65554C17.4242 9.12618 17.0331 9.49242 16.5094 9.75426C15.9891 10.0161 15.3345 10.147 14.5456 10.147H11.7963V8.82457H14.4064C14.9036 8.82457 15.3079 8.75331 15.6195 8.6108C15.9344 8.46828 16.1647 8.26113 16.3105 7.98935C16.4564 7.71757 16.5293 7.3911 16.5293 7.00994C16.5293 6.62547 16.4547 6.29238 16.3056 6.01065C16.1597 5.72893 15.9294 5.51349 15.6145 5.36435C15.303 5.21188 14.8936 5.13565 14.3865 5.13565H12.4576V14H10.9213ZM15.9476 9.40625L18.4632 14H16.7132L14.2473 9.40625H15.9476ZM18.7901 3.81818H20.5352L23.195 8.44673H23.3043L25.9641 3.81818H27.7092L24.0153 10.0028V14H22.484V10.0028L18.7901 3.81818ZM29.1596 14V3.81818H35.5431V5.14062H30.6958V8.2429H35.21V9.56037H30.6958V12.6776H35.6028V14H29.1596Z'
        fill='#11120F'
      />
      <line
        className='transition-all duration-300 group-hover:stroke-(--accent-hover) group-hover:scale-102'
        stroke='#11120F'
        strokeWidth='0.7'
        x1='38.6614'
        x2='39.7708'
        y1='11.1418'
        y2='9.47766'
      />
      <line
        className='transition-all duration-300 group-hover:stroke-(--accent-hover) group-hover:scale-102'
        stroke='#11120F'
        strokeWidth='0.7'
        x1='40.4607'
        x2='41.5701'
        y1='11.1418'
        y2='9.47766'
      />
      <line
        className='transition-all duration-300 group-hover:stroke-zinc-700 group-hover:scale-102'
        stroke='#11120F'
        strokeWidth='0.7'
        x1='42.2601'
        x2='43.3695'
        y1='11.1418'
        y2='9.47766'
      />
      <line
        className='transition-all duration-300 group-hover:stroke-zinc-700 group-hover:scale-102'
        stroke='#11120F'
        strokeWidth='0.7'
        x1='44.0599'
        x2='45.1693'
        y1='11.1418'
        y2='9.47766'
      />
      <line
        className='transition-all duration-300 group-hover:stroke-zinc-700 group-hover:scale-102'
        stroke='#11120F'
        strokeWidth='0.7'
        x1='45.8592'
        x2='46.9686'
        y1='11.1418'
        y2='9.47766'
      />
      <line
        className='transition-all duration-300 group-hover:stroke-zinc-700 group-hover:scale-102'
        stroke='#11120F'
        strokeWidth='0.7'
        x1='47.6585'
        x2='48.7679'
        y1='11.1418'
        y2='9.47766'
      />
      <line
        className='transition-all duration-300 group-hover:stroke-zinc-700 group-hover:scale-102'
        stroke='#11120F'
        strokeWidth='0.7'
        x1='49.4578'
        x2='50.5672'
        y1='11.1418'
        y2='9.47766'
      />
      <line
        className='transition-all duration-300 group-hover:stroke-zinc-700 group-hover:scale-102'
        stroke='#11120F'
        strokeWidth='0.7'
        x1='51.2571'
        x2='52.3665'
        y1='11.1418'
        y2='9.47766'
      />
      <line
        className='transition-all duration-300 group-hover:stroke-zinc-700 group-hover:scale-102'
        stroke='#11120F'
        strokeWidth='0.7'
        x1='53.0564'
        x2='54.1658'
        y1='11.1418'
        y2='9.47766'
      />
      <line
        className='transition-all duration-300 group-hover:stroke-zinc-700 group-hover:scale-102'
        stroke='#11120F'
        strokeWidth='0.7'
        x1='54.8562'
        x2='55.9656'
        y1='11.1418'
        y2='9.47766'
      />
      <path
        className='transition-colors duration-300 group-hover:fill-zinc-700'
        d='M41.38 8.5C41.002 8.5 40.7197 8.41367 40.533 8.241C40.351 8.06367 40.26 7.793 40.26 7.429V3.901H40.967V7.394C40.967 7.56667 41.0067 7.695 41.086 7.779C41.17 7.863 41.2937 7.905 41.457 7.905H42.416V8.5H41.38ZM39.084 5.371V4.776H42.416V5.371H39.084ZM45.0943 8.584C44.7443 8.584 44.4386 8.50467 44.1773 8.346C43.9206 8.18733 43.72 7.961 43.5753 7.667C43.4353 7.373 43.3653 7.03 43.3653 6.638C43.3653 6.246 43.4353 5.90533 43.5753 5.616C43.72 5.32667 43.9183 5.10033 44.1703 4.937C44.427 4.77367 44.728 4.692 45.0733 4.692C45.4046 4.692 45.6963 4.77133 45.9483 4.93C46.2003 5.084 46.3963 5.308 46.5363 5.602C46.681 5.89133 46.7533 6.24133 46.7533 6.652V6.848H44.1073C44.1306 7.20267 44.2286 7.47333 44.4013 7.66C44.5786 7.842 44.812 7.933 45.1013 7.933C45.3206 7.933 45.5026 7.88167 45.6473 7.779C45.792 7.67167 45.8923 7.534 45.9483 7.366L46.6903 7.415C46.583 7.76967 46.3893 8.05433 46.1093 8.269C45.834 8.479 45.4956 8.584 45.0943 8.584ZM44.1073 6.281H45.9903C45.9623 5.96367 45.8643 5.728 45.6963 5.574C45.533 5.42 45.3253 5.343 45.0733 5.343C44.812 5.343 44.5973 5.42233 44.4293 5.581C44.2613 5.73967 44.154 5.973 44.1073 6.281ZM49.3266 8.584C48.9812 8.584 48.6756 8.50467 48.4096 8.346C48.1482 8.18267 47.9452 7.95633 47.8006 7.667C47.6606 7.373 47.5906 7.03 47.5906 6.638C47.5906 6.246 47.6606 5.90533 47.8006 5.616C47.9452 5.32667 48.1482 5.10033 48.4096 4.937C48.6756 4.77367 48.9812 4.692 49.3266 4.692C49.6112 4.692 49.8656 4.74567 50.0896 4.853C50.3136 4.95567 50.4979 5.10733 50.6426 5.308C50.7872 5.50867 50.8829 5.749 50.9296 6.029L50.2086 6.078C50.1526 5.84 50.0476 5.658 49.8936 5.532C49.7396 5.406 49.5529 5.343 49.3336 5.343C49.0209 5.343 48.7736 5.45967 48.5916 5.693C48.4142 5.92167 48.3256 6.23667 48.3256 6.638C48.3256 7.03933 48.4142 7.35667 48.5916 7.59C48.7736 7.81867 49.0209 7.933 49.3336 7.933C49.5576 7.933 49.7489 7.86767 49.9076 7.737C50.0709 7.60167 50.1782 7.40333 50.2296 7.142L50.9506 7.184C50.9039 7.46867 50.8059 7.716 50.6566 7.926C50.5072 8.13133 50.3182 8.29233 50.0896 8.409C49.8656 8.52567 49.6112 8.584 49.3266 8.584ZM51.9908 8.5V3.53H52.6978V5.588L52.6278 5.56C52.6745 5.35933 52.7538 5.196 52.8658 5.07C52.9778 4.93933 53.1132 4.84367 53.2718 4.783C53.4305 4.72233 53.6055 4.692 53.7968 4.692C54.0582 4.692 54.2775 4.75267 54.4548 4.874C54.6368 4.99067 54.7722 5.15633 54.8608 5.371C54.9542 5.581 55.0008 5.82367 55.0008 6.099V8.5H54.2938V6.281C54.2938 5.945 54.2332 5.7 54.1118 5.546C53.9952 5.38733 53.8202 5.308 53.5868 5.308C53.3208 5.308 53.1062 5.392 52.9428 5.56C52.7795 5.728 52.6978 5.97533 52.6978 6.302V8.5H51.9908Z'
        fill='#11120F'
      />
      <line
        className='transition-all duration-300 group-hover:stroke-zinc-700 group-hover:scale-102'
        stroke='black'
        strokeWidth='0.6'
        x1='38'
        x2='56'
        y1='13.7'
        y2='13.7'
      />
      <line
        className='transition-all duration-300 group-hover:stroke-zinc-700 group-hover:scale-102'
        stroke='black'
        strokeWidth='0.6'
        x1='38'
        x2='56'
        y1='12.5451'
        y2='12.5451'
      />
    </svg>
  );
};

const BurgerIcon = () => (
  <svg
    fill='none'
    height='20'
    stroke='currentColor'
    strokeWidth='2'
    viewBox='0 0 24 24'
    width='20'>
    <title>Burger Icon</title>
    <line x1='3' x2='21' y1='6' y2='6'></line>
    <line x1='3' x2='21' y1='12' y2='12'></line>
    <line x1='3' x2='21' y1='18' y2='18'></line>
  </svg>
);

const CloseIcon = () => (
  <svg
    fill='none'
    height='24'
    stroke='currentColor'
    strokeWidth='2'
    viewBox='0 0 24 24'
    width='24'>
    <title>Close Icon</title>
    <line x1='18' x2='6' y1='6' y2='18'></line>
    <line x1='6' x2='18' y1='6' y2='18'></line>
  </svg>
);

const NavLink: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => (
  <button
    className='text-4xl font-bold text-zinc-900 hover:text-zinc-700 transition-colors duration-300 text-left w-full'
    onClick={onClick}
    type='button'>
    {text}
  </button>
);

/* Types */
declare module 'react' {
  interface CSSProperties {
    '--accent-hover'?: string;
  }
}
