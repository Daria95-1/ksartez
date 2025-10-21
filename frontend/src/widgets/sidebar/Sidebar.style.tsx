import styled from 'styled-components'

interface AsideProps {
  isOpened: boolean
}

interface ButtonProps {
  selected: boolean
  isOpened: boolean
}

interface LogoImgProps {
  isOpened: boolean
}

export const AsideContainer = styled.aside<AsideProps>`
  height: 100vh;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.02) inset;
  transition: width 0.22s ease;
  width: ${({ isOpened }) => (isOpened ? '11.5rem' : '6rem')};
  display: flex;
  flex-direction: column;
  overflow: visible;
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
`

export const LogoWrapper = styled.div<AsideProps>`
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img<LogoImgProps>`
  width: ${({ isOpened }) => (isOpened ? '10rem' : '3rem')};
  height: ${({ isOpened }) => (isOpened ? '5rem' : '2rem')};
  object-fit: contain;
  transition:
    width 0.22s ease,
    height 0.22s ease;
`

export const UlContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.25rem 0;
  flex: 1 1 auto;
  overflow: auto;
`

export const Li = styled.li`
  margin: 0;
  padding: 0;
`

export const ButtonContainer = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0.5rem;
  padding-left: ${({ isOpened }) => (isOpened ? '1rem' : '0.5rem')};
  border-radius: 0.5rem;
  background: ${({ theme, selected }) =>
    selected ? theme.orange : 'transparent'};
  color: ${({ theme }) => theme.lightOrange};
  transition:
    background 0.15s ease,
    padding 0.15s ease;
  user-select: none;

  &:hover {
    background: ${({ theme, selected }) =>
      selected ? theme.grey : 'rgba(0,0,0,0.04)'};
  }
`

export const IconWrapper = styled.div`
  width: 2.25rem;
  min-width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.brown};

  .fallback {
    font-weight: 700;
  }
`

export const Label = styled.span<{ isOpened: boolean }>`
  display: ${({ isOpened }) => (isOpened ? 'inline' : 'none')};
  white-space: nowrap;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.black};
  flex: 1 1 auto;
`

export const TopBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

export const ToggleButton = styled.button<{ isOpened: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-20%);
  right: -1.25rem;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.brown};
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.3);

  &:hover {
    background: ${({ theme }) => theme.background};
  }
`
