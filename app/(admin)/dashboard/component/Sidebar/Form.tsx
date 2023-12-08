'use client';
import React from 'react';
import BackButton from './BackButton';
import Button from '@/components/button';
import Input from './Input';
type Props = {
  handleSubmit: (formData: FormData, e: React.FormEvent) => Promise<never>;
};
export default function Form({ handleSubmit }: Props) {
  return (
    <div>
      <form action={handleSubmit}>
        <Input type='text' name='name' label='Name' placeholder='Coke' />
        <Input
          type='text'
          name='description'
          label='Description'
          placeholder='Better Fresher'
        />
        <div className='mb-3 flex gap-10'>
          <Input
            type='number'
            name='quantity'
            label='Quantity'
            placeholder='10'
          />
          <Input type='number' name='price' label='Price' placeholder='1' />
        </div>
        <Button label='Submit' />
        <BackButton />
      </form>
    </div>
  );
}
