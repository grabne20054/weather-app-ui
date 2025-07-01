import { Thermometer, Clock, MoveRight, MoveLeft } from "lucide-react";

interface HeatRefluxCardProps {
  timestamp: string;
  heat?: number;
  reflux?: number;
}

export const HeatRefluxCard = ({
  timestamp,
  heat,
  reflux,
}: HeatRefluxCardProps) => {
  return (
    <div className="card weather-card m-2">
      <div className="card-header">
        <h5 className="card-title">Vorlauf Rücklauf Solar</h5>
      </div>
      <div className="card-body">
        <h6 className="card-subtitle">
          <Clock /> {timestamp}
        </h6>
        <div className="card-body">
          {heat !== undefined && (
            <h6 className="card-text">
              {" "}
              <Thermometer /> <MoveRight /> {heat}°C
            </h6>
          )}
          {reflux !== undefined && (
            <h6 className="card-text">
              {" "}
              <Thermometer />
              <MoveLeft /> {reflux}°C
            </h6>
          )}
        </div>
      </div>
    </div>
  );
};
