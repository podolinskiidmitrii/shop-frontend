import { ReactNode } from 'react'
import { Box, Button, Card, CardContent, CardCover, Typography } from '@mui/joy'
import { Product } from '../../model/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { title, price, image } = product

  return (
    <Card sx={{ minHeight: '300px', width: 320, margin: '20px' }}>
      <CardCover>
        <img src={image} loading="lazy" alt="" />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Box sx={{ display: 'flex' }}>
          <div>
            <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
              {title}
            </Typography>
            <Typography textColor="neutral.300">{price} руб</Typography>
          </div>
          <Button>Выбрать</Button>
        </Box>
      </CardContent>
    </Card>
  )
}
