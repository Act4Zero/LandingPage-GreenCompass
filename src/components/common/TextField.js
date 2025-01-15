import React, { forwardRef } from "react";

const TextField = forwardRef((props, ref) => {
  const {
    error,
    type = "text",
    size = "md",
    label,
    className,
    inputRef, 
    ...inputProps
  } = props;

  const classes = {
    base: "block border placeholder-accentLight rounded w-full focus:outline-none focus:ring focus:ring-green-light focus:ring-opacity-50",
    size: {
      sm: "py-2 px-3 text-sm",
      md: "py-3 px-4 text-base",
      lg: "py-4 px-5 text-lg",
    },
    error: "border-red-500 focus:ring-red-500 focus:ring-opacity-50",
    normal: "border-green-light focus:border-green-dark",
  };

  return (
    <div className={`w-full ${className ? className : ""}`}>
      {label && (
        <label
          className="block mb-1 font-medium text-green-dark"
          htmlFor={inputProps.id}
        >
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          className={`${classes.base} ${
            error ? classes.error : classes.normal
          } ${classes.size[size]}`}
          ref={ref || inputRef} 
          {...inputProps}
        />
      ) : (
        <input
          className={`${classes.base} ${
            error ? classes.error : classes.normal
          } ${classes.size[size]}`}
          ref={ref || inputRef}
          type={type}
          {...inputProps}
        />
      )}

      {error && <p className="text-sm text-red-600 mt-1">{error.message}</p>}
    </div>
  );
});

export default TextField;
