import React, { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
  title: string;
}

export default function Panel(props: PanelProps) {
  return <div>{props.children}</div>;
}
