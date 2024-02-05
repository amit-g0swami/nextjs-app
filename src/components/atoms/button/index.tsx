import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnText: string;
  styles?: React.CSSProperties;
  onClick?: () => void;
  disable?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  btnText,
  styles,
  onClick,
  disable = false,
  type = "button",
}) => {
  return React.createElement(
    "button",
    {
      type,
      //   style: buttonStyles,
      onClick,
      disabled: disable,
    },
    btnText
  );
};
