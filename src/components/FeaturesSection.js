import React, { useEffect, useState, useRef } from "react";
import {
  ShoppingBagIcon,
  ChartPieIcon,
  GlobeAmericasIcon,
  BookOpenIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "motion/react";
import Section from "components/common/Section";
import SectionHeader from "components/common/SectionHeader";
import FeatureIcon2 from "components/common/FeatureIcon2";
import { useTranslation } from "react-i18next";

function FeaturesSection(props) {
  const { t } = useTranslation();
  const features = {
    left: [
      {
        title: t("index.features.feature1.title"),
        description: t("index.features.feature1.description"),
        icon: GlobeAmericasIcon,
        iconColor: "green",
      },
      {
        title: t("index.features.feature2.title"),
        description: t("index.features.feature2.description"),
        icon: BookOpenIcon,
        iconColor: "brown",
      },
    ],
    right: [
      {
        title: t("index.features.feature3.title"),
        description: t("index.features.feature3.description"),
        icon: ChartPieIcon,
        iconColor: "green",
        image: "/images/features/feature-tracker.png",

      },
      {
        title: t("index.features.feature4.title"),
        description: t("index.features.feature4.description"),
        icon: UserGroupIcon,
        iconColor: "green",
        image: "/images/features/feature-community.png",

      },
      {
        title: t("index.features.feature5.title"),
        description: t("index.features.feature5.description"),
        icon: ShoppingBagIcon,
        iconColor: "brown",
      },
    ],
  };

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      }
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

  return (
    <Section
      id={props.id}
      size={props.size}
      bgColor={props.bgColor || "bg-lightBg"}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor || "text-green-darkest"}
    >
      <div ref={ref} className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20">
            <div className="lg:w-5/12 xl:w-5/12 md:py-12 space-y-10">
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                strapline={props.strapline}
                className="text-green-dark"
              />
            </div>
            <div className="lg:w-7/12 xl:w-7/12 flex-none relative">
              <div className="relative flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="md:w-1/2 md:mt-24 space-y-6">
                  {features.left.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="group bg-white p-5 transition ease-out duration-200 border-2 border-green-lightest rounded-2xl hover:border-green-light"
                      initial={{ opacity: 0, x: -50 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                    >
                      {feature.image ? (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-40 md:h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                          style={{ maxHeight: '240px' }}
                        />
                      ) : (
                        <FeatureIcon2 color={feature.iconColor} className="mb-6">
                          <feature.icon />
                        </FeatureIcon2>
                      )}
                      <h4 className="text-lg font-bold mb-2 text-green-darkest">
                        {feature.title}
                      </h4>
                      <p className="leading-relaxed text-green-dark">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="md:w-1/2 space-y-6">
                  {features.right.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="group bg-white p-5 transition ease-out duration-200 border-2 border-green-lightest rounded-2xl hover:border-green-light"
                      initial={{ opacity: 0, x: 50 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2, duration: 0.8 }}
                    >
                      {feature.image ? (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-40 md:h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                          style={{ maxHeight: '220px' }}
                        />
                      ) : (
                        <FeatureIcon2 color={feature.iconColor} className="mb-6">
                          <feature.icon />
                        </FeatureIcon2>
                      )}
                      <h4 className="text-lg font-bold mb-2 text-green-darkest">
                        {feature.title}
                      </h4>
                      <p className="leading-relaxed text-green-dark">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
