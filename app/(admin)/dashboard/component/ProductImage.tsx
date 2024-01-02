import React from 'react'
import Loading from './ui/Loading'
import Image from 'next/image'
type Props = {
    loading: boolean, 
    imageURLs: string[]
}
export default function ProductImage({loading, imageURLs}: Props) {
  return (
    <div>{loading ? (
        <div className='mt-4 flex items-center justify-center'>
          {/* Replace this with your preferred loading spinner or indicator */}
          <Loading />
        </div>
      ) : (
        imageURLs.length > 0 && (
          <div className='mt-4 flex gap-2'>
            {imageURLs.map((url, index) => (
              <div key={index} className='relative aspect-square h-52'>
                <Image
                  src={url}
                  alt={`image-${index}`}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-contain'
                />
              </div>
            ))}
          </div>
        )
      )}</div>
  )
}
