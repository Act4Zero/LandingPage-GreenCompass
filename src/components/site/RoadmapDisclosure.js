import React, { useId, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function RoadmapDisclosure({ icon: Icon, index, title, summary, stage, exploring, question }) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsId = useId();

  return (
    <article className="editorial-card relative overflow-hidden p-0">
      <button
        type="button"
        className="group flex h-full w-full flex-col p-7 text-left"
        aria-expanded={isOpen}
        aria-controls={detailsId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="flex w-full items-start justify-between gap-5">
          <Icon className="h-8 w-8 shrink-0 text-leaf" aria-hidden="true" />
          <span className="rounded-full bg-stone px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-forest">
            Roadmap {index + 1}
          </span>
        </span>
        <span className="mt-10 flex w-full items-center justify-between gap-4">
          <span className="text-xl font-bold text-ink">{title}</span>
          <ChevronDownIcon
            className={`h-5 w-5 shrink-0 text-leaf transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </span>
        <span className="mt-3 leading-7 text-ink/65">{summary}</span>
        <span className="mt-6 text-sm font-bold text-leaf group-hover:text-forest">
          {isOpen ? "Hide planning notes" : "Read planning notes"}
        </span>
      </button>

      <div
        id={detailsId}
        hidden={!isOpen}
        className="border-t border-forest/10 bg-white/55 px-7 py-6"
      >
        <dl className="space-y-5 text-sm leading-6">
          <div>
            <dt className="font-bold uppercase tracking-[0.12em] text-forest">Planning stage</dt>
            <dd className="mt-1 text-ink/65">{stage}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-[0.12em] text-forest">What we are exploring</dt>
            <dd className="mt-1 text-ink/65">{exploring}</dd>
          </div>
          <div>
            <dt className="font-bold uppercase tracking-[0.12em] text-forest">Question to resolve</dt>
            <dd className="mt-1 text-ink/65">{question}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default RoadmapDisclosure;
