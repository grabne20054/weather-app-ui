import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";
import { Video } from "./ui/video";
import { WeatherCard } from "./components/WeatherCard";
import { Carousel } from "./ui/carousel";

export default function Home() {
  const liveStreamUrl = process.env.NEXT_PUBLIC_LIVE_STREAM_URL;
  const liveStreamToken = process.env.NEXT_PUBLIC_LIVE_STREAM_TOKEN;

  const cards = [
    <WeatherCard
      location="Los Angeles"
      recordedAt="2023-10-01 12:00"
      temperature={30}
      humidity={50}
      windSpeed={10}
      rainAmount={0}
    />,
    <WeatherCard
      location="Chicago"
      recordedAt="2023-10-01 12:00"
      temperature={20}
      humidity={70}
      windSpeed={5}
      rainAmount={0}
    />,
    <WeatherCard
      location="Houston"
      recordedAt="2023-10-01 12:00"
      temperature={28}
      humidity={65}
      windSpeed={8}
      rainAmount={0}
    />]

  return (
    <>
      <BootstrapClient />
      <div className="d-none d-md-block container">
        {liveStreamUrl && liveStreamToken && <Video src={liveStreamUrl + liveStreamToken} />}
      </div>
        
        <div className="container">
        <Carousel cards={cards}/>
        </div>
    </>
  );
}