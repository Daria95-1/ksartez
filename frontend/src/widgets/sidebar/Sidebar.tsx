import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../app/core/redux/store'
import { nav_menu } from '../../const/navMenu'
import { selectNav } from '../../app/core/redux/slice/menuSlice'
import {
  AsideContainer,
  Inner,
  LogoWrapper,
  LogoImg,
  ToggleButton,
  UlContainer,
  Li,
  ButtonContainer,
  IconWrapper,
  Label,
  TopBox,
} from './Sidebar.style'
import logo from '../../assets/logo.png'
import miniLogo from '../../assets/mini-logo.svg'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { RoutesConf } from '@/app/core/enums/routes.enums'

export const Sidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selected = useSelector((state: RootState) => state.menu.selectNav)
  const [isOpened, setIsOpened] = useState<boolean>(true)

  const onClickNav = (nav: {
    id: string | number
    name: string
    url: string
  }) => {
    dispatch(selectNav(nav.name))
    navigate(nav.url)
  }

  const goToHome = () => {
    navigate(`${RoutesConf.main}`)
  }

  return (
    <AsideContainer isOpened={isOpened}>
      <Inner>
        <TopBox>
          <ToggleButton
            onClick={() => setIsOpened((s) => !s)}
            aria-label={isOpened ? 'Collapse sidebar' : 'Expand sidebar'}
            isOpened={isOpened}
          >
            {isOpened ? (
              <FaChevronLeft size={18} />
            ) : (
              <FaChevronRight size={18} />
            )}
          </ToggleButton>
        </TopBox>

        <LogoWrapper isOpened={isOpened} onClick={goToHome}>
          <LogoImg
            src={isOpened ? logo : miniLogo}
            alt="Logo"
            isOpened={isOpened}
          />
        </LogoWrapper>

        <UlContainer>
          {nav_menu.map((nav) => (
            <Li key={nav.id}>
              <ButtonContainer
                role="button"
                tabIndex={0}
                onClick={() => onClickNav(nav)}
                selected={selected === nav.name}
                isOpened={isOpened}
                title={!isOpened ? nav.name : undefined}
              >
                <IconWrapper>
                  {nav.icon ? (
                    <nav.icon />
                  ) : (
                    <span className="fallback">{nav.name[0]}</span>
                  )}
                </IconWrapper>

                <Label isOpened={isOpened}>{nav.name}</Label>
              </ButtonContainer>
            </Li>
          ))}
        </UlContainer>
      </Inner>
    </AsideContainer>
  )
}

export default Sidebar
