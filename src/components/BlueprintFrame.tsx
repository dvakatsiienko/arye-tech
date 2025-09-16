/* Core */
'use client';

import type { ReactNode } from 'react';

export const BlueprintFrame: React.FC<TBlueprintFrameProps> = (props) => {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden ${props.className || ''}`}>
      <div className='px-4 py-2 border-b border-zinc-200 text-xs text-zinc-600 flex items-center justify-between'>
        <span>{props.title}</span>
        <span>{props.subtitle}</span>
      </div>
      <div className='relative w-full bg-zinc-50'>{props.children}</div>
    </div>
  );
};

/* Types */
interface TBlueprintFrameProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}
