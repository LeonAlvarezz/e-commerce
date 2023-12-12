import React from 'react';
type Props = {
  name: string;
  label: string;
  placeholder: string;
  allowDecimal: boolean;
};
export default function Input({
  name,
  label,
  placeholder,
  allowDecimal,
}: Props) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      <input
        type='number'
        name={name}
        className='border border-slate-500 p-2'
        placeholder={placeholder}
        required
        min='0'
        step={allowDecimal ? '0.01' : '1'}
      />
    </div>
  );
}
