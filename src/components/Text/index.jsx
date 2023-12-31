import React from "react";

const sizeClasses = {
  txtInterLight15: "font-inter font-light",
  txtInterSemiBold16WhiteA700: "font-inter font-semibold",
  txtInterLight14: "font-inter font-light",
  txtInterSemiBold32: "font-inter font-semibold",
  txtInterBold36: "font-bold font-inter",
  txtInterBold36RedA200: "font-bold font-inter",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterBold24: "font-bold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
