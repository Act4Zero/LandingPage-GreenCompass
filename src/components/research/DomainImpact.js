import React from "react";
import "util/i18n";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

function DomainImpact() {
  const { t } = useTranslation();
  const getText = () => {
    return t("research.domain", { returnObjects: true }) || {};
  };
  const domains = getText().domains || {};

  return (
    <motion.section
      className="py-16 px-6 bg-gradient-to-b from-lightBg to-white text-green-darkest"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {getText().title}
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-green-dark max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {getText().subtitle}
        </motion.p>
      </motion.div>

      {/* Domain Cards with Staggered Animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // Stagger animation for each card
            },
          },
        }}
      >
        {Object.keys(domains).map((key, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-white hover:bg-green-lightest transform transition-transform hover:scale-105 hover:shadow-xl"
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
            {/* Title */}
            <h3 className="text-xl font-bold text-green-darkest mb-3">
              {domains[key].title}
            </h3>
            {/* Description */}
            <p className="text-green-dark leading-relaxed">
              {domains[key].description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default DomainImpact;
