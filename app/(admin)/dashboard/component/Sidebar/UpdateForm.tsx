'use client';
import React from 'react';
import BackButton from './BackButton';
import Button from '@/components/button';
import Input from './Input';
import InputNumber from './InputNumber';
import { useRouter } from 'next/router';
import { useParams, useSearchParams } from 'next/navigation';
type Props = {
  handleSubmit: (formData: FormData) => Promise<never>;
};
export default function UpdateForm({ handleSubmit }: Props) {
  const params = useSearchParams();
  const id = params.get('id');
  return (
    <div>
      <form action={handleSubmit}>
        <h1 className='mb-4 text-4xl'>Update Product</h1>
        <Input type='text' name='name' label='Name' placeholder='Coke' />
        <Input
          type='text'
          name='description'
          label='Description'
          placeholder='Better Fresher'
        />
        <div className='mb-3 flex gap-10'>
          <InputNumber
            name='quantity'
            label='Quantity'
            placeholder='10'
            allowDecimal={false}
          />
          <InputNumber
            name='price'
            label='Price'
            placeholder='1'
            allowDecimal
          />
        </div>
        <Button label='Submit' />
        <BackButton />
      </form>
    </div>
  );
}
