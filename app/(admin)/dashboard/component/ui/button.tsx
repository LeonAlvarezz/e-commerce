import cn from '@/lib/util';
import { ClassValue } from 'clsx';
import React from 'react';
type Props = {
  label: string;
  additionalClass?: ClassValue;
  onClick?: any;
  onSubmit?: any;
};
export default function Button({
  label,
  additionalClass,
  onClick,
  onSubmit,
}: Props) {
  return (
    <button
      className={cn(
        'rounded-md border-2 border-slate-400 px-6 py-3 transition-all hover:bg-slate-400 hover:text-white',
        additionalClass
      )}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {label}
    </button>
  );
}
