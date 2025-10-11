import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 106rem;
  height: 57.4rem;
`

export const DescriptionContainer = styled.div`
  position: absolute;
  top: 12.5rem;
  right: 12.5rem;
  width: 31.3rem;
  background: ${({ theme }) => theme.white};
  border: 0.1rem solid ${({ theme }) => theme.grey};
  border-radius: 0.5rem;
  padding: 0.9rem;
  box-shadow: 0 0.1rem 0.6rem rgba(0, 0, 0, 0.2);
  z-index: 10;
`

export const ButtonContainer = styled.button`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  border: none;
  background: transparent;
  font-size: 1rem;
  cursor: pointer;
`

export const DetailButton = styled.button`
  margin-top: 0.6rem;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
`
