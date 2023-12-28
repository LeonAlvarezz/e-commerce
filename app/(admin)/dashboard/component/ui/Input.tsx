import cn from '@/lib/util';
import React from 'react';
type Props = {
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: any;
  onChange?: any;
  additionalClass?: any;
};
export default function Input({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  additionalClass,
}: Props) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={cn('border border-slate-500 p-2', additionalClass)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
