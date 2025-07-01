import { HeatReflux } from "@/interfaces/heatreflux";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetchJsonWithRevalidate = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, {
        next: { revalidate: 300 },
    });

    if (!response.ok) {
        throw new Error(`Fetch failed for ${url} with status ${response.status}`);
    }

    return response.json();
};

const fetchHeatRefluxDataLastEntry = async (): Promise<HeatReflux> => {
    return fetchJsonWithRevalidate<HeatReflux>(`${API_BASE_URL}/heat-reflux/last-entry`);
};

const fetchHeatRefluxDataCurrentDay = async (): Promise<HeatReflux[]> => {
    return fetchJsonWithRevalidate<HeatReflux[]>(`${API_BASE_URL}/heat-reflux/current-day`);
};

export {
    fetchHeatRefluxDataLastEntry,
    fetchHeatRefluxDataCurrentDay,
};