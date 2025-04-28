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
  const [previewFeature, setPreviewFeature] = useState(null);
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
    <>
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
                />
              </div>
              <div className="lg:w-7/12 xl:w-7/12 flex-none relative">
                <div className="relative flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                  <div className="md:w-1/2 md:mt-24 space-y-6">
                    {features.left.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="group bg-white p-5 transition ease-out duration-200 border-2 border-green-lightest rounded-2xl hover:border-green-light cursor-pointer"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        onClick={() => setPreviewFeature(feature)}
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
                        className="group bg-white p-5 transition ease-out duration-200 border-2 border-green-lightest rounded-2xl hover:border-green-light cursor-pointer"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        onClick={() => setPreviewFeature(feature)}
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
      {/* Feature Preview Modal */}
      {previewFeature && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={e => { if (e.target === e.currentTarget) setPreviewFeature(null); }}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 flex flex-col items-center animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-green-600 hover:text-green-900 text-2xl font-bold focus:outline-none"
              onClick={() => setPreviewFeature(null)}
              aria-label="Close preview"
            >
              &times;
            </button>
            {previewFeature.image ? (
              <img
                src={previewFeature.image}
                alt={previewFeature.title}
                className="w-full h-80 md:h-[28rem] object-cover rounded-xl mb-6 transition-transform duration-300"
                style={{ maxHeight: '450px' }}
              />
            ) : (
              <FeatureIcon2 color={previewFeature.iconColor} className="mb-6 text-6xl">
                <previewFeature.icon />
              </FeatureIcon2>
            )}
            <h3 className="text-2xl font-bold text-green-darkest mb-2 text-center">
              {previewFeature.title}
            </h3>
            <p className="text-green-dark text-center mb-6">
              {previewFeature.description}
            </p>
            <a
              href="https://app.greencompass.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-200 text-lg"
            >
              {t('index.features.cta', 'Try Green Compass')}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default FeaturesSection;
