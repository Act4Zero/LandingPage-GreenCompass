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
  // Data for Bar Chart
  const barData = {
    labels: ["Mobility", "Food", "Heating", "Household"],
    datasets: [
      {
        label: "Reduction (%)",
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
          label: (context) => `Reduction: ${context.raw}%`,
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
          text: "Reduction (%)",
        },
      },
    },
  };

  // Data for Pie Chart
  const pieData = {
    labels: ["Reduced Emissions", "Remaining Emissions"],
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

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-lightBg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-dark mb-6">
          Interactive Charts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div>
            <h3 className="text-xl font-semibold text-green-dark mb-4">
              Domain-Specific Reductions
            </h3>
            <Bar data={barData} options={barOptions} />
          </div>

          {/* Pie Chart */}
          <div>
            <h3 className="text-xl font-semibold text-green-dark mb-4">
              Average Reduction
            </h3>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCharts;
