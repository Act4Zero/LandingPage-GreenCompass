import React from "react";
import Link from "next/link";
import Button from "components/common/Button";

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
            <Button
              size="xl"
              variant="primary"
            >
              {props.button}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyItMattersCTA;
