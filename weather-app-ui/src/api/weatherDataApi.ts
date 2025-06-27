import { WeatherData, WeatherDataWithLocation } from "../interfaces/weatherdata";
import { WeatherLocationEntriesCount } from "@/interfaces/location";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchJsonWithRevalidate = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, {
        next: { revalidate: 3600 },
    });

    if (!response.ok) {
        throw new Error(`Fetch failed for ${url} with status ${response.status}`);
    }

    return response.json();
};

const fetchWeatherData = async (): Promise<WeatherData[]> => {
    return fetchJsonWithRevalidate<WeatherData[]>(`${API_BASE_URL}/wheaterdata`);
};

const fetchAverageWeatherDataCurrentDay = async (): Promise<WeatherData[]> => {
    return fetchJsonWithRevalidate<WeatherData[]>(`${API_BASE_URL}/wheaterdata/current-day`);
};

const fetchWeatherDataLast7Days = async (): Promise<WeatherData[]> => {
    return fetchJsonWithRevalidate<WeatherData[]>(`${API_BASE_URL}/wheaterdata/last-seven-days`);
};

const fetchWeatherDataLastDay = async (): Promise<WeatherDataWithLocation[]> => {
    return fetchJsonWithRevalidate<WeatherDataWithLocation[]>(`${API_BASE_URL}/wheaterdata/last-day`);
};

const fetchWeatherDataLastYear = async (): Promise<WeatherDataWithLocation[]> => {
    return fetchJsonWithRevalidate<WeatherDataWithLocation[]>(`${API_BASE_URL}/wheaterdata/last-year`);
};

const fetchWeatherDataLastEntry = async (): Promise<WeatherDataWithLocation> => {
    return fetchJsonWithRevalidate<WeatherDataWithLocation>(`${API_BASE_URL}/wheaterdata/last-entry`);
};

const fetchWeatherDataByLocationId = async (locationId: number): Promise<WeatherDataWithLocation[]> => {
    return fetchJsonWithRevalidate<WeatherDataWithLocation[]>(`${API_BASE_URL}/wheaterdata/location/${locationId}`);
};

const fetchWeatherDataByLocationIdLastEntry = async (locationId: number): Promise<WeatherDataWithLocation[]> => {
    return fetchJsonWithRevalidate<WeatherDataWithLocation[]>(`${API_BASE_URL}/wheaterdata/location/last-entry/${locationId}`);
};

const fetchMonthlyAverageWeatherData = async (): Promise<WeatherData[]> => {
    return fetchJsonWithRevalidate<WeatherData[]>(`${API_BASE_URL}/wheaterdata/average/month`);
};

const fetchCountWeatherDataEntriesPerLocation = async (): Promise<WeatherLocationEntriesCount[]> => {
    return fetchJsonWithRevalidate<WeatherLocationEntriesCount[]>(`${API_BASE_URL}/wheaterdata/locations/entries`);
};

export {
    fetchWeatherData,
    fetchAverageWeatherDataCurrentDay,
    fetchWeatherDataLast7Days,
    fetchWeatherDataLastDay,
    fetchWeatherDataLastEntry,
    fetchWeatherDataByLocationId,
    fetchWeatherDataByLocationIdLastEntry,
    fetchMonthlyAverageWeatherData,
    fetchCountWeatherDataEntriesPerLocation,
    fetchWeatherDataLastYear,
};
