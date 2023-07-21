import { ProductList } from '@/entities/Product'
import { useSelector } from 'react-redux'
import { getProducts } from '../../model/slices/MainPageSlice'

export const MainPageContent = () => {
  const products = useSelector(getProducts.selectAll)

  return <ProductList products={products} />
}
