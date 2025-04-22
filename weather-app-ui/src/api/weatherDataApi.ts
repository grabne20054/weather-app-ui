import axios, { AxiosResponse } from "axios";
import { WeatherData, WeatherDataWithLocation } from "../interfaces/weatherdata";
import { WeatherLocationEntriesCount } from "@/interfaces/location";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchWeatherData = async (): Promise<WeatherData[]> => {
    try {
        const response: AxiosResponse<WeatherData[]> = await axios.get(
            `${API_BASE_URL}/wheaterdata`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

const fetchAverageWeatherDataCurrentDay = async (): Promise<WeatherData[]> => {
    try {
        const response: AxiosResponse<WeatherData[]> = await axios.get(
            `${API_BASE_URL}/wheaterdata/current-day`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

const fetchWeatherDataLast7Days = async (): Promise<WeatherData[]> => {
    try {
        const response: AxiosResponse<WeatherData[]> = await axios.get(
            `${API_BASE_URL}/wheaterdata/last-seven-days`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

const fetchWeatherDataLastDay = async (): Promise<WeatherDataWithLocation[]> => {
    try {
        const response: AxiosResponse<WeatherDataWithLocation[]> = await axios.get(
            `${API_BASE_URL}/wheaterdata/last-day`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

const fetchWeatherDataLastYear = async (): Promise<WeatherDataWithLocation[]> => {
    try {
        const response: AxiosResponse<WeatherDataWithLocation[]> = await axios.get(
            `${API_BASE_URL}/wheaterdata/last-year`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

const fetchWeatherDataLastEntry = async (): Promise<WeatherDataWithLocation[]> => {
    try {
        const response: AxiosResponse<WeatherDataWithLocation[]> = await axios.get(
            `${API_BASE_URL}/wheaterdata/last-entry`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

const fetchWeatherDataByLocationId = async (locationId: number): Promise<WeatherDataWithLocation[]> => {
    try {
        const response: AxiosResponse<WeatherDataWithLocation[]> = await axios.get(
            `${API_BASE_URL}/wheaterdata/location/${locationId}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

const fetchWeatherDataByLocationIdLastEntry = async (locationId: number): Promise<WeatherDataWithLocation[]> => {

    try {
        const response: AxiosResponse<WeatherDataWithLocation[]> = await axios.get(
            `${API_BASE_URL}/wheaterdata/location/last-entry/${locationId}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

const fetchMonthlyAverageWeatherData = async (): Promise<WeatherData[]> => {
    try {
        const response: AxiosResponse<WeatherData[]> = await axios.get(
            `${API_BASE_URL}/wheaterdata/average/month`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

const fetchCountWeatherDataEntriesPerLocation = async (): Promise<WeatherLocationEntriesCount[]> => {
    try {
        const response: AxiosResponse<WeatherLocationEntriesCount[]> = await axios.get(
            `${API_BASE_URL}/wheaterdata/locations/entries`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

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

