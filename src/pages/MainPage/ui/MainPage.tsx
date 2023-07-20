import { Container } from '@mui/joy'
import { Header } from '@/widgets/Header'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { MainPageFilter } from './MainPageFilter/MainPageFilter'
import { MainPageContent } from './MainPageContent/MainPageContent'
import { mainPageActions } from '../model/slices/MainPageSlice'

export function MainPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(mainPageActions.initPage())
  }, [])

  return (
    <>
      <Header />
      <Container>
        <MainPageFilter />
        <MainPageContent />
      </Container>
    </>
  )
}
