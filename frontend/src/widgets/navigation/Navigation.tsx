import type { FC } from 'react'
import { NavList, NavLink } from './Navigation.style'
import type { NavModel } from '../../app/core/models/nav.models'

type LinksProps = {
  data: NavModel[]
  linkColor?: string
}

export const Navigation: FC<LinksProps> = ({ data, linkColor }) => {
  return (
    <NavList>
      {data.map(({ name, url, id }) => (
        <li key={id}>
          <NavLink to={url} linkColor={linkColor}>
            {name}
          </NavLink>
        </li>
      ))}
    </NavList>
  )
}
