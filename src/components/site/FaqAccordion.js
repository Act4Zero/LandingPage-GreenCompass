import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const faqItems = [
  {
    question: "What can I use Green Compass for today?",
    answer:
      "Green Compass includes habits and impact estimates, a personal ecosystem, personalized learning, sustainable places and events, Community, and a pilot Marketplace. Some personal and interactive experiences require an account.",
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
    question: "Is every marketplace feature available?",
    answer:
      "Marketplace discovery is being introduced through a staged pilot. Product catalogues and checkout may be limited while partners, evidence, and certifications are reviewed.",
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
