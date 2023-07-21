import { appRoutes } from '@/shared/const/router'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './MainPage'

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path={appRoutes.getRouteMain()} element={<MainPage />} />
      </Routes>
    </Suspense>
  )
}
