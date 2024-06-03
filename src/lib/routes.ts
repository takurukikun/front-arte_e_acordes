import { RoleAPIProps } from '@/types/models/user'

export const routesFront: {
  path: string
  private: boolean
  permissions?: RoleAPIProps[]
}[] = [
  // private routes
  {
    path: '/',
    private: true,
    permissions: ['admin', 'user'],
  },
  {
    path: '/user',
    private: true,
    permissions: ['admin'],
  },
  // public routes
  {
    path: '/login',
    private: false,
  },
]
