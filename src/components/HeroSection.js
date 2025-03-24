import React from "react";
import Section from "components/common/Section";
import SectionHeader from "components/common/SectionHeader";
import Button from "components/common/Button";
import { useTranslation } from 'react-i18next';
import heroImage from "/public/images/index-hero-bg.jpg";

function HeroSection(props) {
  const { t } = useTranslation();
  return (
    <Section
      size={props.size || "md"}
      bgColor={props.bgColor || "bg-green-lightest"}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor="text-white"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage.src})`,
        maxHeight: "60vh"
      }}
    >
      <div className="relative flex flex-col items-center justify-center text-center px-3 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="bg-black bg-opacity-25 p-5 sm:p-6 rounded-lg max-w-2xl mx-auto backdrop-blur-sm">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            strapline={props.strapline}
            textColor={props.textColor || {
              title: "text-white",
              subtitle: "text-white",
            }}
          />
          
          {props.showButton && (
            <div className="mt-4">
              <Button 
                variant={props.buttonVariant || "secondary"} 
                size="md" 
                onClick={props.onButtonClick}
                href={props.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-md hover:shadow-lg transition-all duration-300 border-2"
              >
                {props.buttonText || t("index.hero.cta", "Get Started")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
