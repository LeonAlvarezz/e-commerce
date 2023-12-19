'use client';
import React, { ChangeEvent, useState } from 'react';
import BackButton from './BackButton';
import Button from '@/components/button';
import Input from './Input';
import InputNumber from './InputNumber';
import Toggle from './Toggle';
type Props = {
  createProduct: (formData: FormData) => Promise<never>;
};
export default function Form({ createProduct }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  console.log(isChecked);
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
        <div className='mb-4'>
          <Toggle
            name='featured'
            label='Featured'
            checked={isChecked}
            onChange={handleCheckBox}
          />
        </div>
        <Button label='Submit' />
        <BackButton />
      </form>
    </div>
  );
}
