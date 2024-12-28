import React from "react";
import "util/i18n";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t } = useTranslation();
  const getText = () => {
    return t("research", { returnObjects: true }) || {};
  };

  return (
    <section className="py-16 px-6 text-green-darkest">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">{getText().title}</h1>

        {/* Quote */}
        <blockquote className="text-lg italic border-l-4 border-green-dark pl-4 mb-6 transition-transform transform hover:scale-105">
          {getText().quote}
        </blockquote>

        {/* Subtitle */}
        <p className="text-lg leading-relaxed">{getText().subtitle}</p>
      </div>
    </section>
  );
};

export default Introduction;
