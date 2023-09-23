type Product = {
  id: number;
  name: string;
  des: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Random Shoe',
    des: 'Random Shoe from Random Brands',
    price: 200,
    image: '/img/product/shoe1.png',
  },
  {
    id: 2,
    name: 'Random Clothes',
    des: 'Random Clothes from Random Brands',
    price: 200,
    image: '/img/product/clothes1.png',
  },
  {
    id: 3,
    name: 'Random Jacket',
    des: 'Random Jacket from Random Brands',
    price: 200,
  },
  {
    id: 4,
    name: 'Random Pant',
    des: 'Random Pant from Random Brands',
    price: 200,
  },
];

export default products;
