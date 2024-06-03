import { routesFront } from '@/lib/routes'

const getPermissionByPathRoute = (path: string) => {
  const sortedRoutes = routesFront.sort((a, b) => b.path.length - a.path.length)

  const route = sortedRoutes.find((route) => path.startsWith(route.path))
  return ['admin', 'user']
}

export const menuItems = [
  {
    name: 'Início',
    path: '/',
    dropdown: null,
    permissions: getPermissionByPathRoute('/'),
    private: false,
  },
  {
    name: 'Sobre nós',
    path: '/sobre',
    dropdown: null,
    permissions: getPermissionByPathRoute('/sobre'),
    private: false,
  },
  {
    name: 'Galeria de fotos',
    path: '/galeria-de-fotos',
    dropdown: null,
    permissions: getPermissionByPathRoute('/galeria-de-fotos'),
    private: false,
  },
  {
    name: 'Inscrições em cursos',
    dropdown: [
      {
        name: 'Violão Popular',
        path: '/cursos/violao-popular',
        permissions: getPermissionByPathRoute('/cursos'),
        private: false,
      },
      {
        name: 'Flauta Doce',
        path: '/cursos/flauta-doce',
        permissions: getPermissionByPathRoute('/cursos'),
        private: false,
      },
      {
        name: 'Percussão',
        path: '/cursos/percussao',
        permissions: getPermissionByPathRoute('/cursos'),
        private: false,
      },
      {
        name: 'Canto Coral',
        path: '/cursos/canto-coral',
        permissions: getPermissionByPathRoute('/cursos'),
        private: false,
      },
      {
        name: 'Oficina',
        path: '/cursos/oficina',
        permissions: getPermissionByPathRoute('/cursos'),
        private: false,
      },
    ],
    path: '#cursos',
    permissions: ['admin', 'user'],
    private: false,
  },
  {
    name: 'Contatos',
    path: '/contatos',
    dropdown: null,
    permissions: getPermissionByPathRoute('/contatos'),
    private: false,
  },
  {
    name: 'Faça uma doação',
    path: '/faca-uma-doacao',
    dropdown: null,
    permissions: getPermissionByPathRoute('/faca-uma-doacao'),
    private: false,
  },
]
