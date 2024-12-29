import React from "react";
import { FaLeaf, FaGlobe, FaHandsHelping } from "react-icons/fa";

function MissionStatement() {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white to-green-lightest">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <p className="text-lg sm:text-xl text-green-dark leading-relaxed max-w-3xl mx-auto">
          "At Green Compass, we strive to inspire and empower communities to
          drive sustainable change."
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { Icon: FaLeaf, label: "Sustainability" },
            { Icon: FaGlobe, label: "Global Impact" },
            { Icon: FaHandsHelping, label: "Community" },
          ].map(({ Icon, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-green-light rounded-full p-9 shadow-md w-40 h-40 transition-transform transform hover:scale-105"
            >
              <Icon className="text-4xl text-green-dark mb-2" />
              <p className="text-sm text-green-dark font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionStatement;
