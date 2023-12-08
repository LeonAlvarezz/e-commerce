import React from 'react';
type Props = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
};
export default function Input({ name, label, type, placeholder }: Props) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className='border border-slate-500'
        placeholder={placeholder}
      />
    </div>
  );
}
