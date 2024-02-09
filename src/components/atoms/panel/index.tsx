import React, { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
  title: string;
}

export const Panel = (props: PanelProps) => {
  return <div>{props.children}</div>;
};
