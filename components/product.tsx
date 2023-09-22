import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import products from '@/mock_data/product';
import Image from 'next/image';
export default function Product() {
  return (
    // <div className='text-2xl'>
    //   <ul>
    //     {products.map((product) => (
    //       <li key={product.id}>
    //         <h1>{product.name}</h1>
    //         <h2>{product.price}</h2>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <div>
        <ul>
          <li>
            <div className='grid h-[225px] w-[284px] place-items-center bg-gray-200'>
              <div className='w-[200px]'>
                <Image
                  src='/img/essential_logo.png'
                  alt='product'
                  width={0}
                  height={0}
                  layout='responsive'
                />
              </div>
            </div>
            <h1>Shoe</h1>
            <h2>$XXX.XX</h2>
            <button>Add to Cart</button>
            <AiOutlineHeart />
          </li>
        </ul>
      </div>
    </div>
  );
}
