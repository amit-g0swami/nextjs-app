import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  styles?: React.CSSProperties | Record<string, string>;
  onClick?: () => void;
}

export const Container = ({ children, styles, ...rest }: ContainerProps) => {
  return React.createElement("div", { ...rest, style: styles }, children);
};
