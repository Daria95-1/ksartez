import { RoutesConf } from '../app/core/enums/routes.enums'
import type { NavModel } from '../app/core/models/nav.models'

const nav_menu: NavModel[] = [
  {
    id: 1,
    url: RoutesConf.places,
    name: 'Места',
  },
  {
    id: 2,
    url: RoutesConf.people,
    name: 'Люди',
  },
  {
    id: 3,
    url: RoutesConf.articles,
    name: 'Научные статьи',
  },
  {
    id: 4,
    url: RoutesConf.gallery,
    name: 'Галерея',
  },
]

export { nav_menu }
