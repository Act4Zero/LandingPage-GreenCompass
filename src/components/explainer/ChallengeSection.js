import React from "react";
import "util/i18n";
import { useTranslation } from "react-i18next";
import Icon from "@mdi/react";
import { mdiMoleculeCo2, mdiPipeDisconnected, mdiBoomGateAlert } from "@mdi/js";
import parse from "html-react-parser";

function ChallengeSection() {
  const { t } = useTranslation();
  const getText = () => {
    return t("explainer.challenge", { returnObjects: true }) || {};
  };

  return (
    <section className="bg-gradient-to-br from-lightBg to-accentLight py-12 px-6 sm:py-16 lg:py-20 lg:px-8 text-green-darkest bg-[url('/assets/texture.svg')] bg-cover">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-bold text-2xl mb-6 text-green-dark">
          {getText().title}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-8">
          {getText().subtitle}
        </p>
        <div className="space-y-8 sm:space-y-12">
          <div className="flex items-center">
            <Icon
              path={mdiMoleculeCo2}
              size={2}
              className="text-green-dark mr-4 hover:text-green-light transition-transform transform hover:scale-105"
            />
            <h4 className="font-bold text-lg">{getText().paragraph1.title}</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {getText().paragraph1.content}
          </p>
          <div className="border-t border-gray-300 my-6"></div>
          <div className="flex items-center">
            <Icon
              path={mdiPipeDisconnected}
              size={2}
              className="text-green-dark mr-4 hover:text-green-light transition-transform transform hover:scale-105"
            />
            <h4 className="font-bold text-lg">{getText().paragraph2.title}</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {getText().paragraph2.content}
          </p>
          <div className="border-t border-gray-300 my-6"></div>
          <div className="flex items-center">
            <Icon
              path={mdiBoomGateAlert}
              size={2}
              className="text-green-dark mr-4 hover:text-green-light transition-transform transform hover:scale-105"
            />
            <h4 className="font-bold text-lg">{getText().paragraph3.title}</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {getText().paragraph3.content}
          </p>
        </div>
        <div className="mt-8 bg-white text-green-darkest py-4 px-6 rounded-lg shadow-lg border border-green-dark">
          {parse(getText().conclusion)}
        </div>
      </div>
    </section>
  );
}

export default ChallengeSection;
