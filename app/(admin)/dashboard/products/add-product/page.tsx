import React from 'react';
import Input from '../../component/Sidebar/Input';
import Button from '@/components/button';
import prisma from '@/lib/prisma';
import BackButton from '../../component/Sidebar/BackButton';
import Form from '../../component/Sidebar/Form';
import { createProduct } from '../helper/ProductHelper';
export default function page() {
  return (
    <div className='m-auto flex min-h-screen items-center justify-center'>
      <Form createProduct={createProduct} />
    </div>
  );
}
