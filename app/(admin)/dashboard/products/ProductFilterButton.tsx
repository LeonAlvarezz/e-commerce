import Link from 'next/link';
import React from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';

type ProductFilterButton = {
  id: number;
  title: string;
  url: string;
};

const productFilter: ProductFilterButton[] = [
  {
    id: 1,
    title: 'All Product',
    url: '/dashboard/products/all-product',
  },
  {
    id: 2,
    title: 'Featured Product',
    url: '/dashboard/products/featured',
  },
];
export default function ProductFilterButton() {
  return (
    <section className='flex items-center gap-3'>
      {productFilter.map((product) => (
        <Link key={product.id} href={product.url}>
          <button className='rounded-md border-2 border-slate-400 px-6 py-3 transition-all hover:bg-slate-400 hover:text-white'>
            {product.title}
          </button>
        </Link>
      ))}

      <Link href={'/dashboard/products/add-product'}>
        <button className='flex items-center gap-1 rounded-md bg-slate-500 px-6 py-3 text-white transition-all hover:bg-slate-400'>
          Add Product
          <MdOutlineAddCircle size={25} />
        </button>
      </Link>
    </section>
  );
}
