import image from '../../assets/underConstruction.png'
import { useNavigate } from 'react-router-dom'
import { RoutesConf } from '@/app/core/enums/routes.enums'
import { Button, Container, ImgContainer } from './UnderConstruction.style'

export const UnderConstruction = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate(`${RoutesConf.main}`)
  }

  return (
    <Container>
      <ImgContainer src={image} alt="В разработке" />
      <div>Страница в разработке...</div>
      <Button onClick={goToHome}>На главную</Button>
    </Container>
  )
}
