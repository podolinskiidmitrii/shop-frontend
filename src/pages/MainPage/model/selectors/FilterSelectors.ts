import { StateSchema } from '@/app/providers/StoreProvider'

export const getReasonsFilters = (state: StateSchema) =>
  state.productsPage.reasonsFilter || {}

export const getRecipientFilters = (state: StateSchema) =>
  state.productsPage.recipientFilter || {}
