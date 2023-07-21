import { ReactNode } from 'react'
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
    <Grid
      container
      columns={12}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ padding: '20px' }}
    >
      {products.map((product) => (
        <Grid sm={6} md={4} xs={12} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}
