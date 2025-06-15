import React from "react";
import getFullWeatherData from "../lib/get-weather-data";
import CityNotFound from "@/shared/ui/city-not-found";
import PopularCities from "@/entities/cities/ui/popular-cities";
import Forecast from "@/entities/weather/forecast/forecast";

const AppInterface = async ({ city }: { city: string }) => {
  const weatherCityData = await getFullWeatherData(city);
  if (!weatherCityData) return <CityNotFound cityName={city} />;

  return (
    <main className="max-w-7xl w-full mx-auto p-5 bg-white/2">
      <Forecast weatherForecast={weatherCityData.forecast!} />
      <PopularCities />
    </main>
  );
};

export default AppInterface;
