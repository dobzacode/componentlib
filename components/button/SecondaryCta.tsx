"use client";

import Button from "./Button";

interface SecondaryCta {
  children: string | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  textColor?: string;
  shadow?: string;
  margin?: string;
  size: "small" | "medium" | "large";
}

export default function SecondaryCta({
  onClick,
  children,

  margin,

  textColor,
  shadow,
  size,
}: SecondaryCta) {
  return (
    <Button
      textColor={`${!textColor ? "text-white" : textColor}`}
      rounded="rounded-extra-small"
      hover="hover"
      bgColor="bg-secondary40"
      onClick={onClick}
      margin={margin}
      shadow={shadow}
      size={`button--${size}`}
    >
      {children}
    </Button>
  );
}
