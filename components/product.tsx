import React from 'react';
import products from '@/mock_data/product';
import Image from 'next/image';
export default function Product() {
  return (
    <div className='m-auto w-[95%]'>
      <ul className='grid grid-cols-5'>
        {products.map((product) => (
          <li key={product.key}>
            <div className='ml-10 grid h-[338px] w-[427px] place-items-center bg-gray-200'>
              <div className='w-[250px]'>
                <Image
                  src={product.image}
                  width={0}
                  height={0}
                  layout='responsive'
                  alt='product'
                />
              </div>
            </div>
            <div>
              <h1>{product.name}</h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
