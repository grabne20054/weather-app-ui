import { Thermometer, Droplets, Droplet, Percent, Wind, Clock, MapPinned, Tag, Sun, CloudRain, Cloud } from "lucide-react"

interface WeatherCardProps {
    location: string;
    recordedAt: string;
    temperature?: number;
    humidity?: number;
    windSpeed?: number;
    rainAmount?: number;
}

const handleWeatherCondition = ({ temperature, humidity, windSpeed, rainAmount }: WeatherCardProps) => {
    
    let icon;

    // sunny
    if (rainAmount === 0 && temperature != undefined && temperature > 0 && humidity !== undefined && humidity < 60) {
        icon = <Sun/>;
    }
    // rainy
    else if (rainAmount !== 0) {
        icon = <CloudRain/>;
    }
    // cloudy
    else if (humidity !== undefined && humidity > 50) {
        icon = <Cloud/>;
    }
    // windy
    else if (windSpeed !== undefined && windSpeed > 10) {
        icon = <Wind/>;
    }
    // default
    else {
        icon = null;
    }

    return { icon };

}

export function WeatherCard({ location, temperature, humidity, windSpeed, rainAmount, recordedAt }: WeatherCardProps) {
    const { icon } = handleWeatherCondition({ location, temperature, humidity, windSpeed, rainAmount, recordedAt });

    return (
        <div className="card weather-card">
            <div className="card-header d-flex justify-content-end">
            {icon !== null && <span className="weather-condition">{icon}</span>}
            </div>         
            <div className="card-body">
            <h5 className="card-title"><MapPinned/> {location}</h5>
            <h6 className="card-subtitle"><Clock/> {recordedAt}</h6>
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
