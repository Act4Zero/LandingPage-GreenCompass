import React from "react";
import "util/i18n";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Introduction = () => {
  const { t } = useTranslation();
  const getText = () => {
    return t("research", { returnObjects: true }) || {};
  };

  return (
    <motion.section
      className="py-16 px-6 text-green-darkest"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {getText().title}
        </motion.h1>

        {/* Quote */}
        <motion.blockquote
          className="text-lg italic border-l-4 border-green-dark pl-4 mb-6 transition-transform transform"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.4 },
          }}
        >
          {getText().quote}
        </motion.blockquote>

        {/* Subtitle */}
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {getText().subtitle}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Introduction;
