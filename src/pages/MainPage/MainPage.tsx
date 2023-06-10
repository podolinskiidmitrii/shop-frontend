import { Header } from '@/shared/ui/page-elements'
import { Container } from '@mui/joy'

export function MainPage() {
  return (
    <div>
      <Header />
      <Container sx={{ minHeight: '1200px', border: '1px solid red' }}>
        Container
      </Container>
    </div>
  )
}
