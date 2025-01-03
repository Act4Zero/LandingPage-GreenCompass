import React from "react";
import explainerImage from "/public/images/explainer-banner-bg.jpeg";

function ExplainerBanner(props) {
  return (
    <div className="relative bg-gradient-to-br from-lightBg to-green-lightest rounded-lg shadow-lg mt-0 overflow-hidden">
      <img
        src={explainerImage.src}
        alt="A scenic view of a forest with sunlight filtering through the trees"
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h2 className="text-4xl font-bold mb-4">{props.title}</h2>
          <p className="text-lg">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default ExplainerBanner;
