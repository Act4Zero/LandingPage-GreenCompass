import React from "react";
import Link from "next/link";
import { FaLeaf, FaHome, FaCar } from "react-icons/fa";
import "util/i18n";
import { useTranslation } from "react-i18next";

const EvidenceOfImpact = () => {
  const { t } = useTranslation();
  const getText = () => {
    return t("explainer.evidence", { returnObjects: true }) || {};
  };

  return (
    <section className="white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold leading-tight text-green-dark mb-6">
          {getText().title}
        </h2>
        <p className="text-lg text-gray-700 mb-8">{getText().subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center">
            <FaLeaf className="text-green-dark text-6xl mb-4" />
            <h3 className="text-2xl font-bold text-green-dark">23%</h3>
            <p className="text-gray-700">{getText().evidence1}</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHome className="text-green-dark text-6xl mb-4" />
            <h3 className="text-2xl font-bold text-green-dark">35%</h3>
            <p className="text-gray-700">{getText().evidence2}</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCar className="text-green-dark text-6xl mb-4" />
            <h3 className="text-2xl font-bold text-green-dark">12%</h3>
            <p className="text-gray-700">{getText().evidence3}</p>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-8">{getText().conclusion}</p>

        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/research" passHref>
            <a
              className="inline-block px-6 py-3 bg-green-dark text-white font-semibold rounded-lg shadow-md hover:bg-green-darker transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {getText()["button-more"]}
            </a>
          </Link>
          <Link href="/path-to-research-pdf" passHref>
            <a
              className="inline-block px-6 py-3 bg-green-dark text-white font-semibold rounded-lg shadow-md hover:bg-green-darker transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {getText()["button-pdf"]}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EvidenceOfImpact;
