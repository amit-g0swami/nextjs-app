import React, { useState } from "react";
import { Container } from "@/components/atoms/container";

interface TabsProps {
  selected?: number;
  children: React.ReactElement[];
}

export const Tabs: React.FC<TabsProps> = ({
  selected: initialSelected = 0,
  children,
}) => {
  const [selected, setSelected] = useState<number>(initialSelected);

  const handleChange = (index: number) => {
    setSelected(index);
  };

  return (
    <React.Fragment>
      <ul className="flex bg-neutral-100 gap-12 items-center pl-4">
        {React.Children.map(
          children,
          (elem: React.ReactElement, index: number) => {
            const style =
              index === selected
                ? "text-primary-400 border-b-2 border-solid border-primary-400"
                : "text-neutral-400";
            return (
              <li
                key={index}
                className={`cursor-pointer h-12 flex items-center ${style}`}
                onClick={() => handleChange(index)}
              >
                {elem.props.title}
              </li>
            );
          }
        )}
      </ul>
      <Container className="tab">
        {React.Children.toArray(children)[selected]}
      </Container>
    </React.Fragment>
  );
};
