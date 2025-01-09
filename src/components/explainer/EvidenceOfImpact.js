import React from "react";
import Link from "next/link";
import { motion } from "motion/react"; // Import for animations
import { FaLeaf, FaHome, FaCar } from "react-icons/fa";
import "util/i18n";
import { useTranslation } from "react-i18next";
import Button from "components/common/Button";

const EvidenceOfImpact = () => {
  const { t } = useTranslation();
  const getText = () => {
    return t("explainer.evidence", { returnObjects: true }) || {};
  };

  return (
    <motion.section
      className="py-16 px-6 bg-gradient-to-b from-lightBg to-green-lightest text-green-darkest"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold leading-tight text-green-darkest mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {getText().title}
        </motion.h2>
        {/* Subtitle */}
        <motion.p
          className="text-lg text-green-dark mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {getText().subtitle}
        </motion.p>

        {/* Evidence Items with Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6"
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
          {[
            { icon: FaLeaf, stat: "23%", text: getText().evidence1 },
            { icon: FaHome, stat: "35%", text: getText().evidence2 },
            { icon: FaCar, stat: "12%", text: getText().evidence3 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <item.icon className="text-green-dark text-4xl mb-3" />
              <h3 className="text-2xl font-bold text-green-darkest">
                {item.stat}
              </h3>
              <p className="text-green-dark">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Conclusion */}
        <motion.p
          className="text-lg text-green-dark mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {getText().conclusion}
        </motion.p>

        {/* Buttons with Hover Effects */}
        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block transition-transform"
          >
            <Link href="/research" passHref legacyBehavior>
              <Button size="xl" variant="primary">
                {getText()["button-more"]}
              </Button>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block transition-transform"
          >
            <Link
              href="https://www.sciencedirect.com/science/article/pii/S0959652623041392"
              passHref
              legacyBehavior
            >
              <Button size="xl" variant="dark">
                {getText()["button-pdf"]}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default EvidenceOfImpact;
