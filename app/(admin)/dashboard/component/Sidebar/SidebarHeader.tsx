import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import cn from '@/lib/util';
type Props = {
  handleChangeSbSize: () => void;
  sbSize: boolean;
};
export default function SidebarHeader({ handleChangeSbSize, sbSize }: Props) {
  return (
    <section className='sticky top-0 w-full'>
      <div className='mb-4 flex w-full justify-between p-2'>
        <div className='flex gap-2'>
          <div className='relative aspect-square w-12'>
            <Image alt='logo' src='/img/logo.png' fill></Image>
          </div>
          <div className={cn('text-white', sbSize ? 'hidden' : 'block')}>
            <h1 className='text-xl'>Randomization</h1>
            <p className='text-sm text-white/80'>Technology</p>
          </div>
        </div>
        <button onClick={handleChangeSbSize}>
          <div
            className={cn(
              'flex items-center text-3xl text-white/80 transition-all',
              sbSize && 'rotate-180'
            )}
          >
            <IoIosArrowBack />
          </div>
        </button>
      </div>
      <hr className='border-white' />
    </section>
  );
}
