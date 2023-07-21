import { StateSchema } from '@/app/providers/StoreProvider'

export const getMainPageInited = (state: StateSchema) =>
  state.productsPage._inited
