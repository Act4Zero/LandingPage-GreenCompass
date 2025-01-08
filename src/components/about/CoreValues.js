import React from "react";
import { motion } from "motion/react"; // Import for animations
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
      title: valuesText[1]?.title,
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
    <motion.section
      className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-lightBg to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-7xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-darkest">
          {getText().title || "Our Core Values"}
        </h2>
        <p className="text-lg text-green-dark max-w-3xl mx-auto">
          {getText().subtitle ||
            "These principles guide everything we do, ensuring our approach to sustainability is as impactful as it is meaningful."}
        </p>
      </motion.div>

      {/* Values Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white text-center hover:shadow-lg transform hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            {/* Icon */}
            <div className="text-3xl text-green mb-4 transform transition-transform group-hover:scale-110">
              {value.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg font-bold text-green-darkest mb-2">
              {value.title}
            </h3>
            {/* Description */}
            <p className="text-sm text-green-dark">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default CoreValues;
