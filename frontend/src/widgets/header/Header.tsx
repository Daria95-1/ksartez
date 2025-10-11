import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../app/core/redux/store'
import { nav_menu } from '../../const/navMenu'
import { selectNav } from '../../app/core/redux/slice/menuSlice'
import { AsideContainer, ButtonContainer, UlContainer } from './Header.style'

export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selected = useSelector((state: RootState) => state.menu.selectNav)

  return (
    <AsideContainer>
      <UlContainer>
        {nav_menu.map((nav) => (
          <li key={nav.id}>
            <ButtonContainer
              selected={selected === nav.name}
              onClick={() => {
                dispatch(selectNav(nav.name))
                navigate(nav.url)
              }}
            >
              {nav.name}
            </ButtonContainer>
          </li>
        ))}
      </UlContainer>
    </AsideContainer>
  )
}
