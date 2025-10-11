import { NavLink as RouterNavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavList = styled.ul`
  display: flex;
  gap: 1.9rem;

  & * {
    font-weight: bold;
  }
`
export const NavLink = styled(RouterNavLink)<{ linkColor?: string }>`
  text-decoration: none;
  color: ${({ linkColor }) => linkColor || 'inherit'};
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: ${({ linkColor, theme }) => linkColor || theme.blue};
  }
`
