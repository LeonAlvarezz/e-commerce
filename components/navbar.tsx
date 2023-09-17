'use client';
import React from 'react';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav className='flex h-[100px] w-full items-center justify-between bg-white shadow-lg'>
        <div className='ml-10 w-[150px]'>
          <Link href={'/'}>
            <Image
              src='/img/essential_logo.png'
              alt='logo'
              layout='responsive'
              width={200}
              height={43}
            />
          </Link>
        </div>
        <div className='w-[650px]'>
          <ul className='flex justify-center gap-10'>
            <Link href={'/'}>
              <li className={clsx({ 'font-bold': pathname === '/' })}>Home</li>
            </Link>
            <Link href={'/promotion'}>
              <li className={clsx({ 'font-bold': pathname === '/promotion' })}>
                Promotion
              </li>
            </Link>
            <Link href={'/product'}>
              <li className={clsx({ 'font-bold': pathname === '/product' })}>
                Product
              </li>
            </Link>
            <Link href={'/about'}>
              <li className={clsx({ 'font-bold': pathname === '/about' })}>
                About
              </li>{' '}
            </Link>
            <Link href={'/contact'}>
              <li className={clsx({ 'font-bold': pathname === '/contact' })}>
                Contact
              </li>{' '}
            </Link>
          </ul>
          <div className='mt-3 w-full'>
            <div className='relative'>
              <input
                className='bg-button border-button h-[40px] w-full rounded-md border-2 pl-2'
                placeholder='Search...'
                type='text'
              />
              <Link href={'/'}>
                <BsSearch
                  className='absolute right-5 top-[10px] transition-all hover:scale-125'
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className='mr-10 flex items-center gap-5'>
          <div className='relative'>
            <Link href={'/'}>
              <div className='absolute -right-2 -top-1 h-4 w-4 rounded-full bg-red-500'>
                <p className='absolute left-1/2 top-1/2 translate-x-[-50%]  translate-y-[-50%] text-[10px] text-white'>
                  1
                </p>
              </div>
              <AiOutlineShoppingCart size={30} />
            </Link>
          </div>
          <button className='bg-button border-button rounded-md border-2 px-10 py-3'>
            Login
          </button>
        </div>
      </nav>
    </>
  );
}
