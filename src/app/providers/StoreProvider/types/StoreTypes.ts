import { UserSchema } from '@/entities/User'
import { MainPageSchema } from '@/pages/MainPage'

export interface StateSchema {
  user: UserSchema
  productsPage: MainPageSchema
}
