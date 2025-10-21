import { useState } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { places, type Place } from '../../app/core/api/mocks/mockPlaces'
import {
  ButtonContainer,
  Container,
  DescriptionContainer,
  DetailButton,
} from './YandexMap.style'
import { truncateText } from '@/utils/textUtils'

export const YandexMap = () => {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)

  const handlePlacemarkClick = (place: Place) => {
    setSelectedPlace(place)
  }

  const handleClose = () => {
    setSelectedPlace(null)
  }

  return (
    <Container>
      <YMaps>
        <Map
          defaultState={{ center: [55.751244, 37.618423], zoom: 8 }}
          style={{ width: '100%', height: '100%' }}
        >
          {places.map((place) => (
            <Placemark
              key={place.id}
              geometry={place.coords}
              options={{ preset: 'islands#redIcon' }}
              onClick={() => handlePlacemarkClick(place)}
            />
          ))}
        </Map>
      </YMaps>

      {selectedPlace && (
        <DescriptionContainer>
          <ButtonContainer onClick={handleClose}>✕</ButtonContainer>
          <h3>{selectedPlace.title}</h3>
          <p>{truncateText(selectedPlace.description)}</p>
          <DetailButton onClick={() => {}}>Подробнее</DetailButton>
        </DescriptionContainer>
      )}
    </Container>
  )
}
