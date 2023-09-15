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
}

export default function PrimaryCta({
  onClick,
  children,
  type,
  marginY,
  marginX,
  bgColor,
  textColor,
}: PrimaryCta) {
  return (
    <Button
      bgColor={`${!bgColor ? "bg-primary40" : bgColor}`}
      textColor={`${!textColor ? "text-white" : textColor}`}
      paddingY="py-small"
      paddingX="px-subLarge"
      marginY={marginY}
      marginX={marginX}
      rounded="rounded-lg"
      textSize="body"
      onClick={onClick}
      type={type ? type : "button"}
    >
      {children}
    </Button>
  );
}
