import React from "react";
import Link from "next/link";

function ResearchCta(props) {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-green-200 via-green-100 to-green-200">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <p className="text-lg text-gray-800 leading-relaxed">{props.subtitle}</p>
        <Link
          href="https://www.sciencedirect.com/science/article/pii/S0959652623041392"
          passHref
        >
          <a
            className="inline-block px-8 py-4 bg-green-600 text-white font-medium text-lg rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.buttonText}
          </a>
        </Link>
      </div>
    </section>
  );
};

export default ResearchCta;
