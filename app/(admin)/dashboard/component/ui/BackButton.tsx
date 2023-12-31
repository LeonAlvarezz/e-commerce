'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Button from './button';

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      label='Back'
      additionalClass='bg-red-400 hover:bg-red-600 text-white ml-4'
      onClick={() => {
        router.push('/dashboard/products');
      }}
    />
  );
}
