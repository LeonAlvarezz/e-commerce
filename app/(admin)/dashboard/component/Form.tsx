'use client';
import React, { ChangeEvent, useState } from 'react';
import BackButton from './BackButton';
import Button from '@/components/button';
import Input from './Input';
import InputNumber from './InputNumber';
import Toggle from './Toggle';
import UploadImage from './UploadImage';
import axios from 'axios';

type Props = {
  createProduct: (formData: FormData) => Promise<never>;
};

export default function Form({ createProduct }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const [imageURLs, setimageURLs] = useState<string[]>([]);

  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setimageURLs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const uploadImageToImgBB = async (images: FileList) => {
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
        setimageURLs((prev) => [...prev, uploadedImageUrl]);
      } catch (error) {
        throw error;
      }
    }
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    let images = event.target.files;
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
          <Input
            name='image'
            additionalClass='hidden'
            value={imageURLs}
            onChange={handleInputChange}
          />
          <UploadImage label='Image' onChange={handleImageUpload} />
        </div>
        <Button label='Submit' />
        <BackButton />
      </form>
    </div>
  );
}
