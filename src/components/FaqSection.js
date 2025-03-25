import React, { useState } from "react";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Section from "components/common/Section";
import SectionHeader from "components/common/SectionHeader";
import Button from "components/common/Button";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

// FAQ Item component to handle individual collapsible items
const FaqItem = ({ question, answer, index, isOpen, toggleItem }) => {
  return (
    <div className="mb-4">
      <button
        onClick={() => toggleItem(index)}
        className={`w-full flex justify-between items-center p-4 text-left transition-colors duration-200 border ${isOpen ? 'border-green-300 bg-green-50' : 'border-green-200 bg-white'} rounded-t-lg ${!isOpen && 'rounded-b-lg'} shadow-sm`}
        aria-expanded={isOpen}
      >
        <h4 className="text-green-darkest font-medium text-lg m-0">{question}</h4>
        <span className="flex-shrink-0 ml-2">
          {isOpen ? (
            <ChevronUpIcon className="w-5 h-5 text-green-600" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-green-600" />
          )}
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            key={`content-${index}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-x border-b border-green-300 rounded-b-lg shadow-sm"
          >
            <div className="p-4 bg-white text-green-dark prose prose-green">
              <p className="mb-0">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function FaqSection(props) {
  const { t } = useTranslation();
  const faqItems = t("index.faq.questions", { returnObjects: true }) || {};
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FaqItem 
                question={item.question} 
                answer={item.answer} 
                index={index}
                isOpen={openIndex === index}
                toggleItem={toggleItem}
              />
            </motion.div>
          ))}
        </div>

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
