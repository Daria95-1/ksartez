import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`

export const CircularProgress = styled.div`
  border: 0.4rem solid #f3f3f3;
  border-top: 0.4rem solid ${({ theme }) => theme.orange};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${spin} 1s linear infinite;
`

export const OutletStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-height: 18.75rem;
`

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
