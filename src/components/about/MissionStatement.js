import React from "react";
import { FaLeaf, FaGlobe, FaHandsHelping } from "react-icons/fa";
import "util/i18n";
import { useTranslation } from "react-i18next";

function MissionStatement() {
    const { t } = useTranslation();
    const getText = () => {
      return t("about.mission", { returnObjects: true }) || {};
    };

    return (
    <section
      className="bg-lightBg py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/texture.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-lightest via-transparent to-green-light bg-opacity-30"></div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-darkest">{getText().title}</h2>

        {/* Mission Description */}
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          At <span className="text-green-dark font-bold">Green Compass</span>,{getText().subtitle}
        </p>

        {/* Icon Highlights */}
        <div className="flex justify-center space-x-8 mt-8">
          <div className="group bg-green-light rounded-full p-6 shadow-md transition-transform transform hover:scale-105">
            <FaLeaf className="text-4xl text-green-dark group-hover:text-green-darkest transition" />
          </div>
          <div className="group bg-green-light rounded-full p-6 shadow-md transition-transform transform hover:scale-105">
            <FaGlobe className="text-4xl text-green-dark group-hover:text-green-darkest transition" />
          </div>
          <div className="group bg-green-light rounded-full p-6 shadow-md transition-transform transform hover:scale-105">
            <FaHandsHelping className="text-4xl text-green-dark group-hover:text-green-darkest transition" />
          </div>
        </div>

        {/* Supporting Text */}
        <p className="text-lg text-gray-600 max-w-xl mx-auto">{getText().description}</p>
      </div>
    </section>
  );
}

export default MissionStatement;
