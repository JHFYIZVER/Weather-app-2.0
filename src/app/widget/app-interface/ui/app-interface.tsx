import React from "react";
import getWeatherData from "../lib/get-weather-data";

const AppInterface = async ({ city }: { city: string }) => {
  const weatherCityData = await getWeatherData(city);
  console.log(weatherCityData);

  return <main>о</main>;
};

export default AppInterface;
