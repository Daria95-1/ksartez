import { lazy } from 'react'

export const Main = lazy(() =>
  import('@/pages/main/Main').then((mod) => ({
    default: mod.Main,
  }))
)

export const Places = lazy(() =>
  import('@/pages/places/Places').then((mod) => ({
    default: mod.Places,
  }))
)
export const People = lazy(() =>
  import('@/pages/people/People').then((mod) => ({
    default: mod.People,
  }))
)
export const Articles = lazy(() =>
  import('@/pages/articles/Articles').then((mod) => ({
    default: mod.Articles,
  }))
)
export const Gallery = lazy(() =>
  import('@/pages/gallery/Gallery').then((mod) => ({
    default: mod.Gallery,
  }))
)
