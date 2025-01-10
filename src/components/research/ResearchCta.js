import React from "react";
import Link from "next/link";
import Button from "components/common/Button";
import { motion } from "motion/react";

function ResearchCta(props) {
  return (
    <motion.section
      className="py-16 px-6 bg-gradient-to-b from-white to-lightBg text-green-darkest"
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
        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {props.subtitle}
        </motion.p>

        {/* Button */}
        <motion.div
          className="inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{
            scale: 1.05, // Slight scale-up on hover
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow
          }}
        >
          <Link
            href="https://www.sciencedirect.com/science/article/pii/S0959652623041392"
            passHref
            legacyBehavior
          >
            <Button size="xl" variant="primary">
              {props.buttonText}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default ResearchCta;
