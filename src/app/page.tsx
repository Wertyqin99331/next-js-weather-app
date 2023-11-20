export const dynamic = 'force-dynamic'

import { HomeForm } from '@/components/HomeForm';
import { WeatherWidget } from '@/components/WeatherWidget';
import { Suspense } from 'react';

export default function Page({
                               params,
                               searchParams,
                             }: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log('page ------------ render')

  return <>
    <HomeForm/>
    { searchParams && Object.hasOwn(searchParams, 'lat') && Object.hasOwn(searchParams, 'lon') &&
        <Suspense fallback='Weather is loading....'>
          <WeatherWidget lat={ parseFloat(searchParams['lat'] as string) }
                         lon={ parseFloat(searchParams['lon'] as string) }/>
        </Suspense> }
  </>
}