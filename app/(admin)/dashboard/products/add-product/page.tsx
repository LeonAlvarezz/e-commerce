import React from 'react';
import Input from '../../component/ui/Input';
import Button from '@/app/(admin)/dashboard/component/ui/button';
import prisma from '@/service/prisma';
import BackButton from '../../component/ui/BackButton';
import Form from '../../component/Form';
import { createProduct } from '../helper/ProductHelper';
export default function page() {
  return (
    <div className='m-auto flex min-h-screen items-center justify-center'>
      <Form createProduct={createProduct} />
    </div>
  );
}
