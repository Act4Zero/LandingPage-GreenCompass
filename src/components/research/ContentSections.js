import React from "react";
import Link from "next/link";
import InteractiveCharts from "./InteractiveCharts";

const ContentSections = () => {
  return (
    <div className="white">
      {/* Key Findings Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-dark mb-6">
            Key Findings
          </h2>
          <div className="prose lg:prose-xl">
            <h3>Reduction in Carbon Emissions</h3>
            <ul>
              <li>
                <strong>23%</strong> average reduction in carbon emissions
                through feedback.
              </li>
              <li>
                Breakdown by domain: <strong>12%</strong> for mobility,{" "}
                <strong>35%</strong> for household activities.
              </li>
            </ul>
            <InteractiveCharts/>
            <h3>Behavior-Intention Gap</h3>
            <p>
              Apps address the "behavior-intention gap" by providing actionable
              feedback, helping users align their intentions with real-world
              actions.
            </p>
            <h3>Role of Individual Traits</h3>
            <ul>
              <li>
                <strong>Perceived Green Self-Efficacy:</strong> Amplifies
                feedback effectiveness.
              </li>
              <li>
                <strong>Green Self-Identity:</strong> Moderates the impact of
                feedback.
              </li>
            </ul>
          </div>
        </div>
      </section>

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

      {/* Call to Action Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-green-light">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-dark mb-6">
            Take Action
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Learn more about the power of Carbon Footprint Tracking Apps and
            start your journey toward sustainability.
          </p>
          <Link href="/path-to-research-pdf" passHref>
            <a
              className="inline-block px-6 py-3 bg-green-dark text-white font-semibold rounded-lg shadow-md hover:bg-green-darker transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the Full Research
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContentSections;
