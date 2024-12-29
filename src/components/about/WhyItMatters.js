import React from "react";
import Link from "next/link";

function WhyItMattersCTA(props) {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-green-lightest to-lightBg">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-darkest">
          {props.title || "Why It Matters"}
        </h2>
        <p className="text-lg text-green-dark leading-relaxed max-w-3xl mx-auto">
          {props.subtitle ||
            "Understanding sustainability is key to collective impact."}
        </p>
        <div className="mt-8">
          <Link href="/explainer" passHref>
            <a className="px-6 py-3 bg-green-dark text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-green-darker transition-transform transform hover:scale-105">
              {props.button || "Learn More"}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyItMattersCTA;
