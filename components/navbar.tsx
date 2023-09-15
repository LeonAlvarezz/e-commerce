"use client"
import React from 'react'
import Image from 'next/image'
import {AiOutlineShoppingCart } from 'react-icons/ai';
import {BsSearch } from 'react-icons/bs';
import Link from 'next/link';
import {usePathname} from 'next/navigation'


export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
    <nav className='flex justify-between bg-white w-full h-[100px] shadow-lg items-center'>
      <div className='w-[100px] ml-10'>
        <Link href={"/"}>
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
          <ul className='flex gap-10 justify-center'> 
          <Link href={"/"}><li className={pathname === '/' ? 'font-bold' : ''}>Home</li></Link>
          <Link href={"/promotion"}><li className={pathname === '/promotion' ? 'font-bold' : ''}>Promotion</li></Link> 
          <Link href={"/product"}><li className={pathname === '/product' ? 'font-bold' : ''}>Product</li></Link> 
          <Link href={"/about"}><li className={pathname === '/about' ? 'font-bold' : ''}>About</li> </Link>
          <Link href={"/contact"}><li className={pathname === '/contact' ? 'font-bold' : ''}>Contact</li> </Link>
            </ul>
          <div className='w-full mt-3'>
            <div className='relative'>
              <input className='bg-button border-button border-2 rounded-md h-[40px] w-full pl-2' placeholder="Search..." type="text"/>
              <Link href={"/"}><BsSearch className='absolute top-[10px] right-5 hover:scale-125 transition-all' size={20}/></Link>
            </div>

          </div>
      </div>

      <div className='flex items-center gap-5 mr-10'>
        <div className='relative'>
          <Link href={"/"}>
            <div className='w-4 h-4 rounded-full bg-red-500 absolute -right-2 -top-1'>
              <p className='absolute top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%] text-[10px] text-white'>1</p>
            </div>
            <AiOutlineShoppingCart size={30}/>
          </Link>
        </div>
        <button className='bg-button border-button border-2 px-10 py-3 rounded-md'>Login</button>
      </div>
    </nav>
    </>
  )
}
