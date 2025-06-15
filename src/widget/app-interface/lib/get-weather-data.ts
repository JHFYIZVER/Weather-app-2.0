import {
  DailyForecast,
  WeatherCityData,
  WeatherForecastData,
} from "./weather-interfaces";

const getWeatherData = async (city: string) => {
  try {
    const data = await fetch(
      `${process.env.BASE_URL}/weather?&q=${city}&units=metric&lang=ru&appid=${process.env.API_KEY}`
    );
    if (!data.ok) return null;
    const cityData = (await data.json()) as WeatherCityData;
    if (!cityData) return null;
    const formattedData = {
      cityName: cityData.name,
      weather: {
        id: cityData.weather[0].id,
        main: cityData.weather[0].main,
        description: cityData.weather[0].description,
      },
      temperature: {
        current: Math.round(cityData.main.temp),
        feelsLike: Math.round(cityData.main.feels_like),
        min: cityData.main.temp_min,
        max: cityData.main.temp_max,
        humidity: cityData.main.humidity,
        pressure: cityData.main.pressure,
      },
      wind: {
        speed: cityData.wind.speed,
        deg: cityData.wind.deg,
        gust: cityData.wind.gust,
      },
      sunrise: cityData.sys.sunrise,
      timezone: cityData.timezone,
      sunset: cityData.sys.sunset,
      clouds: cityData.clouds.all,
      visibility: cityData.visibility,
      coord: {
        lat: cityData.coord.lat,
        lon: cityData.coord.lon,
      },
    };

    return formattedData;
  } catch (error) {
    console.log(error);
  }
};

const getWeatherForecast = async (city: string) => {
  try {
    const data = await fetch(
      `${process.env.BASE_URL}/forecast?q=${city}&units=metric&lang=ru&appid=${process.env.API_KEY}`
    );
    if (!data.ok) return null;
    const forecastData = (await data.json()) as WeatherForecastData;
    const groupedByDay: Record<string, (typeof forecastData.list)[0][]> = {};
    forecastData.list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!groupedByDay[date]) {
        groupedByDay[date] = [];
      }
      groupedByDay[date].push(item);
    });
    const dailyForecasts: DailyForecast[] = Object.keys(groupedByDay)
      .slice(0, 5)
      .map((date) => {
        const dayItems = groupedByDay[date];
        const temps = dayItems.map((item) => item.main.temp);
        const tempMin = Math.min(...temps);
        const tempMax = Math.max(...temps);
        return {
          date,
          tempMin: Math.round(tempMin),
          tempMax: Math.round(tempMax),
          description: dayItems[0].weather[0].main,
        };
      });

    return {
      forecast: dailyForecasts,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getFullWeatherData = async (city: string) => {
  const current = await getWeatherData(city);
  const forecast = await getWeatherForecast(city);

  if (!current && !forecast) return null;

  return {
    current,
    forecast,
  };
};

export default getFullWeatherData;
