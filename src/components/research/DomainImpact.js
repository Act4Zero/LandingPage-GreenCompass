import React from "react";
import "util/i18n";
import { useTranslation } from "react-i18next";

function DomainImpact() {
  const { t } = useTranslation();
  const getText = () => {
    return t("research.domain", { returnObjects: true }) || {};
  };
  const domains = getText().domains || [];

  return (
    <div className="white">
      <section className="py-12 px-4 sm:px-6 lg:px-8 white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-green-dark mb-6">{getText().title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{getText().subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-dark mb-3">
              {domains.mobility.title}
            </h3>
            <p className="text-gray-600">{domains.mobility.description}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-dark mb-3">
              {domains.food.title}
            </h3>
            <p className="text-gray-600">{domains.food.description}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-dark mb-3">{domains.heating.title}</h3>
            <p className="text-gray-600">{domains.heating.description}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-dark mb-3">{domains.household.title}</h3>
            <p className="text-gray-600">{domains.household.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DomainImpact;
