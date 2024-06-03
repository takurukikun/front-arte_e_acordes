'use client'

import logo from '@/assets/images/logo.png'

import {
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  User,
} from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'
import {
  FaHome,
  FaMap,
  FaMoon,
  FaSignOutAlt,
  FaSun,
  FaUser,
} from 'react-icons/fa'
import { fisrtAndSecondLetterName, formatName } from './functions'
import { capitalize } from '@nextui-org/shared-utils'
import { NavbarProps } from '@/components/navbar/types'
import { useRouter } from 'next/navigation'

const NavbarWrapper = ({
  menuItems,
  pathname,
  theme,
  setTheme,
  logout,
  profile,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      classNames={{
        wrapper: 'max-w-none w-screen px-4 md:px-8 2xl:px-16 bg-main-300',
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close' : 'Open'}
          className="md:hidden"
        />
        <NavbarBrand className="text-2xl text-foreground">
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={160}
            className="max-h-12 w-28"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {menuItems
          .filter((a) => a.dropdown === null)

          .map((item) => (
            <NavbarItem
              key={item.path}
              isActive={
                item.path === '/'
                  ? pathname === '/'
                  : pathname?.includes(item.path)
              }
            >
              <Link
                className="cursor-pointer"
                color="foreground"
                // href={item.path}
                onClick={() => router.push(item.path)}
                title={item.name}
              >
                <span className="hidden mdlg:flex">{item.name}</span>
              </Link>
            </NavbarItem>
          ))}
        {menuItems
          .filter((a) => a.dropdown !== null)
          .filter(
            (a) => !a.private || a.permissions?.includes(profile?.role as any),
          )
          .map((item) => (
            <NavbarItem key={item.path}>
              <Dropdown placement="bottom-end" className="w-lg">
                <DropdownTrigger title={item.name}>
                  <div className="flex cursor-pointer items-center hover:text-foreground-600">
                    <span className="hidden items-center mdlg:flex">
                      {item.name}
                    </span>
                  </div>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label={`Dropdown navbar ${item.path}`}
                  variant="flat"
                >
                  {item.dropdown!.map((itemDropdown) => (
                    <DropdownItem
                      key={itemDropdown.path}
                      className={cn(
                        'h-14 cursor-pointer gap-2 text-foreground',
                        `[&>span]:font-semibold ${
                          !itemDropdown.private ||
                          itemDropdown.permissions?.includes(
                            profile?.role as any,
                          )
                            ? ''
                            : 'hidden'
                        }`,
                      )}
                      href={itemDropdown.path}
                      as={Link}
                      textValue={itemDropdown.name}
                    >
                      <div className="flex items-center">
                        {itemDropdown.name}
                      </div>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {profile && (
          <NavbarItem key="profile">
            <Dropdown placement="bottom-end" className="w-lg">
              <DropdownTrigger>
                <User
                  name={formatName(profile?.name || '') || 'No name'}
                  avatarProps={{
                    name: fisrtAndSecondLetterName(profile?.name || ''),
                    showFallback: true,
                    className: 'mr-2 cursor-pointer',
                    // src: profile?.photo,
                  }}
                  classNames={{
                    description: 'hidden cursor-pointer 2xs:block',
                    name: 'hidden cursor-pointer 2xs:block',
                  }}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Perfil" variant="flat">
                <DropdownItem
                  onClick={() => {
                    router.push(`/user/${profile?.id}`)
                  }}
                  key="profile"
                  startContent={<FaUser />}
                  textValue={'My profile'}
                >
                  My profile
                </DropdownItem>
                <DropdownItem
                  key="theme"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  startContent={theme === 'dark' ? <FaMoon /> : <FaSun />}
                  textValue={`Theme: ${capitalize(theme ?? 'light')}`}
                >
                  Theme: {capitalize(theme ?? 'light')}
                </DropdownItem>
                <DropdownItem
                  onClick={() => logout()}
                  key="logout"
                  color="danger"
                  startContent={<FaSignOutAlt className="text-danger" />}
                  textValue={'Log-out'}
                >
                  Log-out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        )}
        {!profile && (
          <NavbarItem key="login">
            <Link
              color="foreground"
              className="cursor-pointer"
              onClick={() => router.push('/login')}
            >
              Login
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu className={'pt-8'}>
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={item.path}
            isActive={item.path?.includes(pathname)}
          >
            <Link
              color="foreground"
              className="w-full cursor-pointer"
              // href={item.path}
              size="lg"
              onClick={() => {
                router.push(item.path)
                setIsMenuOpen(false)
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavbarWrapper
