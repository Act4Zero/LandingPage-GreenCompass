import React from "react";
import Link from "next/link";
import Button from "components/common/Button";

function ResearchCta(props) {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-lightBg text-green-darkest">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Subtitle */}
        <p className="text-lg sm:text-xl leading-relaxed">{props.subtitle}</p>

        {/* Button */}
        <Link
          href="https://www.sciencedirect.com/science/article/pii/S0959652623041392"
          passHref
        >
          <Button size="xl" variant="primary">
            {props.buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default ResearchCta;
