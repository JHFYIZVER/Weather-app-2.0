import React from "react";
import getFullWeatherData from "../lib/get-weather-data";
import CityNotFound from "@/shared/ui/city-not-found";
import PopularCities from "@/entities/cities/ui/popular-cities";
import Forecast from "@/entities/weather/forecast/ui/forecast";
import CurrentWeather from "@/entities/weather/current/ui/current-weather";
import WindInfo from "@/entities/weather/highlights/ui/wind-info";
import VisibilityInfo from "@/entities/weather/highlights/ui/visibility-info";
import PressureInfo from "@/entities/weather/highlights/ui/pressure-info";
import HumidityInfo from "@/entities/weather/highlights/ui/humidity-info";
import SunsetInfo from "@/entities/weather/highlights/ui/sunset-info";
import SunriseInfo from "@/entities/weather/highlights/ui/sunrise-info";

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
    <main className="max-w-[1102px] w-full mx-auto p-5 bg-white/2">
      <div className="flex gap-2">
        <CurrentWeather currentWeather={formattedCurrnetWeather} />
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 content-center">
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
      </div>
      <div className="flex gap-2 mt-2">
        <div className="flex flex-col gap-2 max-w-[582px] w-full">
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
      </div>
    </main>
  );
};

export default AppInterface;
