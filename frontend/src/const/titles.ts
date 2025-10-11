import { RoutesConf } from '../app/core/enums/routes.enums'

export type RoutesConfValues = `${RoutesConf}`

export const Titles: Record<RoutesConfValues, string> = {
  [RoutesConf.main]: 'Главная',
  [RoutesConf.places]: 'Места',
  [RoutesConf.people]: 'Люди',
  [RoutesConf.articles]: 'Научные статьи',
  [RoutesConf.gallery]: 'Галерея',
} as const
