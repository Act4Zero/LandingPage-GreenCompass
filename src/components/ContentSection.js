import React from "react";

function ContentSection(props) {
  return (
    <section
      id={props.id}
      className="bg-gradient-to-br from-green-lightest to-lightBg py-12 px-6 sm:py-16 lg:py-20 lg:px-8 text-green-darkest"
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-8">{props.title}</h1>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-left sm:text-center">
          {props.paragraph1 && <p>{props.paragraph1}</p>}
          {props.paragraph2 && <p>{props.paragraph2}</p>}
          {props.paragraph3 && <p>{props.paragraph3}</p>}
          {props.paragraph4 && <p>{props.paragraph4}</p>}
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
