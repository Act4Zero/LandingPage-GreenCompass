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
      size={props.size || "sm"}
      bgColor={props.bgColor || "bg-green-lightest"}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor="text-white"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage.src})`,
        minHeight: "250px",
        height: "auto"
      }}
    >
      <div className="relative flex flex-col items-center justify-center text-center w-full h-full py-4 px-2">
        <div className="bg-black bg-opacity-25 p-3 sm:p-4 md:p-5 rounded-lg w-[95%] max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto backdrop-blur-sm">
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
            <div className="mt-2 sm:mt-3">
              {/* Small button for mobile */}
              <Button 
                variant={props.buttonVariant || "secondary"} 
                size="sm" 
                onClick={props.onButtonClick}
                href={props.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden shadow-md hover:shadow-lg transition-all duration-300 border-2"
              >
                {props.buttonText || t("index.hero.cta", "Get Started")}
              </Button>
              
              {/* Medium button for tablets and desktops */}
              <Button 
                variant={props.buttonVariant || "secondary"} 
                size="md" 
                onClick={props.onButtonClick}
                href={props.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex shadow-md hover:shadow-lg transition-all duration-300 border-2"
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
