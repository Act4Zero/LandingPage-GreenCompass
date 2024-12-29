import React from "react";
import {
  FaLightbulb,
  FaUsers,
  FaHandsHelping,
  FaChartLine,
} from "react-icons/fa";
import "util/i18n";
import { useTranslation } from "react-i18next";

function CoreValues() {
    const { t } = useTranslation();
    const getText = () => {
      return t("about.core-values", { returnObjects: true }) || {};
    };
    const valuesText = getText().values;
    
    const values = [
        {
            title: valuesText[1].title,
            description: valuesText[1].description,
            icon: <FaHandsHelping />,
            color: "bg-gradient-to-r from-green-lightest to-green-light",
        },
        {
            title: valuesText[2].title,
            description: valuesText[2].description,
            icon: <FaUsers />,
            color: "bg-gradient-to-r from-green-light to-blue-light",
        },
        {
            title: valuesText[3].title,
            description: valuesText[3].description,
            icon: <FaChartLine />,
            color: "bg-gradient-to-r from-yellow-light to-orange-light",
        },
        {
            title: valuesText[4].title,
            description: valuesText[4].description,
            icon: <FaLightbulb />,
            color: "bg-gradient-to-r from-purple-light to-pink-light",
        },
  ];

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-darkest">{getText().title}</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">{getText().subtitle}</p>
      </div>

      {/* Values Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-8 rounded-lg shadow-lg ${value.color} text-center transform transition-transform hover:scale-105`}
          >
            {/* Icon */}
            <div className="text-6xl text-green-dark mb-6">{value.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-bold text-green-darkest mb-4">
              {value.title}
            </h3>
            {/* Description */}
            <p className="text-gray-700">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreValues;
