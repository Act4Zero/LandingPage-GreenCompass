import React from "react";
import Link from "next/link";

function WhyItMattersCTA(props) {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-green-lightest">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-darkest">{props.title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">{props.subtitle}</p>

        {/* CTA Button */}
        <div className="mt-6">
          <Link href="/explainer" passHref>
            <a className="px-6 py-3 bg-green-dark text-white font-medium rounded-lg shadow-md hover:bg-green-darker transition-transform transform hover:scale-105">
                {props.button}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyItMattersCTA;
