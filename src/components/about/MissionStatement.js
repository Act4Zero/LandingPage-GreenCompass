import React from "react";
import { motion } from "motion/react";
import { FaPeopleGroup, FaLeaf } from "react-icons/fa6";
import { TiGlobe } from "react-icons/ti";

function MissionStatement() {
  return (
    <motion.section
      className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-green-lightest"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Headline */}
        <motion.p
          className="text-lg sm:text-xl text-green-dark leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          "At Green Compass, we strive to inspire and empower communities to
          drive sustainable change."
        </motion.p>

        {/* Icon Features */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { Icon: FaLeaf, label: "Sustainability" },
            { Icon: TiGlobe, label: "Global Impact" },
            { Icon: FaPeopleGroup, label: "Community" },
          ].map(({ Icon, label }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-green-lightest rounded-full p-10 shadow-md w-40 h-40 transition-transform transform"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              whileHover={{ scale: 1.2 }}
            >
              <Icon className="text-3xl text-green mb-2" />
              <p className="text-sm text-green-dark font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default MissionStatement;
