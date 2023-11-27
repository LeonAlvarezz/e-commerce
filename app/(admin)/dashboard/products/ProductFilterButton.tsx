import Link from 'next/link';
import React from 'react';
type ProductFilterButton = {
  id: number;
  title: string;
  url: string;
};

const productFilter: ProductFilterButton[] = [
  {
    id: 1,
    title: 'All Product',
    url: '/products/all',
  },
  {
    id: 2,
    title: 'Featured Product',
    url: '/products/featured',
  },
];
export default function ProductFilterButton() {
  return (
    <section className='flex gap-3'>
      {productFilter.map((product) => (
        <Link key={product.id} href={product.url}>
          <button className='rounded-md border-2 border-slate-400 px-6 py-3 transition-all hover:bg-slate-400 hover:text-white'>
            {product.title}
          </button>
        </Link>
      ))}
    </section>
  );
}
