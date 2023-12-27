import React from 'react';
type Props = {
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: any;
  onChange?: any;
};
export default function UploadImage({ name, label, onChange }: Props) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      <input
        type='file'
        name={name}
        className='border border-slate-500 p-2'
        onChange={onChange}
        accept='image/*'
        multiple
      />
    </div>
  );
}
