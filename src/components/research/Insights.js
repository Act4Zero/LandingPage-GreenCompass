import React from "react";
import InteractiveCharts from "./InteractiveCharts";

function Insights(props) {
  return (
    <div className="white">
      <section className="py-12 px-4 sm:px-6 lg:px-8 white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-12">
            {/* Interactive Charts Section */}
            <InteractiveCharts />

            {/* Key Insights Section */}
            <div className="mt-12">
              <p className="text-lg text-green-dark">{props.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
