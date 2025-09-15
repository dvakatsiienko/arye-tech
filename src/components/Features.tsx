'use client';


export function Features() {
  return (
    <section className='py-20 px-6 md:px-10' id='features'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-br from-zinc-900 to-zinc-600 bg-clip-text text-transparent'>
          Engineered for Excellence
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature) => (
            <div
              className='group bg-white p-8 rounded-xl border border-zinc-200 text-center hover:-translate-y-2 hover:shadow-md hover:border-zinc-300 transition-all duration-300'
              key={feature.title}>
              <div className='text-5xl mb-6 group-hover:scale-110 transition-transform duration-300'>
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
}

const features = [
  {
    description: 'Industry-leading response time with 0.125ms report rate',
    icon: '‚ö°',
    title: '8000Hz Polling',
  },
  {
    description: 'Flagship sensor with 30,000 DPI and zero smoothing',
    icon: 'üéØ',
    title: 'PMW-3950 Sensor',
  },
  {
    description: 'Ultralight design without compromising durability',
    icon: 'ü™∂',
    title: '46g Weight',
  },
  {
    description: '2.4GHz connection with 300mAh battery',
    icon: 'Ì¥ã',
    title: 'Wireless Freedom',
  },
  {
    description: 'Optical switches rated for 100 million clicks',
    icon: 'üõ°Ô∏è',
    title: 'Omron Switches',
  },
  {
    description: 'Ergonomic egg-shaped form factor for ultimate comfort',
    icon: 'üé®',
    title: 'Unique Design',
  },
];
