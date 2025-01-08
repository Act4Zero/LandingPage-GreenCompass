import React from "react";
import { motion } from "motion/react";
import aboutImage from "/public/images/about-green-compass.jpg";

function VisionStatement(props) {
  return (
    <motion.section
      className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-green-lightest to-lightBg relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-5xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Headline */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-green-darkest"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {props.title || "Our Vision"}
        </motion.h2>

        {/* Vision Description */}
        <motion.p
          className="text-lg sm:text-xl text-green-dark leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {props.subtitle}
        </motion.p>

        {/* Visual Break: Inspirational Image */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 } 
          }}
        >
          <img
            src={aboutImage.src}
            alt={
              props.imageAlt ||
              "Collaborative community working towards sustainability"
            }
            className="w-full h-72 sm:h-80 md:h-96 object-cover transition"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default VisionStatement;
