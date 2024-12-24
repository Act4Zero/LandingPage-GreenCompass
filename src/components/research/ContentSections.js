import React from "react";
import Link from "next/link";

const ContentSections = () => {
  return (
    <div className="white">
      {/* Domain-Specific Impacts Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-lightBg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-dark mb-6">
            Domain-Specific Impacts
          </h2>
          <p className="text-lg text-gray-700">
            Explore the impact across four domains: mobility, food, heating, and
            household activities.
          </p>
          <div className="prose lg:prose-xl">
            <ul>
              <li>
                <strong>Mobility:</strong> Reduce emissions by carpooling or
                using public transport.
              </li>
              <li>
                <strong>Food:</strong> Minimize emissions by adopting
                plant-based diets or reducing food waste.
              </li>
              <li>
                <strong>Heating:</strong> Lower emissions with energy-efficient
                systems and behaviors.
              </li>
              <li>
                <strong>Household Activities:</strong> Cut down emissions
                through energy conservation and smart devices.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentSections;
