"use client";

import Button from "./Button";

interface PrimaryCta {
  children: string | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  textColor?: string;
  shadow?: string;
  margin?: string;
  size: "small" | "medium" | "large";
}

export default function PrimaryCta({
  onClick,
  children,
  type,
  margin,
  bgColor,
  textColor,
  shadow,
  size,
}: PrimaryCta) {
  return (
    <Button
      shadow={shadow}
      bgColor={`${!bgColor ? "bg-primary40" : bgColor}`}
      textColor={`${!textColor ? "text-white" : textColor}`}
      margin={margin}
      rounded="rounded-extraSmall"
      onClick={onClick}
      type={type ? type : "button"}
      size={`button--${size}`}
    >
      {children}
    </Button>
  );
}
