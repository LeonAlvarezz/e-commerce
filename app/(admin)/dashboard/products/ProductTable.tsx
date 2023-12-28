import Button from '@/app/(admin)/dashboard/component/ui/button';
import { Product } from '@prisma/client';
import Link from 'next/link';
import { deleteProduct } from './helper/ProductHelper';
import { formatFeatured, formatPrice } from '@/lib/format';
import InputNumber from '../component/ui/InputNumber';
import Image from 'next/image';
type Props = {
  products: Product[];
};
export default function ProductTable({ products }: Props) {
  if (products.length === 0) {
    return (
      <section className='w-full py-24 text-center'>
        <p>No products available.</p>
      </section>
    );
  }
  return (
    <section className='mt-5 '>
      <table className='relative min-w-full overflow-x-auto sm:rounded-lg'>
        <thead className=' bg-slate-500 text-white'>
          <tr>
            <th scope='col' className='p-2'>
              ID
            </th>
            <th scope='col' className='p-2'>
              Image
            </th>
            <th scope='col' className='p-2'>
              Name
            </th>
            <th scope='col' className='p-2'>
              Description
            </th>
            <th scope='col' className='p-2'>
              Quantity
            </th>
            <th scope='col' className='p-2'>
              Price
            </th>
            <th scope='col' className='p-2'>
              Featured
            </th>
            <th scope='col' className='p-2'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className='border-b border-slate-400 bg-gray-200 text-center  hover:cursor-pointer hover:bg-gray-300'
            >
              <th scope='row' className='border-r border-gray-400 px-3 py-2'>
                {product.id}
              </th>
              <td className='p-2'>
                {product.image == '' ? (
                  <div className='relative flex aspect-video h-16 w-full justify-center shadow-md lg:h-auto'>
                    <Image
                      src={'/img/placeholder.png'}
                      fill
                      className='object-contain'
                      alt='placeholder'
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div>
                ) : (
                  <div className='relative flex aspect-video h-16 w-full justify-center shadow-md lg:h-auto'>
                    <Image
                      src={product.image}
                      fill
                      className='object-contain'
                      alt=''
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                  </div>
                )}
              </td>
              <td scope='row' className='px-2 py-2'>
                {product.name}
              </td>
              <td scope='row' className='px-1 py-2'>
                {product.description}
              </td>
              <td scope='row' className='px-1 py-2'>
                {product.quantity}
              </td>
              <td scope='row' className='px-1 py-2'>
                {formatPrice(product.price)}
              </td>
              <td scope='row' className='px-1 py-2'>
                {formatFeatured(product.featured)}
              </td>
              <td scope='row' className='px-1 py-2 text-left lg:text-center'>
                <Link
                  href='/dashboard/products/update-product?id=[product.id]'
                  as={`/dashboard/products/update-product/?id=${product.id}`}
                >
                  <Button
                    label='Edit'
                    additionalClass='bg-green-400 px-4 py-1 text-white transition-colors hover:bg-green-700 border-none'
                  />
                </Link>
                <form action={deleteProduct} className='inline-block'>
                  <InputNumber
                    name='id'
                    placeholder='10'
                    value={product.id}
                    additionalClass='hidden'
                  />
                  <Button
                    label='Delete'
                    additionalClass='mt-2 lg:ml-2 bg-red-400 px-4 py-1 text-white transition-colors hover:bg-red-700 border-none'
                  />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
