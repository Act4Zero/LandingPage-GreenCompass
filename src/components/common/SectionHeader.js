import React, { useState, useEffect } from "react";
import { motion } from "motion/react"; // Import motion for animations

function SectionHeader(props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  if (!props.title && !props.subtitle && !props.strapline) {
    return null;
  }

  const textColor = props.textColor || {
    strapline: "text-green-dark",
    title: "text-green-darkest",
    subtitle: "text-green-dark",
  };
  const paddingVertical = props.paddingVertical || "py-8";

  return (
    <header
      ref={ref}
      className={`${paddingVertical} last:mb-0 text-center ${
        props.bgColor ? `${props.bgColor} rounded-lg shadow-md` : ""
      } ${props.className || ""}`}
    >
      {/* Strapline */}
      {props.strapline && (
        <motion.div
          className={`text-sm uppercase font-bold tracking-wider mb-1 ${textColor.strapline}`}
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {props.strapline}
        </motion.div>
      )}

      {/* Title */}
      {props.title && (
        <motion.h1
          className={`text-3xl md:text-4xl font-extrabold ${textColor.title}`}
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {props.title}
        </motion.h1>
      )}

      {/* Subtitle */}
      {props.subtitle && (
        <motion.h2
          className={`mt-4 inline-block text-lg md:text-xl md:leading-relaxed font-medium max-w-screen-md opacity-80 ${textColor.subtitle}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {props.subtitle}
        </motion.h2>
      )}
    </header>
  );
}

export default SectionHeader;
