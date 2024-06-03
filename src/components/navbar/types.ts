import { UserAPIProps } from '@/types/models/user'
import { menuItems } from '@/components/navbar/constants'

export interface NavbarProps {
  menuItems: typeof menuItems
  pathname: string
  theme?: 'dark' | 'light'
  setTheme: (theme?: 'dark' | 'light') => void
  logout: () => void
  profile?: UserAPIProps
}
