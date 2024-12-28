import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "util/i18n";
import { useTranslation } from "react-i18next";

// Register Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

const InteractiveCharts = () => {
  const { t } = useTranslation();
  const getText = () => {
    return t("research", { returnObjects: true }) || {};
  };

  // Data for Bar Chart
  const barText = getText().chart.bar;
  const barData = {
    labels: [barText.label2, barText.label3, barText.label4, barText.label5],
    datasets: [
      {
        label: `${barText.label1} (%)`,
        data: [12, 16.4, 26.9, 35],
        backgroundColor: "#7FB88B", // green.DEFAULT
        borderColor: "#4B8359", // green.dark
        borderWidth: 2,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${barText.label1}: ${context.raw}%`,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: `${barText.label1} (%)`,
          font: { size: 14, weight: "bold" },
          color: "#4B8359", // green.dark
        },
      },
    },
  };

  // Data for Pie Chart
  const pieText = getText().chart.pie;
  const pieData = {
    labels: [pieText.label1, pieText.label2],
    datasets: [
      {
        data: [23, 77],
        backgroundColor: ["#7FB88B", "#FFDCC1"], // green.DEFAULT, accentLight
        borderColor: ["#4B8359", "#87521B"], // green.dark, brown.DEFAULT
        borderWidth: 2,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
      legend: {
        position: "bottom",
        labels: {
          color: "#4B8359", // green.dark
        },
      },
    },
  };

  const insightsText = getText().insights;

  return (
    <div className="py-16 px-6 bg-gradient-to-b text-green-darkest">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Key Findings Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Key Insights</h3>
          <div className="text-lg">
            <div className="text-6xl font-extrabold text-green-darkest">
              23%
            </div>
            <p>{insightsText.label1}</p>
          </div>
        </div>

        {/* Pie Chart Section */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="flex-1">
            <Pie data={pieData} options={pieOptions} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h4 className="text-xl font-semibold mb-4">{pieText.label1}</h4>
            <p>{insightsText.description1}</p>
          </div>
        </div>

        {/* Bar Chart Section */}
        <div className="space-y-8">
          <h4 className="text-xl font-semibold text-center">{barText.title}</h4>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default InteractiveCharts;
