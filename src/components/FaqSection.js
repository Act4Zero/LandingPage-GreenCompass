import React from "react";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Section from "components/common/Section";
import SectionHeader from "components/common/SectionHeader";
import Button from "components/common/Button";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function FaqSection(props) {
  const { t } = useTranslation();
  const faqItems = t("index.faq.questions", { returnObjects: true }) || {};

  const faqData = [
    { question: faqItems["1"]?.question, answer: faqItems["1"]?.answer },
    { question: faqItems["2"]?.question, answer: faqItems["2"]?.answer },
    { question: faqItems["3"]?.question, answer: faqItems["3"]?.answer },
    { question: faqItems["4"]?.question, answer: faqItems["4"]?.answer },
    { question: faqItems["5"]?.question, answer: faqItems["5"]?.answer },
    { question: faqItems["6"]?.question, answer: faqItems["6"]?.answer },
    { question: faqItems["7"]?.question, answer: faqItems["7"]?.answer },
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
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            strapline={props.strapline}
            className="text-center text-green-darkest"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.2, // Stagger the children animations
            duration: 0.8,
          }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="prose prose-green"
            >
              <h4 className="text-green-darkest">{item.question}</h4>
              <p className="text-green-dark">{item.answer}</p>
            </motion.div>
          ))}
        </motion.div>

        {props.showSupportButton && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="#contact" passHref={true} legacyBehavior>
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
          </motion.div>
        )}
      </div>
    </Section>
  );
}

export default FaqSection;
