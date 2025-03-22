import Chart from "@/components/Chart";
import React from "react";

export default function DashboardPage() {
  // Chart options
  const options: any = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    title: {
      text: "Monthly Sales",
      align: "center",
    },
    colors: ["#1E90FF"],
  };

  // Chart data
  const series = [
    {
      name: "Sales",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
    },
  ];
  return (
    <div>
      {/* Chart */}
      <div className="mt-5">
        <Chart type="bar" options={options} series={series} height={350} />
      </div>
    </div>
  );
}
