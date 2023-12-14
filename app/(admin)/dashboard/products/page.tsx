import { Product } from '@prisma/client';
import prisma from '@/lib/prisma';
import React from 'react';
import ProductFilterButton from './ProductFilterButton';
import ProductTable from './ProductTable';
import { fetchAllProduct } from './helper/ProductHelper';

export default async function Products() {
  const products = await fetchAllProduct();

  return (
    <main className='w-full p-5'>
      <h1 className='= mb-5 text-4xl font-bold'>Product</h1>
      <ProductFilterButton></ProductFilterButton>
      <ProductTable products={products}></ProductTable>
    </main>
  );
}
