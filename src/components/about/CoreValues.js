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
  const valuesText = getText().values || [];

  const values = [
    {
      title: valuesText[0]?.title || "Collaboration",
      description:
        valuesText[0]?.description ||
        "Working together to achieve shared goals.",
      icon: <FaHandsHelping />,
    },
    {
      title: valuesText[1]?.title || "Empowerment",
      description:
        valuesText[1]?.description ||
        "Giving people the confidence and resources to take action.",
      icon: <FaUsers />,
    },
    {
      title: valuesText[2]?.title || "Growth",
      description:
        valuesText[2]?.description ||
        "Building a community that thrives on shared goals and collective impact.",
      icon: <FaChartLine />,
    },
    {
      title: valuesText[3]?.title || "Transparency",
      description:
        valuesText[3]?.description ||
        "Offering clear, honest insights into sustainability and our approach.",
      icon: <FaLightbulb />,
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-lightBg to-green-lightest">
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
            <div className="text-5xl text-green-darkest mb-4">{value.icon}</div>
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
