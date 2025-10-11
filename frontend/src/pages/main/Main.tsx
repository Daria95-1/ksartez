import { YandexMap } from '../map/YandexMap'
import { Container, MainContainer } from './Main.style'

export const Main = () => {
  return (
    <Container>
      <MainContainer>
        <YandexMap />
      </MainContainer>
    </Container>
  )
}
