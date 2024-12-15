import React from "react";
import { CubeTransparentIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
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
      <div className="relative container">
        <div className="text-center">
          <Link href="/">
            <a className="inline-block mb-10 text-green-dark hover:text-green">
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
          <Link href="/pricing" passHref={true}>
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
          <Link href="/about" passHref={true}>
            <Button size="xl" variant="primary">
              Learn more
            </Button>
          </Link>
        </div>
        <div className="pb-4 md:pb-0">
          <div className="relative mx-5 lg:mx-32">
            <div className="absolute inset-0 rounded-xl bg-green bg-opacity-20 -m-4 transform rotate-2" />
            <div className="absolute inset-0 rounded-xl bg-green bg-opacity-25 -m-4 transform -rotate-2" />
            <img
              className="relative rounded-lg mx-auto shadow-lg"
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=1280"
              alt=""
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
