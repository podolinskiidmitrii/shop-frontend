import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { configureAppStore } from '../config/store'

export function StoreProvider({ children }: PropsWithChildren) {
  const store = configureAppStore()

  return <Provider store={store}>{children}</Provider>
}
