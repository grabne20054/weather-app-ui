"use client";
import CustomLineChart from "../ui/linechart";
import CustomBarChart from "../ui/barchart";
import CustomPieChart from "../ui/piechart";
import AverageTempChart from "../components/AverageTempChart";

export default function Statistics() {
  return (
    <div className="container">
      <CustomLineChart />
      <CustomBarChart />
      <CustomPieChart />
      <AverageTempChart />
    </div>
  );
}
