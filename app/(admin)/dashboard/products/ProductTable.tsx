import { Product } from '@prisma/client';
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
                {product.price}
              </td>
              <td className='border border-slate-900 bg-gray-200 py-2'>
                <button className='rounded-[4px] bg-green-400 px-4 py-1 text-white transition-colors hover:bg-green-700'>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
