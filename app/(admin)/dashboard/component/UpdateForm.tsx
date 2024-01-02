'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import BackButton from './ui/BackButton';
import Button from '@/app/(admin)/dashboard/component/ui/button';
import Input from './ui/Input';
import InputNumber from './ui/InputNumber';
import { useSearchParams } from 'next/navigation';
import { getProductById } from '../products/helper/ProductHelper';
import { Product } from '@prisma/client';
import Toggle from './ui/Toggle';
import UploadImage from './UploadImage';
import Loading from './ui/Loading';
import axios from 'axios';
import Image from 'next/image';
type Props = {
  updateProduct: (id: number, formData: FormData) => void;
};
export default function UpdateForm({ updateProduct }: Props) {
  const [imageURLs, setimageURLs] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    featured: false,
    image: '',
    updateAt: new Date(),
    createAt: new Date(),
  });
  const params = useSearchParams();
  const [loading, setLoading] = useState(false);
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
        const link = product.image.split(",")
        setimageURLs(link)
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);
  // console.log(imageURLs);

  const updateProductwithId = updateProduct.bind(null, id);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct((prev) => ({
      ...prev,
      image: event.target.value,
    }));
  };
  const uploadImageToImgBB = async (images: FileList) => {
    setLoading(true);
    for (let i = 0; i < images.length; i++) {
      const formData = new FormData();
      formData.append('image', images[i]);

      try {
        const response = await axios.post(
          'https://api.imgbb.com/1/upload',
          formData,
          {
            params: {
              key: '7c22aa68a489e655f2742fd476d0d56f',
            },
          }
        );
        const uploadedImageUrl = response.data.data.display_url;
        setSelectedProduct((prev) => ({
          ...prev,
          image: uploadedImageUrl
        }))
        setimageURLs((prev) => [...prev, uploadedImageUrl]);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    }
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    let images = event.target.files;
    if (imageURLs && imageURLs.length > 0) {
      setimageURLs([]); // Reset imageURLs to empty, replace 'setImageURLs' with your actual state setter
    }
    if (images) {
      // Get the selected files
      const selectedFiles = Array.from(images);

      // Limit the number of files to 5
      if (selectedFiles.length > 5) {
        alert('You can only upload up to 5 images.');
        event.target.value = '';
        return;
      }
      uploadImageToImgBB(images);
    }
  };
  return (
    <div>
      <form action={updateProductwithId}>
        <h1 className='mb-4 text-4xl'>Update Product</h1>
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
        <div className='mb-4'>
          <Toggle
            checked={selectedProduct?.featured}
            onChange={handleCheckBox}
            name='featured'
            label='Featured'
          />
        </div>
        <Input
            name='createdAt'
            additionalClass='hidden'
            value={selectedProduct.createAt}
            onChange={handleInputChange}
          />
        <Input
            name='image'
            additionalClass='hidden'
            value={imageURLs}
            onChange={handleInputChange}
          />
          <UploadImage label='Image' onChange={handleImageUpload} />
          {loading ? (
            <div className='my-4 flex items-center justify-center'>
              <Loading />
            </div>
          ) : (
            imageURLs.length > 0 && (
              <div className='my-4 flex gap-2'>
                {imageURLs.map((url, index) => (
                  <div key={index} className='relative aspect-square h-52'>
                    <Image
                      src={url}
                      alt={`image-${index}`}
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className='object-contain'
                    />
                  </div>
                ))}
              </div>
            )
          )}
        <Button label='Submit' />
        <BackButton />
      </form>
    </div>
  );
}
