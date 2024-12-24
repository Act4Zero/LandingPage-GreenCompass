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
        label: getText().chart.bar.label1 + "(%)",
        data: [12, 16.4, 26.9, 35],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${barText.label1} ${context.raw}%`,
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
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(192, 192, 192, 0.6)",
        ],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(192, 192, 192, 1)"],
        borderWidth: 1,
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
      },
    },
  };

  const insightsText = getText().insights;
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 white">
      <div className="max-w-7xl mx-auto">
        {/* Key Findings Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="text-center lg:text-left">
            <div className="text-6xl font-bold text-green-dark">23%</div>
            <p className="text-lg text-gray-700">{insightsText.label1}</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="mr-2">🚗</span> <strong>12%</strong>{" "}
                {insightsText.label2}
              </li>
              <li className="flex items-center">
                <span className="mr-2">🏠</span> <strong>35%</strong>{" "}
                {insightsText.label3}
              </li>
            </ul>
          </div>
          <div>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">{insightsText.description1}</p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-3xl">
            {/* Bar Chart */}
            <div>
              <h4 className="text-xl font-semibold text-green-dark mb-4 text-center lg:text-left">
                {barText.title}
              </h4>
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCharts;
