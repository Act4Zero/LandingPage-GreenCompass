import React from "react";
import "util/i18n";
import { useTranslation } from "react-i18next";

const Introduction = () => {
    const { t } = useTranslation();
    const getText = () => {
      return t("research", { returnObjects: true }) || {};
    };

    return (
      <div className="white">
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-green-dark mb-6">{getText().title}</h1>
            <blockquote className="text-lg text-green-dark italic border-l-4 border-green-dark pl-4 mb-6">
                {getText().quote}
            </blockquote>
            <p className="text-lg text-green-dark">{getText().subtitle}</p>
          </div>
        </section>
      </div>
    );
}

export default Introduction;
