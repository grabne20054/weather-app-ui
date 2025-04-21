"use client";
import CustomLineChart from "../ui/linechart";
import CustomBarChart from "../ui/barchart";
import { useEffect, useState } from "react";
import { Bar } from "recharts";

export default function Statistics() {
  return (
    <div className="container">
      <CustomLineChart />
      <CustomBarChart />
    </div>
  );
}
