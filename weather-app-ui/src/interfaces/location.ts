export interface WeatherLocation {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export interface WeatherLocationEntriesCount {
    location: string;
    count: number;
}
