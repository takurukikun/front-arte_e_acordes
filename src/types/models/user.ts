import { DefaultProps } from '../index'

export type RoleAPIProps = 'admin' | 'user'

export interface UserAPIProps extends DefaultProps {
  id: number
  email: string
  active: boolean
  name: string
  role: RoleAPIProps
  userId?: number
}
