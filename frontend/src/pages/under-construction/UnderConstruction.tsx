import { Button, Container, ImgContainer } from './UnderConstruction.style'
import image from '../../assets/underConstruction.png'

export const UnderConstruction = () => {
  return (
    <Container>
      <ImgContainer src={image} alt="В разработке" />
      <div>Страница в разработке...</div>
      <Button>На главную</Button>
    </Container>
  )
}
