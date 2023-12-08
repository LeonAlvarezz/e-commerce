'use client';
import Button from '@/components/button';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';

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
