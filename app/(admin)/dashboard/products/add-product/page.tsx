import React from 'react';
import Input from '../../component/Input';
import Button from '@/components/button';
import prisma from '@/service/prisma';
import BackButton from '../../component/BackButton';
import Form from '../../component/Form';
import { createProduct } from '../helper/ProductHelper';
export default function page() {
  return (
    <div className='m-auto flex min-h-screen items-center justify-center'>
      <Form createProduct={createProduct} />
    </div>
  );
}
