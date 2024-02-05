import React from "react";

type TextProps = {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
};

export const Text: React.FC<TextProps> = ({
  children,
  styles,
  as = "span",
}) => {
  return React.createElement(as, children);
};
