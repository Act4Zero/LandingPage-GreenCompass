import React from "react";
import "util/i18n";
import { useTranslation } from "react-i18next";

function DomainImpact() {
  const { t } = useTranslation();
  const getText = () => {
    return t("research.domain", { returnObjects: true }) || {};
  };
  const domains = getText().domains || {};

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-lightBg to-green-lightest text-green-darkest">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          {getText().title}
        </h2>
        {/* Section Subtitle */}
        <p className="text-lg sm:text-xl text-green-dark max-w-2xl mx-auto mb-10">
          {getText().subtitle}
        </p>
      </div>

      {/* Domain Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.keys(domains).map((key, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-white hover:bg-green-lightest hover:shadow-xl transform transition-transform duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-bold text-green-darkest mb-3">
              {domains[key].title}
            </h3>
            {/* Description */}
            <p className="text-green-dark leading-relaxed">
              {domains[key].description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DomainImpact;
