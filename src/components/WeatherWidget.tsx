import { IGetWeatherDTO } from '@/types/IGetWeatherDTO';
import { WeatherInfo } from '@/components/WeatherInfo';
import { YandexMap } from '@/components/YandexMap';

type WeatherWidgetProps = {
  lat: number,
  lon: number
}

const WeatherWidget = async ({ lat, lon }: WeatherWidgetProps) => {
  const res = await fetch(`api/weather?lat=${ lat }&lon=${ lon }`).then(res => res.json()) as IGetWeatherDTO

  return (
    <div className='pt-40 text-black text-3xl font-normal flex flex-col gap-y-4 items-center'>
      { (!res || !res.current)
        ? <>No data</>
        : <>
          <YandexMap latitude={ lat } longitude={ lon }/>
          <WeatherInfo weatherInfo={ res }/>
        </> }
    </div>
  );
};

export { WeatherWidget };