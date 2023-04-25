import { Grid, styled } from '@mui/joy'
import { Product } from '../../model/types'
import { ProductCard } from '../ProductCard/ProductCard'

interface ProductListProps {
  products: Product[]
}

export function ProductList(props: ProductListProps) {
  const { products } = props

  if (!products.length) return <div></div>

  return (
    <Grid container spacing={2} sx={{ padding: '20px' }}>
      {products.map((product) => (
        <Grid key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}
