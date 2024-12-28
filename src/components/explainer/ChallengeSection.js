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
    <section className="py-12 px-6 sm:py-16 lg:py-20 lg:px-8 bg-gradient-to-b text-green-darkest relative">
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-green-dark leading-relaxed mb-8">
          {getText().subtitle}
        </p>
        {/* Challenge Details */}
        <div className="space-y-8 sm:space-y-12">
          {[
            { icon: mdiMoleculeCo2, paragraph: getText().paragraph1 },
            { icon: mdiPipeDisconnected, paragraph: getText().paragraph2 },
            { icon: mdiBoomGateAlert, paragraph: getText().paragraph3 },
          ].map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center">
                <Icon
                  path={item.icon}
                  size={2}
                  className="text-green-dark mr-4 hover:text-green hover:scale-105 transition-transform"
                />
                <h4 className="font-bold text-lg text-green-darkest">
                  {item.paragraph.title}
                </h4>
              </div>
              <p className="text-green-dark leading-relaxed">
                {item.paragraph.content}
              </p>
            </div>
          ))}
        </div>
        {/* Conclusion */}
        <div className="mt-8 bg-white text-green-darkest py-6 px-8 rounded-lg shadow-lg border border-green-dark">
          {parse(getText().conclusion)}
        </div>
      </div>
    </section>
  );
}

export default ChallengeSection;
