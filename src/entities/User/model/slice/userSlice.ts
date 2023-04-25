import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types'

const initialState: UserSchema = {
  _inited: false,
}

const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    initAuthData: (state) => {
      state._inited = true
    },
  },
})

export const { reducer: userReducer, actions: userActions } = UserSlice
