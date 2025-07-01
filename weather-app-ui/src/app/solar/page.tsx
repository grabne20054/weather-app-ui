import HeatRefluxLineChart from "../ui/linechart_heatreflux";

import { HeatRefluxCard } from "../components/HeatRefluxCard";

import { fetchHeatRefluxDataLastEntry } from "@/api/heatRefluxApi";

export default async function Solar() {
  const heatRefluxDataLastEntry = await fetchHeatRefluxDataLastEntry();
  return (
    <div className="container">
      {heatRefluxDataLastEntry && (
        <HeatRefluxCard
          timestamp={heatRefluxDataLastEntry.timestamp}
          heat={heatRefluxDataLastEntry.heat}
          reflux={heatRefluxDataLastEntry.reflux}
        />
      )}
      <HeatRefluxLineChart />
    </div>
  );
}
