import React from "react";
import "util/i18n";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { FaBookOpen, FaLeaf } from "react-icons/fa";
import { FaPeopleGroup, FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";

function SolutionShowcase() {
  const { t } = useTranslation();
  const getText = () => {
    return t("explainer.solution", { returnObjects: true }) || {};
  };

  const subtitle = getText().subtitle;
  const solutions = [
    {
      title: getText().solution1.title,
      description: getText().solution1.description,
      icon: <FaBookOpen />,
      bgColor: "bg-white",
    },
    {
      title: getText().solution2.title,
      description: getText().solution2.description,
      icon: <FaLeaf />,
      bgColor: "bg-green-lightest",
    },
    {
      title: getText().solution3.title,
      description: getText().solution3.description,
      icon: <FaPeopleGroup />,
      bgColor: "bg-white",
    },
    {
      title: getText().solution4.title,
      description: getText().solution4.description,
      icon: <FaPersonWalkingArrowLoopLeft />,
      bgColor: "bg-green-lightest",
    },
  ];

  return (
    <motion.section
      className="py-16 px-8 bg-gradient-to-b from-white to-lightBg text-green-darkest relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-green-darkest"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {getText().title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className="text-lg sm:text-xl text-green-dark mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Solution Cards with Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Stagger animation by 0.2 seconds
              },
            },
          }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${solution.bgColor} flex flex-col items-center text-center`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.05, // Scale on hover
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow on hover
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Icon */}
              <div className="text-3xl text-green mb-4">{solution.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-green-darkest mb-3">
                {solution.title}
              </h3>
              {/* Description */}
              <p className="text-green-dark">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default SolutionShowcase;
