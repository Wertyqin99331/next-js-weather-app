import { IGetWeatherDTO } from '@/types/IGetWeatherDTO';
import { WeatherInfo } from '@/components/WeatherInfo';
import { YandexMap } from '@/components/YandexMap';
import { WEATHER_API_URL } from '@/const/api';

type WeatherWidgetProps = {
  lat: number,
  lon: number
}

const WeatherWidget = async ({ lat, lon }: WeatherWidgetProps) => {
  const res = await fetch(`${ WEATHER_API_URL }?q=${ lat },${ lon }&key=${ process.env.WEATHER_API_KEY }`, {
    method: 'GET',
    next: {
      revalidate: 60
    }
  }).then(res => res.json() as Promise<IGetWeatherDTO>)

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