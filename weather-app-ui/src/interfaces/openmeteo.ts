export interface OpenMeteoTemperatureData {
    location: {
        latitude: number;
        longitude: number;
        name: string;
    },
    years: number[],
    daily_average_temperatures: {
        [key: string]: number;
    },
    unit: string

}