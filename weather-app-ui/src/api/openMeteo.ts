import axios, { AxiosResponse } from "axios";
import { OpenMeteoTemperatureData, OpenMeteoTemperatureDifference } from "@/interfaces/openmeteo";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchOpenMeteoTemperatureData = async (
    latitude = 47.2446,
    longitude = 15.8003,
    name = "Stubenberg",
    start_year = 2010,
    end_year = 2024
): Promise<OpenMeteoTemperatureData> => {
    try {
        const response: AxiosResponse<OpenMeteoTemperatureData> = await axios.get(
            `${API_BASE_URL}/open-meteo/temperature/daily-averages`,
            {
                params: {
                    latitude,
                    longitude,
                    name,
                    start_year,
                    end_year,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error fetching Open Meteo temperature data:", error);
        throw error;
    }
};

const fetchTemperatureDifferenceToday = async (
    latitude = 47.2446,
    longitude = 15.8003,
    name = "Stubenberg"
): Promise<OpenMeteoTemperatureDifference> => {
    try {
        const response: AxiosResponse<OpenMeteoTemperatureDifference> = await axios.get(
            `${API_BASE_URL}/open-meteo/temperature/today-average`,
            {
                params: {
                    latitude,
                    longitude,
                    name,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error fetching Open Meteo temperature difference data:", error);
        throw error;
    }
}

export { fetchOpenMeteoTemperatureData, fetchTemperatureDifferenceToday };
