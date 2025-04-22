import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Cell,
} from "recharts";

import { useEffect, useState } from "react";
import { fetchCountWeatherDataEntriesPerLocation } from "../../api/weatherDataApi";

const CustomPieChart = () => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const response = await fetchCountWeatherDataEntriesPerLocation();
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function getColor(index: number) {
    const colors = [
      "#8884d8",
      "#82ca9d",
      "#ffc658",
      "#ff8042",
      "#8dd1e1",
      "#a4de6c",
      "#d0ed57",
      "#ffc0cb",
    ];
    return colors[index % colors.length];
  }

  return (
    <div className="card shadow-sm mb-5 mt-5 bg-body rounded">
      <div className="card-header text-baseline ">
        <h5 className="card-title">Weather Data Entries per Location</h5>
      </div>
      <div className="d-flex justify-content-center margin-auto">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="count" nameKey="location" fill="#8884d8">
              {data?.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={getColor(index)} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomPieChart;
