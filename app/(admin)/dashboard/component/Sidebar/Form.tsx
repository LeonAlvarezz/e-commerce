'use client';
import React from 'react';
import BackButton from './BackButton';
import Button from '@/components/button';
import Input from './Input';
import InputNumber from './InputNumber';
type Props = {
  createProduct: (formData: FormData) => Promise<never>;
};
export default function Form({ createProduct }: Props) {
  return (
    <div>
      <form action={createProduct}>
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
