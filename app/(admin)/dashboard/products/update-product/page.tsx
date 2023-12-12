import React from 'react';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import UpdateForm from '../../component/Sidebar/UpdateForm';

export default function page() {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    const quantity = formData.get('quantity') as string;
    const price = formData.get('price') as string;
    await prisma.product.create({
      data: {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        quantity: parseInt(quantity),
        price: parseFloat(price),
        featured: false,
      },
    });
    revalidatePath('/dashboard/products');
    redirect('/dashboard/products');
  };
  return (
    <div className='m-auto flex min-h-screen items-center justify-center'>
      <UpdateForm handleSubmit={handleSubmit} />
    </div>
  );
}
