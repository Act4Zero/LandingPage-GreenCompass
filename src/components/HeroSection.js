import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Section from "components/common/Section";
import SectionHeader from "components/common/SectionHeader";
import Button from "components/common/Button";
import Image from "next/image";

function HeroSection(props) {
  return (
    <Section
      size={props.size}
      bgColor={props.bgColor || "bg-green-lightest"}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor || "text-green-darkest"}
    >
      <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Logo and Header */}
        <div>
          <Link href="/">
            <a className="inline-block mb-8">
              <Image
                src="/images/GCLogo-no-bg.png"
                alt="Green Compass Logo"
                width={128}
                height={128}
              />
            </a>
          </Link>
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            strapline={props.strapline}
          />
        </div>

        {/* Call-to-Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <Link href="#content" passHref>
            <Button
              size="xl"
              variant="secondary"
              endIcon={
                <ArrowRightIcon className="opacity-70 inline-block w-5 h-5 text-green-dark" />
              }
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative mt-10 lg:mt-16 mx-auto max-w-full sm:max-w-4xl lg:max-w-6xl overflow-hidden">
          <img
            className="relative rounded-lg mx-auto shadow-lg object-cover"
            src="https://images.unsplash.com/photo-1565223402699-0cdfa8a5bda9"
            style={{ width: "1000px", height: "600px" }}
            alt="Hero Image"
          />
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
