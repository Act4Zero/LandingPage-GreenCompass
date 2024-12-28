import React from "react";
import Link from "next/link";

function ResearchCta(props) {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-green-lightest to-lightBg text-green-darkest">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Subtitle */}
        <p className="text-lg sm:text-xl leading-relaxed">{props.subtitle}</p>

        {/* Button */}
        <Link
          href="https://www.sciencedirect.com/science/article/pii/S0959652623041392"
          passHref
        >
          <a
            className="inline-block px-8 py-4 bg-green-dark text-white font-medium text-lg rounded-lg shadow-lg hover:bg-green-darker hover:scale-105 transform transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.buttonText}
          </a>
        </Link>
      </div>
    </section>
  );
}

export default ResearchCta;
