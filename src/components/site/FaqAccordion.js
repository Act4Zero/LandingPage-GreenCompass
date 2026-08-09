import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const faqItems = [
  {
    question: "What can I use Green Compass for today?",
    answer:
      "Today, Green Compass is a growing knowledge hub with curated sustainability articles and practical guidance. More interactive tools are being developed and are labeled clearly on this site.",
  },
  {
    question: "Do I need to change everything at once?",
    answer:
      "No. Green Compass is built around realistic progress: understand one choice, try one useful action, and build from there. Sustainable living should feel clearer, not more overwhelming.",
  },
  {
    question: "Are the impact figures a Green Compass guarantee?",
    answer:
      "No. The figures shown on this site come from independent research into carbon-footprint tracking apps. They describe that study's results and are not a promise of individual outcomes.",
  },
  {
    question: "What is coming next?",
    answer:
      "The roadmap includes local green discovery, footprint tracking, community challenges, and a more considered marketplace. These ideas are presented as upcoming—not as finished features.",
  },
  {
    question: "How can I share feedback?",
    answer:
      "Use the contact form below. Green Compass is evolving, and thoughtful feedback helps shape what deserves to be built next.",
  },
];

function FaqAccordion({ items = faqItems }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-forest/10 border-y border-forest/10">
      {items.map((item, index) => {
        const open = index === openIndex;
        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-5 py-6 text-left"
            >
              <span className="text-lg font-bold text-ink sm:text-xl">{item.question}</span>
              <ChevronDownIcon className={`h-5 w-5 shrink-0 text-leaf transition ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <div id={`faq-answer-${index}`} className="max-w-3xl pb-7 text-base leading-7 text-ink/70">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FaqAccordion;
