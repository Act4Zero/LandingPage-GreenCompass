import React from "react";
import parse from "html-react-parser";

function ContentSection(props) {
  const TitleTag = props.titleSize || "h1"; // Default to h1 if no titleSize is provided
  const backgroundColor =
    props.backgroundColor || "bg-gradient-to-br from-green-lightest to-lightBg";

  return (
    <section
      id={props.id}
      className={`${backgroundColor} py-12 px-6 sm:py-16 lg:py-20 lg:px-8 text-green-darkest`}
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <TitleTag className="font-bold mb-8">{props.title}</TitleTag>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-left sm:text-center">
          {props.paragraphs && parse(props.paragraphs.join(""))}
        </div>

        {/* Call-to-Action Button */}
        {props.showButton && (
          <div className="mt-10 text-center">
            <button className="bg-gradient-to-r from-green-dark to-green hover:from-green-darkest hover:to-green-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              {props.buttonText || "Learn More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContentSection;
