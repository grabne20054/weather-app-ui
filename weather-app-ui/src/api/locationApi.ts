import { WeatherLocation } from "@/interfaces/location";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchLocations = async (): Promise<WeatherLocation[]> => {
    try {
        const response = await fetch(`${API_BASE_URL}/locations`, {
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch locations: ${response.status}`);
        }

        const data: WeatherLocation[] = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching locations:", error);
        throw error;
    }
};

const fetchLocationById = async (id: number): Promise<WeatherLocation> => {
    try {
        const response = await fetch(`${API_BASE_URL}/locations/${id}`, {
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch location: ${response.status}`);
        }

        const data: WeatherLocation = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching location by ID:", error);
        throw error;
    }
};

export { fetchLocations, fetchLocationById };