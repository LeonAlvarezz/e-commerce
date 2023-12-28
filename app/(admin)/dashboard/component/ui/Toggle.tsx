import React, { ChangeEvent } from 'react';
type Props = {
  label?: string;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export default function Toggle({
  label,
  name,
  checked,
  onChange,
  defaultChecked,
}: Props) {
  return (
    // <div>
    //   <label className='block' htmlFor={name}>
    //     {label}
    //   </label>
    //   <div className='switch'>
    //     <input type='checkbox' />
    //     <span className='slider round'></span>
    //   </div>
    // </div>
    <>
      <label className='mb-2 block' htmlFor={name}>
        {label}
      </label>
      <label className='switch'>
        <input
          type='checkbox'
          name={name}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
        <span className='slider round'></span>
      </label>
    </>
  );
}
