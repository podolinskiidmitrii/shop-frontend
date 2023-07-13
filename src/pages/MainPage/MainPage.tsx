import { Product, ProductList } from '@/entities/Product'
import { Header } from '@/shared/ui/page-elements'
import { Container } from '@mui/joy'

const products: Product[] = [
  {
    id: '1',
    title: 'Товар №1',
    price: 1000,
    image:
      'https://land-balls.ru/wp-content/uploads/big-buket-iz-sharov-moja-koroleva-.jpg',
  },
  {
    id: '2',
    title: 'Товар №2',
    price: 2000,
    image:
      'https://malinaparty.ru/wp-content/uploads/2022/07/nvbor-sharov-s-babls-zelenyy-hrom-i-serebro.jpg',
  },
  {
    id: '3',
    title: 'Товар №3',
    price: 3000,
    image:
      'https://static.insales-cdn.com/images/products/1/1298/627131666/3uzpxuyqnaiokk0s4o4c8000sww0s0.jpg',
  },
  {
    id: '4',
    title: 'Товар №4',
    price: 4000,
    image:
      'https://static.insales-cdn.com/images/products/1/7081/627129257/qc6m32duobkg4g4kwc0gg48sc4oc8c.jpg',
  },
  {
    id: '5',
    title: 'Товар №5',
    price: 5000,
    image:
      'https://static.insales-cdn.com/images/products/1/1298/627131666/3uzpxuyqnaiokk0s4o4c8000sww0s0.jpg',
  },
  {
    id: '6',
    title: 'Товар №6',
    price: 6000,
    image:
      'https://land-balls.ru/wp-content/uploads/big-buket-iz-sharov-moja-koroleva-.jpg',
  },
]

export function MainPage() {
  return (
    <div>
      <Header />
      <Container sx={{ minHeight: '1200px' }}>
        <ProductList products={products} />
        Container
      </Container>
    </div>
  )
}
