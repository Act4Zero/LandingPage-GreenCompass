import React from "react";

function SectionHeader(props) {
  // Render nothing if no title, subtitle, or strapline
  if (!props.title && !props.subtitle && !props.strapline) {
    return null;
  }

  // Define default colors from theme
  const textColor = props.textColor || {
    strapline: "text-green-dark",
    title: "text-green-darkest",
    subtitle: "text-green-dark",
  };
  const bgColor = props.bgColor;

  const paddingVertical = props.paddingVertical || "py-8";

  return (
    <header
      className={`${paddingVertical} last:mb-0 text-center ${
        bgColor ? `${bgColor} rounded-lg shadow-md` : ""
      } ${props.className || ""}`}
    >
      {/* Strapline */}
      {props.strapline && (
        <div
          className={`text-sm uppercase font-bold tracking-wider mb-1 ${textColor.strapline}`}
        >
          {props.strapline}
        </div>
      )}

      {/* Title */}
      {props.title && (
        <h1
          className={`text-3xl md:text-4xl font-extrabold ${textColor.title}`}
        >
          {props.title}
        </h1>
      )}

      {/* Subtitle */}
      {props.subtitle && (
        <h2
          className={`mt-4 inline-block text-lg md:text-xl md:leading-relaxed font-medium max-w-screen-md opacity-80 ${textColor.subtitle}`}
        >
          {props.subtitle}
        </h2>
      )}
    </header>
  );
}

export default SectionHeader;
