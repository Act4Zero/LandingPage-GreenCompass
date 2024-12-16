import React from "react";

function ContentSection(props) {
  return (
    <section 
      id={props.id}
      className="bg-lightBg py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 text-green-darkest">
      <div className="w-full max-w-full sm:max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">{props.title}</h1>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-left sm:text-center">
          {props.paragraph1 && <p>{props.paragraph1}</p>}
          {props.paragraph2 && <p>{props.paragraph2}</p>}
          {props.paragraph3 && <p>{props.paragraph3}</p>}
          {props.paragraph4 && <p>{props.paragraph4}</p>}
        </div>

        {/* Call-to-Action Button */}
        {props.showButton && (
          <div className="mt-8 text-center">
            <button className="bg-green text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-green-dark transition duration-300">
              {props.buttonText || "Learn More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContentSection;
