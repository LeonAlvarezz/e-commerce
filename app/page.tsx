import Navbar from '@/components/navbar'
import TopPromotionBanner from '@/components/top_promotion_banner'
import Image from 'next/image'
import Product from '@/components/product'

export default function Home() {
  return (
    <>
      <Navbar/>
      <TopPromotionBanner/>
      <Product></Product>
    </>
  )
}
