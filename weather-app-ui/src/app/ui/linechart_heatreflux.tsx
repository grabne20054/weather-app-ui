"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { fetchHeatRefluxDataCurrentDay } from "@/api/heatRefluxApi";

const HeatRefluxLineChart = () => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    let response;
    try {
      response = await fetchHeatRefluxDataCurrentDay();
    } catch (error) {
      console.error("Error fetching heat relux data:", error);
      return;
    }
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="card shadow-sm mb-5 mt-5 bg-body rounded">
        <div className="card-header text-baseline ">
          <h5 className="card-title">Vorlauf Rücklauf</h5>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip contentStyle={{ color: "black" }} />
            <Legend />
            <Line type="monotone" dataKey="heat" stroke="#C1292E" dot={false} />
            <Line
              type="monotone"
              dataKey="reflux"
              stroke="#809BCE"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default HeatRefluxLineChart;
