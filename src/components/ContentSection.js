import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
import Button from "components/common/Button";

function ContentSection(props) {
  const TitleTag = props.titleSize || "h1"; // Default to h1 if no titleSize is provided
  const backgroundColor =
    props.backgroundColor || "bg-gradient-to-br from-white to-green-lightest";
  const textColor = props.textColor || "text-green-darkest";
  const alignment = props.textAlign || "text-left sm:text-center";

  return (
    <section
      id={props.id}
      className={`${backgroundColor} py-12 px-6 sm:py-16 lg:py-20 lg:px-8 ${textColor}`}
      style={{
        backgroundImage: props.backgroundImage
          ? `url(${props.backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <TitleTag className={`font-extrabold mb-8 text-3xl sm:text-4xl`}>
          {props.title}
        </TitleTag>

        {/* Content Paragraphs */}
        <div
          className={`space-y-6 text-lg sm:text-xl leading-relaxed ${alignment}`}
        >
          {props.paragraphs && parse(props.paragraphs.join(""))}
        </div>

        {/* Call-to-Action Button */}
        {props.showButton && (
          <div className="mt-10 text-center">
            <Link href="/explainer" passHref>
              <Button size="xl" variant="primary">
                {props.buttonText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContentSection;
