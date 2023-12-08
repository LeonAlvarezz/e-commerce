import React from 'react';
import Input from '../../component/Sidebar/Input';
import Button from '@/components/button';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import BackButton from '../../component/Sidebar/BackButton';
import { redirect } from 'next/navigation';
import Form from '../../component/Sidebar/Form';

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
        price: parseInt(price),
        featured: false,
      },
    });
    revalidatePath('/dashboard/products');
    redirect('/dashboard/products');
  };
  return (
    <div className='m-auto flex h-screen items-center'>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}
