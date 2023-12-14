'use server';
import prisma from '@/lib/prisma';
import { Product } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const fetchAllProduct = async () => {
  const products: Product[] = await prisma.product.findMany();
  return products;
};

const createProduct = async (formData: FormData) => {
  const quantity = formData.get('quantity') as string;
  const price = formData.get('price') as string;
  await prisma.product.create({
    data: {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      featured: false,
    },
  });
  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};

const getProductById = async (id: number) => {
  const myProduct: Product | null = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  return myProduct;
};

const updateProduct = async (id: number, formData: FormData) => {
  const quantity = formData.get('quantity') as string;
  const price = formData.get('price') as string;
  await prisma.product.update({
    where: { id: id },
    data: {
      id: id,
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      featured: false,
    },
  });
  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};

const deleteProduct = async (formData: FormData) => {
  const id = parseInt(formData.get('id') as string);
  await prisma.product.delete({
    where: { id: id },
  });
  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};

export {
  fetchAllProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
