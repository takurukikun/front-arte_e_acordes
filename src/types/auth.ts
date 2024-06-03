import { UserAPIProps } from '@/types/models/user'

export interface AxiosApiError<T> {
  error: keyof T
  message: string | string[]
  statusCode: number
}

export interface AuthStoreProps {
  profile?: Omit<UserAPIProps, 'id'>
  setProfile: (profile: UserAPIProps) => void
  signed?: boolean
  setSigned: (signed: boolean) => void
  logout: () => Promise<void>
}

export interface TokenProps {
  exp: number
  iat: number
  sessionId: number
}

export interface LoginReturnProps {
  idToken: string
  refreshToken: string
  user: UserAPIProps
}
