'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import BackButton from './BackButton';
import Button from '@/components/button';
import Input from './Input';
import InputNumber from './InputNumber';
import { useRouter } from 'next/router';
import { useParams, useSearchParams } from 'next/navigation';
import { getProductById } from '../../products/helper/ProductHelper';
import { Product } from '@prisma/client';
type Props = {
  updateProduct: (id: number, formData: FormData) => void;
};
export default function UpdateForm({ updateProduct }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    featured: false,
  });
  const params = useSearchParams();
  const id: number = Number(params.get('id'));
  useEffect(() => {
    const getProduct = async () => {
      try {
        const product = await getProductById(id);
        if (!product) {
          console.log('Product Fetching Error!');
          return;
        }
        setSelectedProduct(product);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);
  const updateProductwithId = updateProduct.bind(null, id);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <form action={updateProductwithId}>
        <h1 className='mb-4 text-4xl'>Update Product</h1>
        {/* <InputNumber
          name='id'
          placeholder='10'
          value={selectedProduct?.id}
          allowDecimal={false}
          additionalClass='hidden'
        /> */}
        <Input
          type='text'
          name='name'
          label='Name'
          placeholder='Coke'
          value={selectedProduct?.name}
          onChange={handleChange}
        />
        <Input
          type='text'
          name='description'
          label='Description'
          placeholder='Better Fresher'
          value={selectedProduct?.description}
          onChange={handleChange}
        />
        <div className='mb-3 flex gap-10'>
          <InputNumber
            name='quantity'
            label='Quantity'
            placeholder='1'
            value={selectedProduct?.quantity}
            allowDecimal={false}
            onChange={handleChange}
          />
          <InputNumber
            name='price'
            label='Price'
            placeholder='1'
            value={selectedProduct?.price}
            onChange={handleChange}
            allowDecimal
          />
        </div>
        <Button label='Submit' />
        <BackButton />
      </form>
    </div>
  );
}
