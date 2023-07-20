import { userReducer } from '@/entities/User'
import { mainPageReducer } from '@/pages/MainPage/model/slices/MainPageSlice'
import {
  combineReducers,
  configureStore,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { StateSchema } from '../types/StoreTypes'

export function configureAppStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    productsPage: mainPageReducer,
  }

  const store = configureStore({
    reducer: combineReducers(rootReducers),
    preloadedState: initialState,
  })

  return store
}

export type AppDispatch = ReturnType<typeof configureAppStore>['dispatch']
