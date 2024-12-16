import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Button from "components/Button";
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
          <Link href="#features" passHref>
            <Button size="xl" variant="primary">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative mt-10 lg:mt-16 mx-auto max-w-full sm:max-w-4xl lg:max-w-6xl overflow-hidden">
          <img
            className="relative rounded-lg mx-auto shadow-lg object-cover"
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=1280"
            alt="Hero Image"
          />
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
