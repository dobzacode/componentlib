"use client";

import Button from "./Button";

interface PrimaryCta {
  children: string | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  marginY?: string;
  marginX?: string;
  bgColor?: string;
  textColor?: string;
  shadow?: string;
  margin?: string;
}

export default function PrimaryCta({
  onClick,
  children,
  type,
  margin,
  bgColor,
  textColor,
  shadow,
}: PrimaryCta) {
  return (
    <Button
      shadow={shadow}
      bgColor={`${!bgColor ? "bg-primary40" : bgColor}`}
      textColor={`${!textColor ? "text-white" : textColor}`}
      paddingY="py-small"
      paddingX="px-subLarge"
      margin={margin}
      rounded="rounded-extraSmall"
      textSize="body"
      onClick={onClick}
      type={type ? type : "button"}
    >
      {children}
    </Button>
  );
}
