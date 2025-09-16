/* Core */
'use client';

export const SectionHeading: React.FC<TSectionHeadingProps> = (props) => {
  return (
    <h2 className='text-3xl md:text-4xl font-bold text-left mb-10 bg-gradient-to-br from-zinc-900 to-zinc-600 bg-clip-text text-transparent'>
      {props.text}
    </h2>
  );
};

/* Types */
interface TSectionHeadingProps {
  text: string;
}