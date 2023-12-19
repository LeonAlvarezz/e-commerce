import React from 'react';
import cn from '@/lib/util';

import type { SubContentType } from '@/type/sidebar.type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  sbSize: boolean;
  subContentTitle: string;
  subContent: SubContentType[];
};

export default function SubContent({
  subContent,
  sbSize,
  subContentTitle,
}: Props) {
  const pathname = usePathname();

  return (
    <div className='mt-4 p-4 '>
      <ul>
        <h2 className='text-[12px] text-white/70'>
          {subContentTitle?.toUpperCase()}
        </h2>
        {subContent.map((data) => (
          <li key={data.id} className={cn('mt-4 transition-all ')}>
            <Link href={data.linkTo}>
              <button
                className={cn(
                  'flex w-full items-center gap-2 p-2 text-white transition-all hover:rounded-lg hover:bg-slate-600 ',
                  sbSize && 'justify-center',
                  { 'rounded-lg bg-slate-600': pathname === data.linkTo }
                )}
              >
                <span className='text-xl'> {data.icon}</span>
                <p className={cn('text-md ', sbSize && 'hidden')}>
                  {data.title}
                </p>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
