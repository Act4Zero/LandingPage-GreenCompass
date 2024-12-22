import React from "react";

function SectionHeader(props) {
  // Render nothing if no title, subtitle, or strapline
  if (!props.title && !props.subtitle && !props.strapline) {
    return null;
  }

  // Define default colors from theme
  const {
    straplineColor = "text-green-dark",
    titleColor = "text-green-darkest",
    subtitleColor = "text-green-dark",
  } = props;

  return (
    <header
      className={
        "py-8 mb-8 last:mb-0 text-center" +
        (props.className ? ` ${props.className}` : "")
      }
    >
      {props.strapline && (
        <div
          className={`text-sm uppercase font-bold tracking-wider mb-1 ${straplineColor}`}
        >
          {props.strapline}
        </div>
      )}

      {props.title && (
        <h1 className={`text-3xl md:text-4xl font-extrabold ${titleColor}`}>
          {props.title}
        </h1>
      )}

      {props.subtitle && (
        <h2
          className={`mt-4 inline-block text-lg md:text-xl md:leading-relaxed font-medium max-w-screen-md opacity-80 ${subtitleColor}`}
        >
          {props.subtitle}
        </h2>
      )}
    </header>
  );
}

export default SectionHeader;
