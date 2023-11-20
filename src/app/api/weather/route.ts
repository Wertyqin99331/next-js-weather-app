import { WEATHER_API_URL } from '@/const/api';
import { NextResponse } from 'next/server';
import { IGetWeatherDTO } from '@/types/IGetWeatherDTO';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const lat = parseFloat(searchParams.get('lat') as string)
  const lon = parseFloat(searchParams.get('lon') as string)

  if (!lat || !lon) {
    return NextResponse.json({
      message: 'bad request'
    }, {
      status: 400
    })
  }

  const res = await fetch(`${ WEATHER_API_URL }?q=${ lat },${ lon }&key=${ process.env.WEATHER_API_KEY }`, {
    method: 'GET',
    next: {
      revalidate: 60
    }
  }).then(res => res.json() as Promise<IGetWeatherDTO>)

  return NextResponse.json(res, {
    status: 200
  })
}

