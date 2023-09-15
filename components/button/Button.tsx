"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps {
  hover?: string;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string | JSX.Element;
  type?: "button" | "submit" | "reset";
  color:
    | "primary"
    | "secondary"
    | "tertiary"
    | "transparent-primary"
    | "transparent-secondary"
    | "transparent-tertiary"
    | "transparent-black";
  size: "small" | "medium" | "large";
  margin?: string;
  shadow?: string;
}

export default function Button({
  onClick,
  children,
  color,
  type,
  margin,
  shadow,
  size,
}: ButtonProps) {
  const finalcolor = () => {
    switch (color) {
      case "primary":
        return "bg-primary40 text-white";
      case "secondary":
        return "bg-secondary40 text-white";
      case "tertiary":
        return "bg-tertiary40 text-white";
      case "transparent-primary":
        return "border border-primary40 text-primary40";
      case "transparent-secondary":
        return "border border-secondary40 text-secondary40";
      case "transparent-tertiary":
        return "border border-tertiary40 text-tertiary40";
      case "transparent-black":
        return "border border-black text-black";
    }
  };

  const rounded = "rounded-extra-small";

  return (
    <button
      onClick={onClick ? onClick : () => console.log()}
      type={type ? type : "button"}
      className={`   ${
        rounded ? rounded : ""
      } ${finalcolor()} button--${size}  ${margin ? margin : ""}  ${
        shadow ? shadow : ""
      }`}
    >
      {children}
    </button>
  );
}
