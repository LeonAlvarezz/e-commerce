import Button from '@/components/button';
import { Product } from '@prisma/client';
import Link from 'next/link';
import { deleteProduct } from './helper/ProductHelper';
import prisma from '@/service/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import InputNumber from '../component/Sidebar/InputNumber';
import { formatFeatured, formatPrice } from '@/lib/format';
type Props = {
  products: Product[];
};
export default function ProductTable({ products }: Props) {
  return (
    <section className='mt-5'>
      <table className='w-full table-auto text-center'>
        <thead className='border border-red-800 bg-slate-500 text-white'>
          <tr>
            <th className='border border-slate-900 '>ID</th>
            <th className='border border-slate-900 '>Name</th>
            <th className='border border-slate-900 '>Description</th>
            <th className='border border-slate-900 '>Quantity</th>
            <th className='border border-slate-900 '>Price</th>
            <th className='border border-slate-900 '>Featured</th>
            <th className='border border-slate-900 '>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className='border border-slate-900 bg-gray-200 py-2'>
                {product.id}
              </td>
              <td className='border border-slate-900 bg-gray-200 py-2'>
                {product.name}
              </td>
              <td className='border border-slate-900 bg-gray-200 py-2'>
                {product.description}
              </td>
              <td className='border border-slate-900 bg-gray-200 py-2'>
                {product.quantity}
              </td>
              <td className='border border-slate-900 bg-gray-200 py-2'>
                {formatPrice(product.price)}
              </td>
              <td className='border border-slate-900 bg-gray-200 py-2'>
                {formatFeatured(product.featured)}
              </td>
              <td className='justify-center border border-slate-900 bg-gray-200 py-2'>
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
                    additionalClass='ml-2 bg-red-400 px-4 py-1 text-white transition-colors hover:bg-red-700 border-none'
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
