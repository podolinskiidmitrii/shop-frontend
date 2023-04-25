import { getUserInit, userActions } from '@/entities/User'
import { AppRouter } from '@/pages/AppRouter'
import { Container } from '@mui/joy'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const App = () => {
  const isInit = useSelector(getUserInit)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return <Container>{isInit && <AppRouter />}</Container>
}
