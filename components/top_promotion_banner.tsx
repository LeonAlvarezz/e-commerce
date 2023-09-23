import React from 'react';
import Image from 'next/image';

export default function TopPromotionBanner() {
  return (
    <>
      <div className='m-auto w-[95%]'>
        <Image
          src='/img/big_promotion1.png'
          alt='promotion1'
          width={1830}
          height={716}
          layout='responsive'
        />
        <div className='mt-10 grid grid-cols-3 gap-6'>
          <Image
            src='/img/small_promotion1.png'
            alt='promotion1'
            width={600}
            height={338}
            layout='responsive'
          />
          <Image
            src='/img/small_promotion2.png'
            alt='promotion1'
            width={600}
            height={338}
            layout='responsive'
          />
          <Image
            src='/img/small_promotion3.png'
            alt='promotion1'
            width={600}
            height={338}
            layout='responsive'
          />
        </div>
      </div>
    </>
  );
}
