import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import { fetchMonthlyAverageWeatherData } from "@/api/weatherDataApi";
import { useEffect, useState } from "react";

const CustomBarChart = () => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const response = await fetchMonthlyAverageWeatherData();
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card shadow-sm mb-5 mt-5 bg-body rounded">
      <div className="card-header text-baseline ">
        <h5 className="card-title">Durchschnittliche Wettereinträge</h5>
      </div>
      <div className="d-flex justify-content-center margin-auto">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip contentStyle={{ color: "black" }} />
            <Legend />
            <Bar dataKey="temperature" fill="#8884d8" />
            <Bar dataKey="humidity" fill="#82ca9d" />
            <Bar dataKey="wind_speed" fill="#ffc658" />
            <Bar dataKey="rain_amount" fill="#ff7300" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomBarChart;
