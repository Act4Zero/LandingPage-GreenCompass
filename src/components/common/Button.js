import React from "react";

const Button = React.forwardRef((props, ref) => {
  const {
    size = "md",
    variant = "primary",
    type = "button",
    children,
    onClick,
    className,
    disabled = false,
    href,
    target,
    isBlock = false,
    startIcon,
    endIcon,
    component,
    ...buttonProps
  } = props;

  // Element to render
  const Element = component ? component : props.href ? "a" : "button";

  // Tailwind classes
  const classes = {
    base: "inline-flex justify-center items-center border font-semibold focus:outline-none rounded focus:ring disabled:opacity-50",
    link: "whitespace-nowrap",
    block: "block w-full",
    size: {
      sm: "px-3 py-2 leading-5 text-sm space-x-2",
      md: "px-3 py-2 leading-6 space-x-3",
      lg: "px-4 py-3 leading-6 space-x-3",
      xl: "px-6 py-4 leading-6 space-x-3",
    },
    variant: {
      primary:
        "border-green-dark bg-green text-white hover:bg-green-dark hover:border-green-darker focus:ring-green-light focus:ring-opacity-50 active:bg-green-darkest active:border-green-darkest",
      secondary:
        "border-green-light bg-green-lightest text-green-dark hover:bg-green-light hover:border-green focus:ring-green-light focus:ring-opacity-50 active:bg-green-dark active:border-green-dark",
      simple:
        "border-lightBg bg-white text-green-dark shadow-sm hover:bg-lightBg hover:border-green-light hover:shadow focus:ring-green-light focus:ring-opacity-25 active:bg-white active:border-lightBg",
      light:
        "border-accentLight bg-accentLight text-brown hover:bg-lightBg hover:border-brown focus:ring-brown focus:ring-opacity-25 active:bg-accentLight active:border-lightBg",
      dark: "border-green-darkest bg-green-darkest text-white hover:bg-green-dark hover:border-green focus:ring-green focus:ring-opacity-50 active:bg-green-darkest active:border-green-darker",
    },
  };

  return (
    <Element
      className={
        `${classes.base} ${classes.size[size]} ${classes.variant[variant]}` +
        (Element === "a" ? ` ${classes.link}` : "") +
        (isBlock ? ` ${classes.block}` : "") +
        (className ? ` ${className}` : "")
      }
      href={href}
      target={target}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...buttonProps}
      ref={ref}
    >
      {startIcon && <span>{startIcon}</span>}

      {children && <span>{props.children}</span>}

      {endIcon && <span>{endIcon}</span>}
    </Element>
  );
});

export default Button;
