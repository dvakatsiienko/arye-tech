'use client';

import { SectionHeading } from './SectionHeading';

function IconPolling(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden='true'
      className='w-12 h-12 text-zinc-900'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      viewBox='0 0 24 24'
      {...props}>
      <polyline
        points='2,13 6,9 10,15 14,11 18,13 22,9'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function IconSensor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden='true'
      className='w-12 h-12 text-zinc-900'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      viewBox='0 0 24 24'
      {...props}>
      <circle cx='12' cy='12' r='4' />
      <path d='M12 2v3M12 19v3M2 12h3M19 12h3' strokeLinecap='round' />
      <path d='M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M5 19l2.5-2.5' />
    </svg>
  );
}

function IconWeight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden='true'
      className='w-12 h-12 text-zinc-900'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      viewBox='0 0 24 24'
      {...props}>
      <path d='M7 6h10l3 12a2 2 0 01-2 2H6a2 2 0 01-2-2L7 6z' />
      <path d='M9 6a3 3 0 106 0' />
    </svg>
  );
}

function IconWireless(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden='true'
      className='w-12 h-12 text-zinc-900'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      viewBox='0 0 24 24'
      {...props}>
      <path d='M2 8c5-5 15-5 20 0' strokeLinecap='round' />
      <path d='M5 12c3.5-3.5 10.5-3.5 14 0' strokeLinecap='round' />
      <path d='M8 16c2-2 6-2 8 0' strokeLinecap='round' />
      <circle cx='12' cy='19' fill='currentColor' r='1.5' stroke='none' />
    </svg>
  );
}

function IconSwitch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden='true'
      className='w-12 h-12 text-zinc-900'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      viewBox='0 0 24 24'
      {...props}>
      <rect height='19' rx='4' width='8' x='8' y='2.5' />
      <path d='M12 7.5v4' />
    </svg>
  );
}

function IconDesign(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden='true'
      className='w-12 h-12 text-zinc-900'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      viewBox='0 0 24 24'
      {...props}>
      <path d='M4 16c4-6 12-6 16 0' />
      <circle cx='8' cy='16' fill='currentColor' r='1.5' stroke='none' />
      <circle cx='16' cy='16' fill='currentColor' r='1.5' stroke='none' />
      <path d='M8 8c1.5-2 6.5-2 8 0' />
    </svg>
  );
}

export const Features = () => {
  return (
    <section className='py-20 px-6 md:px-10' id='features'>
      <div className='max-w-6xl mx-auto'>
        <SectionHeading text='Engineered for Excellence' />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature) => (
            <div
              className='group bg-white p-8 rounded-xl border border-zinc-200 text-center hover:-translate-y-2 hover:shadow-md hover:border-zinc-300 transition-all duration-300'
              key={feature.title}>
              <div className='mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                {feature.icon}
              </div>

              <h3 className='text-xl font-semibold mb-3 text-foreground'>
                {feature.title}
              </h3>

              <p className='text-zinc-600 text-sm leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    description: 'Industry-leading response time with 0.125ms report rate',
    icon: <IconPolling />,
    title: '8000Hz Polling',
  },
  {
    description: 'Flagship sensor with 30,000 DPI and zero smoothing',
    icon: <IconSensor />,
    title: 'PMW-3950 Sensor',
  },
  {
    description: 'Ultralight design without compromising durability',
    icon: <IconWeight />,
    title: '46g Weight',
  },
  {
    description: '2.4GHz connection with 300mAh battery',
    icon: <IconWireless />,
    title: 'Wireless Freedom',
  },
  {
    description: 'Optical switches rated for 100 million clicks',
    icon: <IconSwitch />,
    title: 'Omron Switches',
  },
  {
    description: 'Ergonomic egg-shaped form factor for ultimate comfort',
    icon: <IconDesign />,
    title: 'Unique Design',
  },
];
