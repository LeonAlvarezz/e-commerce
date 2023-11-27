import Link from 'next/link';
import React from 'react';

export default function Dashboard() {
  return (
    <main className='w-full '>
      <p>Dashboard</p>
      <Link href={'/dashboard/products'} className='text-2xl'>
        Product
      </Link>
    </main>
  );
}
