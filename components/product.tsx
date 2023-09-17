import React from 'react';
import products from '@/mock_data/product';
export default function Product() {
  return (
    <div className='text-2xl'>
      <ul>
        {products.map((product) => (
          <li key={product.key}>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
