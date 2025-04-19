import axios, {AxiosResponse} from "axios";
import { WeatherLocation } from "@/interfaces/location";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchLocations = async (): Promise<WeatherLocation[]> => {
    try {
        const response: AxiosResponse<WeatherLocation[]> = await axios.get(
            `${API_BASE_URL}/locations`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching locations:", error);
        throw error;
    }
}

const fetchLocationById = async (id: number): Promise<WeatherLocation> => {
    try {
        const response: AxiosResponse<WeatherLocation> = await axios.get(
            `${API_BASE_URL}/locations/${id}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching location by ID:", error);
        throw error;
    }
}

export { fetchLocations, fetchLocationById };