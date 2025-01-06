import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "motion/react"; // Import motion for animations
import Section from "components/common/Section";
import SectionHeader from "components/common/SectionHeader";
import Button from "components/common/Button";

function CtaSection(props) {
  return (
    <Section
      size={props.size}
      bgColor={props.bgColor || "bg-lightBg"}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor || "text-green-darkest"}
    >
      <div className="container py-10 md:py-0">
        <div className="relative">
          {/* Leaf Patterns */}
          <motion.div
            className="pattern-leaves text-green-light absolute bottom-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-12 translate-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />
          <motion.div
            className="pattern-leaves text-green-light absolute top-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-12 -translate-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />

          {/* Funky Overlay Backgrounds */}
          <motion.div
            className="absolute inset-0 -m-6 rounded-xl transform rotate-2 bg-green-lightest bg-opacity-60"
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{
              opacity: [0.8, 0.9, 0.8], // Oscillate opacity
              scale: [0.95, 1.05, 0.95], // Subtle pulsing
              rotate: [2, 4, 2], // Gentle rotation sway
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 -m-6 rounded-xl transform -rotate-2 bg-green-light bg-opacity-60"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{
              opacity: [0.8, 0.9, 0.8], // Oscillate opacity
              scale: [0.95, 1.05, 0.95], // Subtle pulsing
              rotate: [-2, -4, -2], // Gentle rotation sway
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          {/* CTA Content */}
          <motion.div
            className="p-12 lg:py-16 lg:px-16 bg-green rounded shadow-lg text-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-10">
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                strapline={props.strapline}
                straplineColor="text-brown"
                titleColor="text-white"
                subtitleColor="text-green-lightest"
              />
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <Link href="#download" passHref={true}>
                    <Button
                      size="xl"
                      variant="primary"
                      endIcon={
                        <ArrowRightIcon className="opacity-70 inline-block w-5 h-5 text-white" />
                      }
                    >
                      {props.ctaText}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection;
