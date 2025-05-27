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

export interface OpenMeteoTemperatureDifference {
    location: {
        latitude: number;
        longitude: number;
        name: string;
    },
    years: number[],
    date: string,
    diff: number,
    unit: string
}