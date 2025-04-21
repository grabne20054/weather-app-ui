import { Thermometer, Wind, Droplet, Clock, Droplets, Percent } from 'lucide-react';

interface AverageWeatherCardProps {
    timestamp: string;
    temperature?: number;
    humidity?: number;
    windSpeed?: number;
    rainAmount?: number;
}

const AverageWeatherCard = ({ timestamp, temperature, humidity, windSpeed, rainAmount }: AverageWeatherCardProps) => {
    return (
        <div className="card weather-card m-2">
            <div className="card-header">
                <h5 className="card-title">Durchschnittlicher Tageswert</h5>
            </div>         
            <div className="card-body">
            <h6 className="card-subtitle"><Clock/> {timestamp}</h6>
            <div className="card-body">
            {temperature !== undefined && (
                <h6 className="card-text"> <Thermometer/> {temperature}°C</h6>
            )}
            {humidity !== undefined && (
                <h6 className="card-text"> <Wind/><Droplet/> {humidity} <Percent size={16}/> </h6>
            )}
            {windSpeed !== undefined && (
                <h6 className="card-text"><Wind/> {windSpeed} km/h</h6>
            )}
            {rainAmount !== undefined && (
                <h6 className="card-text"><Droplets/> {rainAmount} mm</h6>
            )}
            </div>
            </div>
        </div>
    );
}

export default AverageWeatherCard;
