"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  rounded?: string;
  hover?: string;
  border?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string | JSX.Element;
  type?: "button" | "submit" | "reset";
  size: "button--small" | "button--medium" | "button--large";
  margin?: string;
  shadow?: string;
}

export default function Button({
  bgColor,
  textColor,
  rounded,
  onClick,
  children,
  border,
  type,
  margin,
  shadow,
  size,
}: ButtonProps) {
  return (
    <button
      onClick={onClick ? onClick : () => console.log()}
      type={type ? type : "button"}
      className={` ${bgColor ? bgColor : ""} ${textColor}  ${
        rounded ? rounded : ""
      } ${border ? border : ""} ${size}  ${margin ? margin : ""}  ${
        shadow ? shadow : ""
      }`}
    >
      {children}
    </button>
  );
}
