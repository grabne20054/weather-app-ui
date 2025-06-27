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
import { fetchWeatherData } from "@/api/weatherDataApi";
import { fetchWeatherDataLast7Days } from "@/api/weatherDataApi";
import { fetchWeatherDataLastDay } from "@/api/weatherDataApi";

const CustomLineChart = () => {
  const [data, setData] = useState<any>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string>("lastday");

  const fetchData = async (period: string) => {
    let response;
    switch (period) {
      case "last7days":
        response = await fetchWeatherDataLast7Days();
        break;
      case "lastday":
        response = await fetchWeatherDataLastDay();
        break;
      default:
        response = await fetchWeatherData();
    }
    setData(response);
    setSelectedPeriod(period);
  };

  useEffect(() => {
    fetchData("lastday");
  }, []);

  return (
    <>
      <div className="card shadow-sm mb-5 mt-5 bg-body rounded">
        <div className="card-header text-baseline ">
          <h5 className="card-title">Wettereinträge</h5>
        </div>
        <div className="d-flex justify-content-baseline mt-3 mb-3">
          <button
            className={`btn mx-2 ${
              selectedPeriod === "last7days"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => fetchData("last7days")}
          >
            letzte 7 Tage
          </button>
          <button
            className={`btn mx-2 ${
              selectedPeriod === "lastday"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => fetchData("lastday")}
          >
            Heute
          </button>
          <button
            className={`btn mx-2 ${
              selectedPeriod === "" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => fetchData("")}
          >
            Alle Einträge
          </button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip contentStyle={{ color: "black" }} />
            <Legend />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#C1292E"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#809BCE"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="wind_speed"
              stroke="#ACD8AA"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="rain_amount"
              stroke="#F4B860"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default CustomLineChart;
