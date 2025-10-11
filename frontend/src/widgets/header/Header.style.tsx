import styled from 'styled-components'

interface ButtonProps {
  selected: boolean
}

export const AsideContainer = styled.aside`
  width: 12rem;
  height: 100%;
  background: ${({ theme }) => theme.background};
  padding: 1rem;
`

export const UlContainer = styled.ul`
  liststyle: none;
  padding: 0;
`

export const ButtonContainer = styled.div<ButtonProps>`
  display: block;
  width: 100%;
  border: none;
  background: ${({ theme, selected }) =>
    selected ? theme.grey : 'transparent'};
  margin-top: 0.5rem;
  cursor: pointer;
`
