import { Droplet, Wind, Clock } from "lucide-react";

interface HumidityCardProps {
  humidity: number;
  timestamp: string;
}

const HumidityCard = async ({ humidity, timestamp }: HumidityCardProps) => {
  return (
    <div className="card weather-card m-2">
      <div className="card-header flex-column align-items-baseline">
        <h5 className="card-title">Aktuelle Luftfeuchtigkeit</h5>
        <h6 className="card-subtitle">
          <Clock /> {timestamp}
        </h6>
      </div>
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <div>
          <Wind size={40} className="mb-2" />
          <Droplet size={40} className="mb-2" />
        </div>
        <h3 className="card-title mb-2">{humidity} %</h3>
      </div>
    </div>
  );
};

export default HumidityCard;
