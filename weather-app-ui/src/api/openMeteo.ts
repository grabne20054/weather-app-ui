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
        const url = new URL(`${API_BASE_URL}/open-meteo/temperature/daily-averages`);
        url.searchParams.set("latitude", latitude.toString());
        url.searchParams.set("longitude", longitude.toString());
        url.searchParams.set("name", name);
        url.searchParams.set("start_year", start_year.toString());
        url.searchParams.set("end_year", end_year.toString());

        const response = await fetch(url.toString(), {
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch temperature data: ${response.status}`);
        }

        const data: OpenMeteoTemperatureData = await response.json();
        return data;
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
        const url = new URL(`${API_BASE_URL}/open-meteo/temperature/today-average`);
        url.searchParams.set("latitude", latitude.toString());
        url.searchParams.set("longitude", longitude.toString());
        url.searchParams.set("name", name);

        const response = await fetch(url.toString(), {
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch temperature difference: ${response.status}`);
        }

        const data: OpenMeteoTemperatureDifference = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching Open Meteo temperature difference data:", error);
        throw error;
    }
};

export { fetchOpenMeteoTemperatureData, fetchTemperatureDifferenceToday };
