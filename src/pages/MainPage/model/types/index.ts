import { Product } from '@/entities/Product'
import { ReasonsFilter } from '@/features/reasonFilter'
import { RecipientFilterType } from '@/features/recipientFilter'
import { EntityState } from '@reduxjs/toolkit'

export interface MainPageSchema extends EntityState<Product> {
  isLoading?: boolean
  error?: string

  page: number
  limit: number
  hasMore: boolean

  // filters
  search: string
  reasonsFilter: ReasonsFilter
  recipientFilter: RecipientFilterType

  _inited: boolean
}
