import React from 'react';
import Input from '../../component/Sidebar/Input';

export default function page() {
  return (
    <div>
      <form action=''>
        <Input type='text' name='name' label='Name' placeholder='Coke' />
        <Input
          type='text'
          name='description'
          label='Description'
          placeholder='Better Fresher'
        />
        <div className='flex'>
          <Input
            type='number'
            name='quanlity'
            label='Quanity'
            placeholder='10'
          />
          <Input type='number' name='price' label='Price' placeholder='1' />
        </div>
      </form>
    </div>
  );
}
