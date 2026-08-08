import React from "react";
import Link from "next/link";

function PageHero({ eyebrow, title, description, primary, secondary, compact = false }) {
  return (
    <section className={`eco-grid overflow-hidden border-b border-forest/10 ${compact ? "py-20 sm:py-24" : "py-20 sm:py-28 lg:py-32"}`}>
      <div className="site-container">
        <div className={`fade-rise max-w-4xl ${compact ? "mx-auto text-center" : ""}`}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className={compact ? "section-title" : "display-title"}>{title}</h1>
          <p className={`mt-7 text-lg leading-8 text-ink/70 sm:text-xl ${compact ? "mx-auto max-w-3xl" : "max-w-2xl"}`}>
            {description}
          </p>
          {(primary || secondary) && (
            <div className={`mt-9 flex flex-col gap-3 sm:flex-row ${compact ? "justify-center" : ""}`}>
              {primary && (
                <Link href={primary.href} className="button-primary">
                  {primary.label}
                </Link>
              )}
              {secondary && (
                <a href={secondary.href} target="_blank" rel="noreferrer" className="button-secondary">
                  {secondary.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
