import { AspectRatio, Box, Button, Card, Typography } from '@mui/joy'
import { Product } from '../../model/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard(props: ProductCardProps) {
  const {
    product: { title, price, image },
  } = props

  return (
    <Card variant="outlined" sx={{ width: 320, p: '10px' }}>
      <AspectRatio minHeight="220px" maxHeight="240px" sx={{ my: 2 }}>
        <img src={image} loading="lazy" alt="" />
      </AspectRatio>
      <Box sx={{ display: 'flex', p: '10px' }}>
        <div>
          <Typography level="body2">{price} руб</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {title}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Купить
        </Button>
      </Box>
    </Card>
  )
}
