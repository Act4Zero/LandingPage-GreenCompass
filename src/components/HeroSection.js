import React from "react";
import Section from "components/common/Section";
import SectionHeader from "components/common/SectionHeader";
import heroImage from "/public/images/index-hero-bg.jpg";

function HeroSection(props) {
  return (
    <Section
      size={props.size}
      bgColor={props.bgColor || "bg-green-lightest"}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor="text-white"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage.src})`,
      }}
    >
      <div className="relative flex flex-col items-center justify-center text-center px-3 sm:px-6 lg:px-8">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          textColor={props.textColor}
        />
      </div>
    </Section>
  );
}

export default HeroSection;
