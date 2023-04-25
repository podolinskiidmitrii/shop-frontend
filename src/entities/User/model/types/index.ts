export interface User {
  id: string
  username: string
  phone?: string
  avatar?: string
}

export interface UserSchema {
  userData?: User
  _inited: boolean
}
