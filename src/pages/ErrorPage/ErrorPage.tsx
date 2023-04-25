import { Button, styled, Typography } from '@mui/joy'

export function ErrorPage() {
  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <PageWrapper>
      <Typography sx={{ p: '24px' }}>
        Произошла непредвиденная ошибка :(
      </Typography>
      <Button onClick={reloadPage}>Обновить страницу</Button>
    </PageWrapper>
  )
}

const PageWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
})
