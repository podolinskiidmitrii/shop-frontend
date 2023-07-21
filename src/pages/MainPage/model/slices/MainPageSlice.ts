import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import type { Product } from '@/entities/Product'
import { StateSchema } from '@/app/providers/StoreProvider'
import { ReasonsFilter, ReasonsKeys } from '@/features/reasonFilter'
import { RecipientFilterType, RecipientsKeys } from '@/features/recipientFilter'

import { MainPageSchema } from '../types'

const productsEntityAdapter = createEntityAdapter<Product>({
  selectId: (state) => state.id,
})

export const getProducts = productsEntityAdapter.getSelectors<StateSchema>(
  (state) => state.productsPage || productsEntityAdapter.getInitialState(),
)

const reasonsFilter: ReasonsFilter = {
  Halloween: false,
  Birthday: false,
  Extract: false,
  GenderParty: false,
  Photosession: false,
  Anniversary: false,
  Wedding: false,
  NewYear: false,
  LoveDay: false,
  MansDay: false,
  WoomansDay: false,
  Graduation: false,
  SchoolDay: false,
}

const recipientFilter: RecipientFilterType = {
  LittleGirl: false,
  Boy: false,
  Girl: false,
  Guy: false,
  Mother: false,
  Father: false,
  GrandMa: false,
  GrandDad: false,
}

const mainPageSlice = createSlice({
  name: 'mainPageSlice',
  initialState: productsEntityAdapter.getInitialState<MainPageSchema>({
    _inited: false,
    ids: [],
    entities: {},
    search: '',
    page: 1,
    hasMore: true,
    limit: 12,
    reasonsFilter,
    recipientFilter,
  }),
  reducers: {
    initPage: (state) => {
      state._inited = true
    },
    setSeatchFilter: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    toggleReasonFilter: (state, action: PayloadAction<ReasonsKeys>) => {
      state.reasonsFilter[action.payload] = !state.reasonsFilter[action.payload]
    },
    toggleRecipientFilter: (state, action: PayloadAction<RecipientsKeys>) => {
      state.recipientFilter[action.payload] =
        !state.recipientFilter[action.payload]
    },
  },
})

export const { reducer: mainPageReducer } = mainPageSlice
export const { actions: mainPageActions } = mainPageSlice
