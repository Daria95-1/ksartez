import { createHashRouter } from 'react-router-dom'
import { App } from '../App'
import { RoutesConf } from '../core/enums/routes.enums'
import {
  Main,
  People,
  Articles,
  Gallery,
  UnderConstruction,
} from './lazyRoutes'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: RoutesConf.people,
        element: <People />,
      },
      {
        path: RoutesConf.articles,
        element: <Articles />,
      },
      {
        path: RoutesConf.gallery,
        element: <Gallery />,
      },
      {
        path: RoutesConf.underConstruction,
        element: <UnderConstruction />,
      },
    ],
  },
])
