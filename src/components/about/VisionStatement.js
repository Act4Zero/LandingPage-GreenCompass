import React from "react";

function VisionStatement(props) {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-green-lightest to-lightBg relative">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-darkest">
          {props.title || "Our Vision"}
        </h2>

        {/* Vision Description */}
        <p className="text-lg sm:text-xl text-green-dark leading-relaxed max-w-3xl mx-auto">
          {props.subtitle ||
            "We strive to create a sustainable future by empowering individuals and communities to make meaningful changes."}
        </p>

        {/* Visual Break: Inspirational Image */}
        <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src={
              props.image ||
              "https://images.unsplash.com/photo-1527525443983-6e60c75fff46"
            }
            alt={
              props.imageAlt ||
              "Collaborative community working towards sustainability"
            }
            className="w-full h-72 sm:h-80 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default VisionStatement;
