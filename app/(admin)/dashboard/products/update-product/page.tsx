import React from 'react';
import prisma from '@/service/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import UpdateForm from '../../component/UpdateForm';
import { updateProduct } from '../helper/ProductHelper';

export default function page() {
  return (
    <div className='m-auto flex min-h-screen items-center justify-center'>
      <UpdateForm updateProduct={updateProduct} />
    </div>
  );
}
