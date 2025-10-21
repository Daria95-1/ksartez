import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ImgContainer = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Button = styled.button`
  margin-top: 0.6rem;
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  border: none;
  background: ${({ theme }) => theme.lightOrange};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.orange};
  }
`
