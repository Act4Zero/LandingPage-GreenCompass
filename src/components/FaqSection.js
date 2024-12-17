import React from "react";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Button from "components/Button";
import { useTranslation } from "react-i18next";

function FaqSection(props) {
  const { t } = useTranslation();
  const getText = () => {
    return t("faq.questions", { returnObjects: true }) || {};
  };

  const faqItems = [
    {
      question: getText()["1"].question,
      answer: getText()["1"].answer,
    },
    {
      question: getText()["2"].question,
      answer: getText()["2"].answer,
    },
    {
      question: getText()["3"].question,
      answer: getText()["3"].answer,
    },
    {
      question: getText()["4"].question,
      answer: getText()["4"].answer,
    },
    {
      question: getText()["5"].question,
      answer: getText()["5"].answer,
    },
    {
      question: getText()["6"].question,
      answer: getText()["6"].answer,
    },
    {
      question: getText()["7"].question,
      answer: getText()["7"].answer,
    },
  ];

  return (
    <Section
      id="faq"
      size={props.size}
      bgColor={props.bgColor || "bg-lightBg"}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      textColor={props.textColor || "text-green-darkest"}
    >
      <div className="space-y-12 container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          strapline={props.strapline}
          className="text-center text-green-darkest"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {faqItems.map((item, index) => (
            <div className="prose prose-green" key={index}>
              <h4 className="text-green-darkest">{item.question}</h4>
              <p className="text-green-dark">{item.answer}</p>
            </div>
          ))}
        </div>

        {props.showSupportButton && (
          <div className="text-center">
            <Link href="#contact" passHref={true}>
              <Button
                size="lg"
                variant="primary"
                startIcon={
                  <ArrowTopRightOnSquareIcon className="opacity-70 inline-block w-5 h-5" />
                }
              >
                Get in touch
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Section>
  );
}

export default FaqSection;
