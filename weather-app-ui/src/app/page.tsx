export const dynamic = "force-dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";
import { Video } from "./ui/video";
import { WeatherCard } from "./components/WeatherCard";
import { Carousel } from "./ui/carousel";
import TemperatureCard from "./components/TemperatureCard";
import TempDiffCard from "./components/TempDiffCard";
import HumidityCard from "./components/HumidityCard";
import {
  fetchWeatherData,
  fetchWeatherDataByLocationIdLastEntry,
  fetchAverageWeatherDataCurrentDay,
  fetchWeatherDataLastEntry,
} from "@/api/weatherDataApi";

import { fetchTemperatureDifferenceToday } from "@/api/openMeteo";
import { fetchLocations, fetchLocationById } from "@/api/locationApi";
import { WeatherLocation } from "@/interfaces/location";
import AverageWeatherCard from "./components/AverageWeatherCard";

const getLocations = async () => {
  const locations = await fetchLocations();
  return locations;
};

const getLocationById = async (id: number) => {
  const location = await fetchLocationById(id);
  return location.name;
};

const getLastEntryWeatherDataByLocation = async (location_id: number) => {
  const weatherData = await fetchWeatherDataByLocationIdLastEntry(location_id);
  return weatherData;
};

const getLastEntryWeatherData = async () => {
  const weatherData = await fetchWeatherDataLastEntry();
  return weatherData;
};

const getAverageWeatherData = async () => {
  const averageWeatherData = await fetchAverageWeatherDataCurrentDay();
  return averageWeatherData;
};

const getTemperatureDifferenceToday = async () => {
  const temperatureDifference = await fetchTemperatureDifferenceToday();
  return temperatureDifference;
};

export default async function Home() {
  const liveStreamUrl = process.env.NEXT_PUBLIC_LIVE_STREAM_URL;
  const liveStreamToken = process.env.NEXT_PUBLIC_LIVE_STREAM_TOKEN;

  const locations = await getLocations();

  const averageWeatherData = await getAverageWeatherData();

  const lastEntryWeatherData = await getLastEntryWeatherData();

  const temperatureDifferenceToday = await getTemperatureDifferenceToday();

  const weatherDataArray = await Promise.all(
    locations.map(async (location: WeatherLocation) => {
      const weatherData = await getLastEntryWeatherDataByLocation(location.id);
      return weatherData;
    })
  );
  const cards = await Promise.all(
    weatherDataArray.flat().map(async (data, index) => {
      if (data === null) {
        return null;
      }

      return (
        <WeatherCard
          key={index}
          location={await getLocationById(data.location_id)}
          timestamp={data.timestamp}
          temperature={data.temperature}
          humidity={data.humidity}
          windSpeed={data.wind_speed}
          rainAmount={data.rain_amount}
        />
      );
    })
  );

  return (
    <>
      <BootstrapClient />

      <div className="container-fluid d-flex flex-column">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch gap-3 w-100">
          <div
            className="flex-fill"
            style={{ maxWidth: "100%", minWidth: "200px", height: "100%" }}
          >
            {lastEntryWeatherData && (
              <TemperatureCard
                temperature={lastEntryWeatherData.temperature}
                timestamp={lastEntryWeatherData.timestamp}
              />
            )}
          </div>
          <div
            className="flex-fill"
            style={{ maxWidth: "100%", minWidth: "200px", height: "100%" }}
          >
            {lastEntryWeatherData && (
              <HumidityCard
                humidity={lastEntryWeatherData.humidity}
                timestamp={lastEntryWeatherData.timestamp}
              />
            )}
          </div>

          {averageWeatherData.length > 0 && (
            <div
              className="flex-fill"
              style={{ maxWidth: "100%", minWidth: "200px", height: "100%" }}
            >
              <AverageWeatherCard
                timestamp={averageWeatherData[0].timestamp}
                temperature={averageWeatherData[0].temperature}
                humidity={averageWeatherData[0].humidity}
                windSpeed={averageWeatherData[0].wind_speed}
                rainAmount={averageWeatherData[0].rain_amount}
              />
            </div>
          )}
          <div
            className="flex-fill"
            style={{ maxWidth: "100%", minWidth: "200px", height: "100%" }}
          >
            {temperatureDifferenceToday && (
              <TempDiffCard
                temperature={temperatureDifferenceToday.diff}
                timestamp={temperatureDifferenceToday.date}
              />
            )}
          </div>
        </div>

        <Carousel cards={cards.filter((card) => card !== null)} />
      </div>
    </>
  );
}
