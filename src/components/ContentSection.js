import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import parse from "html-react-parser";
import Button from "components/common/Button";
import { motion } from "motion/react";

function ContentSection(props) {
  const TitleTag = props.titleSize || "h1";
  const backgroundColor =
    props.backgroundColor || "bg-gradient-to-br from-white to-green-lightest";
  const textColor = props.textColor || "text-green-darkest";
  const alignment = props.textAlign || "text-left sm:text-center";

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id={props.id}
      ref={sectionRef}
      className={`${backgroundColor} py-12 px-6 sm:py-16 lg:py-20 lg:px-8 ${textColor}`}
      style={{
        backgroundImage: props.backgroundImage
          ? `url(${props.backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <TitleTag className={`font-extrabold mb-8 text-3xl sm:text-4xl`}>
            {props.title}
          </TitleTag>
        </motion.div>

        {/* Content Paragraphs */}
        <div
          className={`space-y-6 text-lg sm:text-xl leading-relaxed ${alignment}`}
        >
          {props.paragraphs &&
            props.paragraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
              >
                {parse(paragraph)}
              </motion.div>
            ))}
        </div>

        {/* Call-to-Action Button */}
        {props.showButton && (
          <div className="mt-12">
            {" "}
            {/* Add margin-top for spacing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.15 }}
            >
              <Link href="/explainer" passHref legacyBehavior>
                <Button size="xl" variant="primary">
                  {props.buttonText}
                </Button>
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContentSection;
