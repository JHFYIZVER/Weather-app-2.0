import dynamic from "next/dynamic";

import getFullWeatherData from "../lib/get-weather-data";
import CityNotFound from "@/shared/ui/city-not-found";
import PopularCities from "@/entities/cities/ui/popular-cities";
import Forecast from "@/entities/weather/forecast/ui/forecast";
import WindInfo from "@/entities/weather/highlights/ui/wind-info";
import VisibilityInfo from "@/entities/weather/highlights/ui/visibility-info";
import PressureInfo from "@/entities/weather/highlights/ui/pressure-info";
import HumidityInfo from "@/entities/weather/highlights/ui/humidity-info";

const SunsetInfo = dynamic(
  () => import("@/entities/weather/highlights/ui/sunset-info")
);

const SunriseInfo = dynamic(
  () => import("@/entities/weather/highlights/ui/sunrise-info")
);
const CurrentWeather = dynamic(
  () => import("@/entities/weather/current/ui/current-weather")
);
const Map = dynamic(() => import("@/entities/map/ui/map"));

const AppInterface = async ({ city }: { city: string }) => {
  const weatherCityData = await getFullWeatherData(city);
  if (!weatherCityData) return <CityNotFound cityName={city} />;

  const formattedCurrnetWeather = {
    cityName: weatherCityData.current!.cityName,
    currentTemperature: weatherCityData.current!.temperature.current,
    feelsLikeTemperature: weatherCityData.current!.temperature.feelsLike,
    date: new Date().toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    icon: weatherCityData.current!.weather.main,
    description: weatherCityData.current!.weather.description,
    day: new Date().toLocaleDateString("ru-RU", { weekday: "long" }),
  };

  return (
    <main className="max-w-[1110px] w-full mx-auto p-5">
      <section className="flex flex-wrap gap-4 lg:flex-nowrap">
        <CurrentWeather currentWeather={formattedCurrnetWeather} />
        <div className="grid w-full gap-4 grid-cols-2 content-center lg:w-fit">
          <HumidityInfo
            humidity={weatherCityData.current!.temperature.humidity}
          />
          <PressureInfo
            pressure={weatherCityData.current!.temperature.pressure}
          />
          <VisibilityInfo visibility={weatherCityData.current!.visibility} />
          <WindInfo wind={weatherCityData.current!.wind} />
        </div>
        <PopularCities />
      </section>
      <section className="flex flex-wrap gap-4 mt-4 lg:flex-nowrap">
        <div className="flex flex-col gap-4 max-w-lg w-full">
          <SunriseInfo
            timezone={weatherCityData.current!.timezone}
            sunrise={weatherCityData.current!.sunrise}
          />
          <SunsetInfo
            timezone={weatherCityData.current!.timezone}
            sunset={weatherCityData.current!.sunset}
          />
        </div>
        <Forecast forecastWeather={weatherCityData.forecast!} />
      </section>
      <Map
        lat={weatherCityData.current!.coord.lat}
        lon={weatherCityData.current!.coord.lon}
      />
    </main>
  );
};

export default AppInterface;
