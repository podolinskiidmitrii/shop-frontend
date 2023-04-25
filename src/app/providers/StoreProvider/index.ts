import { StoreProvider } from './ui/StoreProvider'
import { configureAppStore, AppDispatch } from './config/store'

import type { StateSchema } from './types/StoreTypes'

export { StoreProvider, configureAppStore }

export type { StateSchema, AppDispatch }
