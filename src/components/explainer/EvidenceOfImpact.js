import React from "react";
import Link from "next/link";
import { FaLeaf, FaHome, FaCar } from "react-icons/fa";
import "util/i18n";
import { useTranslation } from "react-i18next";
import Button from "components/common/Button";

const EvidenceOfImpact = () => {
  const { t } = useTranslation();
  const getText = () => {
    return t("explainer.evidence", { returnObjects: true }) || {};
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-lightBg to-green-lightest text-green-darkest">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold leading-tight text-green-darkest mb-6">
          {getText().title}
        </h2>
        {/* Subtitle */}
        <p className="text-lg text-green-dark mb-8">{getText().subtitle}</p>

        {/* Evidence Items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaLeaf className="text-green-dark text-4xl mb-3" />
            <h3 className="text-2xl font-bold text-green-darkest">23%</h3>
            <p className="text-green-dark">{getText().evidence1}</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaHome className="text-green-dark text-4xl mb-3" />
            <h3 className="text-2xl font-bold text-green-darkest">35%</h3>
            <p className="text-green-dark">{getText().evidence2}</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaCar className="text-green-dark text-4xl mb-3" />
            <h3 className="text-2xl font-bold text-green-darkest">12%</h3>
            <p className="text-green-dark">{getText().evidence3}</p>
          </div>
        </div>

        {/* Conclusion */}
        <p className="text-lg text-green-dark mb-8">{getText().conclusion}</p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/research" passHref legacyBehavior>
            <Button size="xl" variant="primary">
              {getText()["button-more"]}
            </Button>
          </Link>
          <Link
            href="https://www.sciencedirect.com/science/article/pii/S0959652623041392"
            passHref
            legacyBehavior
          >
            <Button size="xl" variant="dark">
              {getText()["button-pdf"]}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EvidenceOfImpact;
