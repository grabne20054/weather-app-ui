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
import { fetchOpenMeteoTemperatureData } from "@/api/openMeteo";
import { fetchWeatherDataLastYear } from "@/api/weatherDataApi";

const AverageTempChart = () => {
  const [chartData, setChartData] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const openMeteoResponse = await fetchOpenMeteoTemperatureData();
      const weatherDataResponse = await fetchWeatherDataLastYear();

      const openMeteoTemps = openMeteoResponse.daily_average_temperatures;

      // Merge data by "timestamp"
      const combinedData = Object.entries(openMeteoTemps).map(
        ([date, omTemp]) => {
          const weatherDay = weatherDataResponse.find(
            (w: any) => w.timestamp === date
          );
          return {
            date,
            openMeteoTemperature: omTemp,
            weatherDataTemperature: weatherDay?.temperature ?? null, // null if not found
          };
        }
      );

      setChartData(combinedData);
    } catch (err) {
      console.error("Failed to fetch or combine temperature data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card shadow-sm mb-5 mt-5 bg-body rounded">
      <div className="card-header text-baseline ">
        <h5 className="card-title">Durchschnittlicher Temperaturunterschied</h5>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip contentStyle={{ color: "black" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="openMeteoTemperature"
            stroke="#C1292E"
            dot={false}
            name="Durschnittstemperatur"
          />
          <Line
            type="monotone"
            dataKey="weatherDataTemperature"
            stroke="#007BFF"
            dot={false}
            name="Aufzeichnungen"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageTempChart;
