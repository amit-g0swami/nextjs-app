import React, { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Container = ({
  children,
  className,
  style,
  ...rest
}: ContainerProps) => {
  return React.createElement("div", { ...rest, style, className }, children);
};
