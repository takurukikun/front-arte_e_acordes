import { AuthStoreProps } from '@/types/auth'
import Cookie from 'js-cookie'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useAuthState = create<AuthStoreProps>()(
  devtools(
    persist(
      (set, get) => ({
        setProfile: (profile) => {
          set(() => ({ profile }))
        },
        setSigned: (signed) => {
          set(() => ({ signed }))
        },
        logout: async () => {
          set(() => ({
            profile: undefined,
            company: undefined,
            signed: false,
            sector: undefined,
            cart: undefined,
          }))
          Cookie.remove('idToken')
          Cookie.remove('refreshToken')
          Cookie.remove('role')
          Cookie.remove('signed')
          Cookie.remove('expiresIn')
          window.location.reload()
        },
      }),
      {
        name: 'auth-state',
      },
    ),
  ),
)
