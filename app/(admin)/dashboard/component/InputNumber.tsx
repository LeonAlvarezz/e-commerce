import cn from '@/lib/util';
import { ClassValue } from 'clsx';
import React from 'react';
type Props = {
  name?: string;
  label?: string;
  placeholder?: string;
  allowDecimal?: boolean;
  value?: any;
  onChange?: any;
  additionalClass?: ClassValue;
};
export default function InputNumber({
  name,
  label,
  placeholder,
  allowDecimal,
  value,
  onChange,
  additionalClass,
}: Props) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      <input
        type='number'
        name={name}
        className={cn('border border-slate-500 p-2', additionalClass)}
        placeholder={placeholder}
        required
        min='0'
        value={value}
        step={allowDecimal ? '0.01' : '1'}
        onChange={onChange}
      />
    </div>
  );
}
