import { Thermometer, Clock } from "lucide-react";

interface TemperatureCardProps {
  temperature: number;
  timestamp: string;
}

const TemperatureCard = async ({
  temperature,
  timestamp,
}: TemperatureCardProps) => {
  return (
    <div className="card weather-card m-2">
      <div className="card-header flex-column align-items-baseline">
        <h5 className="card-title">Aktuelle Temperatur</h5>
        <h6 className="card-subtitle">
          <Clock /> {timestamp}
        </h6>
      </div>
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <Thermometer size={40} className="mb-2" />
        <h3 className="card-title mb-2">{temperature} °C</h3>
      </div>
    </div>
  );
};

export default TemperatureCard;
