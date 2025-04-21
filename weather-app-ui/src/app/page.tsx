import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";
import { Video } from "./ui/video";
import { WeatherCard } from "./components/WeatherCard";
import { Carousel } from "./ui/carousel";
import { fetchWeatherData, fetchWeatherDataByLocationIdLastEntry, fetchAverageWeatherDataCurrentDay } from "@/api/weatherDataApi";
import { fetchLocations, fetchLocationById } from "@/api/locationApi";
import { WeatherLocation } from "@/interfaces/location";
import AverageWeatherCard from "./components/AverageWeatherCard";

const getLocations = async () => {
  const locations = await fetchLocations();
  return locations;
}

const getLocationById = async (id: number) => {
  const location = await fetchLocationById(id);
  return location.name;
}

const getLastEntryWeatherData = async (location_id: number) => {
  const weatherData = await fetchWeatherDataByLocationIdLastEntry(location_id);
  return weatherData;
}

const getAverageWeatherData = async () => {
  const averageWeatherData = await fetchAverageWeatherDataCurrentDay();
  return averageWeatherData;
}

export default async function Home() {
  const liveStreamUrl = process.env.NEXT_PUBLIC_LIVE_STREAM_URL;
  const liveStreamToken = process.env.NEXT_PUBLIC_LIVE_STREAM_TOKEN;

  const locations = await getLocations();

  const averageWeatherData = await getAverageWeatherData();

  const weatherDataArray = await Promise.all(
  locations.map(async (location: WeatherLocation) => {
    const weatherData = await getLastEntryWeatherData(location.id);
    return weatherData
  })
  );
  const cards = await Promise.all(weatherDataArray.flat().map(async (data, index) => {
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
  }));

  return (
    <>
      <BootstrapClient />
      
      <div className="container-fluid d-flex flex-column">
        <Carousel cards={cards.filter((card) => card !== null)}/>
        <AverageWeatherCard
          timestamp={averageWeatherData[0].timestamp}
          temperature={averageWeatherData[0].temperature}
          humidity={averageWeatherData[0].humidity}
          windSpeed={averageWeatherData[0].wind_speed}
          rainAmount={averageWeatherData[0].rain_amount}
        />
        
        </div>
        
    </>
  );
}