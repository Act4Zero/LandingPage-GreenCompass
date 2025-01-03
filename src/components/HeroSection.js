import React from "react";
import Link from "next/link";
import Section from "components/common/Section";
import SectionHeader from "components/common/SectionHeader";
import Button from "components/common/Button";

function HeroSection(props) {
  return (
    <Section
      size={props.size}
      bgColor={props.bgColor || "bg-green-lightest"}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor="text-white" // Ensure text remains white
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${props.bgImage})`, // Stretch background image
      }}
    >
      <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          textColor={props.textColor}
        />

        {/* Call-to-Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <Link href="#content" passHref>
            <Button size="xl" variant="secondary">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
