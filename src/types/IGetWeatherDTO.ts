export interface IGetWeatherDTO {
  location: {
    country: string,
    localtime: string
  },
  current: {
    temp_c: number,
    condition: {
      icon: string
    },
    wind_kph: number
  }
}