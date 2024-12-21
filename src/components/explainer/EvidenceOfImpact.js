import React from "react";
import Link from "next/link";

const EvidenceOfImpact = ({ title, content }) => {
  return (
    <section className="bg-lightBg py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold leading-tight text-green-dark mb-6">
          {title}
        </h2>
        <article className="prose lg:prose-xl">{content}</article>
        <div className="mt-8">
          <Link href="/research" passHref>
            <a
              className="inline-block px-6 py-3 bg-green-dark text-white font-semibold rounded-lg shadow-md hover:bg-green-darker transition duration-200 mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </Link>
          <Link href="/path-to-research-pdf" passHref>
            <a
              className="inline-block px-6 py-3 bg-green-dark text-white font-semibold rounded-lg shadow-md hover:bg-green-darker transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the full research
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EvidenceOfImpact;
