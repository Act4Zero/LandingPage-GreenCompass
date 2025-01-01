import React from "react";

function FeatureIcon2(props) {
  const { color = "orange", size = "normal" } = props;

  const classes = {
    color: {
      orange: {
        outer: "bg-orange-300",
        inner: "bg-orange-700",
      },
      red: {
        outer: "bg-red-300",
        inner: "bg-red-700",
      },
      emerald: {
        outer: "bg-emerald-300",
        inner: "bg-emerald-700",
      },
      purple: {
        outer: "bg-purple-300",
        inner: "bg-purple-700",
      },
      blue: {
        outer: "bg-blue-300",
        inner: "bg-blue-700",
      },
      pink: {
        outer: "bg-pink-300",
        inner: "bg-pink-700",
      },
      green: {
        outer: "bg-green-light",
        inner: "bg-green-dark",
      },
      brown: {
        outer: "bg-accentLight",
        inner: "bg-brown",
      },
    },
    size: {
      normal: {
        wrap: "w-11 h-11 m-2",
        outer: "-m-2",
        inner: "",
        icon: "w-5 h-5",
      },
      large: {
        wrap: "w-12 h-12 m-5",
        outer: "-m-5",
        inner: "-m-2",
        icon: "w-8 h-8",
      },
    },
  };

  const resolvedColor = classes.color[color] || classes.color.orange; // Default to orange
  const resolvedSize = classes.size[size] || classes.size.normal; // Default to normal

  return (
    <div
      className={`inline-flex items-center justify-center relative ${
        resolvedSize.wrap
      } ${props.className || ""}`}
    >
      <div
        className={`absolute inset-0 rounded-3xl transform rotate-6 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 ${resolvedColor.outer} ${resolvedSize.outer}`}
      />
      <div
        className={`absolute inset-0 rounded-2xl transform -rotate-6 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105 ${resolvedColor.inner} ${resolvedSize.inner}`}
      />
      <div
        className={`text-white relative transform transition ease-out duration-200 group-hover:scale-110 inline-block ${resolvedSize.icon}`}
      >
        {props.children}
      </div>
    </div>
  );
}

export default FeatureIcon2;
