import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Button from "components/Button";

function CtaSection(props) {
  return (
    <Section
      size={props.size}
      bgColor={props.bgColor}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor}
    >
      <div className="container py-10 md:py-0">
        <div className="relative">
          <div className="pattern-dots text-blue-300 absolute bottom-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-12 translate-y-16" />
          <div className="pattern-dots text-blue-300 absolute top-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-12 -translate-y-16" />
          <div className="absolute inset-0 -m-6 rounded-xl transform rotate-2 bg-blue-50 bg-opacity-60" />
          <div className="absolute inset-0 -m-6 rounded-xl transform -rotate-2 bg-blue-100 bg-opacity-60" />
          <div className="p-12 lg:py-16 lg:px-16 bg-blue-800 rounded shadow-lg text-center relative">
            <div className="space-y-10">
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                strapline={props.strapline}
              />
              <div className="text-center">
                <Link href="/pricing" passHref={true}>
                  <Button
                    size="xl"
                    variant="secondary"
                    endIcon={
                      <ArrowRightIcon className="opacity-70 inline-block w-5 h-5" />
                    }
                  >
                    Let's get started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection;
