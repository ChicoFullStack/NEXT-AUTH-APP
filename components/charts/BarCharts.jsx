"use client";
import React from "react";
import styles from "./BarChart.module.css";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BarChart() {
  const options = {
    chart: {
      id: "basic-bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          position: "top",
          // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: 0,
      style: {
        fontSize: "12px",
        colors: ["#151515"],
      },
    },
    xaxis: {
      categories: ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"],
      position: "top",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  };

  const series = [
    {
      name: "Qualidade",
      data: [85, 95, 84, 95, 89, 91],
    },
    {
      name: "Disponibilidade",
      data: [95, 96, 89, 86, 85, 99],
    },
    {
      name: "Performance",
      data: [87, 95, 99, 89, 92, 97],
    },
    {
      name: "Total OEE",
      data: [87, 95, 99, 89, 92, 97],
    },
  ];

  return (
    <>
      
        <div className={styles.card}>
          <ApexChart
            type="bar"
            options={options}
            series={series}
            height="400"
            width="100%"
          />
        </div>
      
    </>
  );
}


