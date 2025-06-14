interface WeatherCityData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const getWeatherData = async (city: string) => {
  try {
    const data = await fetch(
      `${process.env.BASE_URL}?&q=${city}&units=metric&lang=ru&appid=${process.env.API_KEY}`
    );
    const cityData = (await data.json()) as WeatherCityData;
``
    const formattedData = {
      cityName: cityData.name,
      weather: {
        id: cityData.weather[0].id,
        main: cityData.weather[0].main,
        description: cityData.weather[0].description,
      },
      temperature: {
        current: cityData.main.temp,
        feelsLike: cityData.main.feels_like,
        min: cityData.main.temp_min,
        max: cityData.main.temp_max,
        humidity: cityData.main.humidity,
        pressure: cityData.main.pressure,
      },
      windSpeed: cityData.wind.speed,
      clouds: cityData.clouds.all,
      visibility: cityData.visibility,
    };

    return formattedData;
  } catch (error) {
    console.log(error);
  }
};

export default getWeatherData;
