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
      description: valuesText[1]?.description,
      icon: <FaHandsHelping />,
    },
    {
      title: valuesText[2]?.title,
      description: valuesText[2]?.description,
      icon: <FaUsers />,
    },
    {
      title: valuesText[3]?.title,
      description: valuesText[3]?.description,
      icon: <FaChartLine />,
    },
    {
      title: valuesText[4]?.title,
      description: valuesText[4]?.description,
      icon: <FaLightbulb />,
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-lightBg to-white">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-darkest">
          {getText().title || "Our Core Values"}
        </h2>
        <p className="text-lg text-green-dark max-w-3xl mx-auto">
          {getText().subtitle ||
            "These principles guide everything we do, ensuring our approach to sustainability is as impactful as it is meaningful."}
        </p>
      </div>

      {/* Values Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white text-center hover:shadow-lg transform transition-transform hover:scale-105"
          >
            {/* Icon */}
            <div className="text-3xl text-green mb-4">{value.icon}</div>
            {/* Title */}
            <h3 className="text-lg font-bold text-green-darkest mb-2">
              {value.title}
            </h3>
            {/* Description */}
            <p className="text-sm text-green-dark">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreValues;
