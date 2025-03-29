import React from "react";
import Link from "next/link";
import Button from "components/common/Button";
import { motion } from "motion/react"; // For animations

function WhyItMattersCTA(props) {
  return (
    <motion.section
      className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-lightBg"
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
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-green-darkest"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {props.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-green-dark leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {props.subtitle}
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.4 },
          }}
        >
          <Link href="/explainer" passHref legacyBehavior>
            <Button size="xl" variant="primary">
              {props.button || "Learn More"}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default WhyItMattersCTA;
