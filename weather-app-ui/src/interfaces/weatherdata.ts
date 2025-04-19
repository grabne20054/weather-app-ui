export interface WeatherData {
    timestamp: string;
    temperature: number;
    humidity: number;
    wind_speed: number;
    rain_amount: number;
};

export interface WeatherDataWithLocation {
    temperature: number;
    humidity: number;
    wind_speed: number;
    rain_amount: number;
    timestamp: string;
    location_id: number;
    id: number;
}




    
