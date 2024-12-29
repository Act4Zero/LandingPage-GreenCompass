import React from "react";

function VisionStatement(props) {
  return (
    <section className="bg-gradient-to-r from-green-lightest via-white to-green-light py-16 px-6 sm:px-8 lg:px-12 relative">

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-darkest">{props.title}</h2>

        {/* Vision Description */}
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{props.subtitle}</p>

        {/* Visual Break: Inspirational Image */}
        <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46"
            alt="Collaborative community working towards sustainability"
            style={{ width: "1000px", height: "600px" }}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default VisionStatement;
