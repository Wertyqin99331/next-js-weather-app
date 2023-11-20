import { IGetWeatherDTO } from '@/types/IGetWeatherDTO';

type WeatherInfoProps = {
  weatherInfo: IGetWeatherDTO
}

const getTime = (currentDate: string) => currentDate.split(' ')[1]

const WeatherInfo = ({ weatherInfo }: WeatherInfoProps) => {
  return (
    <>
      <img className='mx-auto' src={ weatherInfo.current.condition.icon } alt='icon'/>
      <div>Страна: { weatherInfo.location.country }</div>
      <div>Температура: { weatherInfo.current.temp_c }°</div>
      <div>Скорость ветра: { weatherInfo.current.wind_kph }км/ч</div>
      <div>Местное время: { getTime(weatherInfo.location.localtime) }</div>
    </>
  );
};

export { WeatherInfo };