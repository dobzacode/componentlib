"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps {
  hover?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string | JSX.Element;
  type?: "button" | "submit" | "reset";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "neutral";
  transparent?: boolean;
  size: "small" | "medium" | "large";
  margin?: string;
  shadow?: "small" | "medium" | "high" | "";
}

export default function Button({
  onClick,
  children,
  color,
  type = "button",
  margin = "",
  shadow = "",
  size,
  transparent,
}: ButtonProps) {
  const finalcolor = () => {
    if (transparent) {
      return color
        ? `border-2 border-${color}40 text-${color}40 `
        : "border border-black text-black";
    } else {
      switch (color) {
        case "primary":
          return "bg-primary40 text-white";
        case "secondary":
          return "bg-secondary40 text-white";
        case "tertiary":
          return "bg-tertiary40 text-white";
        case "success":
          return "bg-success40 text-white";
        case "error":
          return "bg-error40 text-white";
        case "warning":
          return "bg-warning40 text-white";
        case "info":
          return "bg-info40 text-white";
        case "neutral":
          return "bg-neutral40 text-white";
      }
    }
  };

  const finalShadow = () => {
    // shadow-primary-high
    // shadow-primary-medium
    // shadow-primary-low
    // shadow-secondary-high
    // shadow-secondary-medium
    // shadow-secondary-low
    // shadow-tertiary-high
    // shadow-tertiary-medium
    // shadow-tertiary-low
    // shadow-info-high
    // shadow-info-medium
    // shadow-info-low
    // shadow-success-high
    // shadow-success-medium
    // shadow-success-low
    // shadow-error-high
    // shadow-error-medium
    // shadow-error-low
    // shadow-warning-high
    // shadow-warning-medium
    // shadow-warning-low
    // shadow-neutral-high
    // shadow-neutral-medium
    // shadow-neutral-low
    return `shadow-${color}-${shadow}`;
  };

  const rounded = "rounded-extra-small";

  return (
    <button
      onClick={onClick ? onClick : () => console.log()}
      type={type ? type : "button"}
      className={`   ${rounded} ${finalcolor()} button--${size}  ${margin}  ${finalShadow()} `}
    >
      {children}
    </button>
  );
}
