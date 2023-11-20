'use client'

import { Map, Placemark, YMaps, } from '@pbe/react-yandex-maps';

type YandexMapProps = {
  latitude: number,
  longitude: number
}

const YandexMap = ({ latitude, longitude }: YandexMapProps) => {
  console.log('yandex rerender')

  return (
    <YMaps>
      <Map state={ { center: [latitude, longitude], zoom: 11 } } width='100%' height='300px'>
        <Placemark geometry={ [latitude, longitude] }/>
      </Map>
    </YMaps>
  );
};

export { YandexMap };