import React from 'react';
type Props = {
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: any;
  onChange?: any;
};
export default function Input({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className='border border-slate-500 p-2'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
