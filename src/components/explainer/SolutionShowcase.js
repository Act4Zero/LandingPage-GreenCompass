import React from "react";
import "util/i18n";
import { useTranslation } from "react-i18next";
import { FaBookOpen, FaLeaf } from "react-icons/fa";
import { FaPeopleGroup, FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";

function SolutionShowcase() {
  const { t } = useTranslation();
  const getText = () => {
    return t("explainer.solution", { returnObjects: true }) || {};
  };

  const subtitle = getText().subtitle;
  const solutions = [
    {
      title: getText().solution1.title,
      description: getText().solution1.description,
      icon: <FaBookOpen/>,
      bgColor: "bg-white",
    },
    {
      title: getText().solution2.title,
      description: getText().solution2.description,
      icon: <FaLeaf/>,
      bgColor: "bg-green-lightest",
    },
    {
      title: getText().solution3.title,
      description: getText().solution3.description,
      icon: <FaPeopleGroup/>,
      bgColor: "bg-white",
    },
    {
      title: getText().solution4.title,
      description: getText().solution4.description,
      icon: <FaPersonWalkingArrowLoopLeft/>,
      bgColor: "bg-green-lightest",
    },
  ];

  return (
    <section className="py-16 px-8 bg-gradient-to-b from-white to-lightBg text-green-darkest relative">
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-darkest">
            {getText().title}
          </h2>
          {subtitle && (
            <p className="text-lg sm:text-xl text-green-dark mt-4">
              {subtitle}
            </p>
          )}
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${solution.bgColor} flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl`}
            >
              {/* Icon */}
              <div className="text-3xl text-green mb-4">{solution.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-green-darkest mb-3">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-green-dark">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionShowcase;
