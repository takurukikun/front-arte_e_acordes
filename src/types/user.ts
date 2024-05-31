import { DefaultProps } from '.'

export interface PasswordResetTokenProps {
  id: number
  value: string
  expires: string | null
  userId: number
  createdAt: string
  updateAt: string
}

export interface UserProps extends DefaultProps {
  id: number
  email: string
  active: boolean
  name: string
  role: 'admin' | 'user'
  userId?: number
}
