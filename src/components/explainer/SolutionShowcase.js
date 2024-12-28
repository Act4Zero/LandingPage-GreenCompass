import React from "react";
import "util/i18n";
import { useTranslation } from "react-i18next";

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
      icon: "📘",
      bgColor: "bg-white",
    },
    {
      title: getText().solution2.title,
      description: getText().solution2.description,
      icon: "🌱",
      bgColor: "bg-green-lightest",
    },
    {
      title: getText().solution3.title,
      description: getText().solution3.description,
      icon: "🤝",
      bgColor: "bg-green-light",
    },
    {
      title: getText().solution4.title,
      description: getText().solution4.description,
      icon: "🔄",
      bgColor: "bg-accentLight",
    },
  ];

  return (
    <section className="py-16 px-8 bg-gradient-to-b from-green-lightest to-lightBg text-green-darkest relative">
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
              {solution.icon && (
                <div className="text-4xl mb-4 text-green-darkest">
                  {solution.icon}
                </div>
              )}

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
