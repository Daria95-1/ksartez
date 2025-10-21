import { RoutesConf } from '../app/core/enums/routes.enums'
import type { NavModel } from '../app/core/models/nav.models'
import { FaMapMarkerAlt, FaUsers, FaBookOpen, FaImages } from 'react-icons/fa'

const nav_menu: NavModel[] = [
  {
    id: 1,
    url: RoutesConf.main,
    name: 'Места',
    icon: FaMapMarkerAlt,
  },
  {
    id: 2,
    url: RoutesConf.people,
    name: 'Люди',
    icon: FaUsers,
  },
  {
    id: 3,
    url: RoutesConf.articles,
    name: 'Научные статьи',
    icon: FaBookOpen,
  },
  {
    id: 4,
    url: RoutesConf.gallery,
    name: 'Галерея',
    icon: FaImages,
  },
]

export { nav_menu }
