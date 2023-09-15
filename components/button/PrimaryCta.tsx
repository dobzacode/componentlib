"use client";

import Button from "./Button";

interface PrimaryCta {
  children: string | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export default function PrimaryCta({ onClick, children, type }: PrimaryCta) {
  return (
    <Button
      bgColor="bg-black"
      textColor="text-white"
      paddingY="py-4"
      paddingX="px-8"
      rounded="rounded-lg"
      textSize="text-2xl"
      onClick={onClick}
      type={type ? type : "button"}
    >
      {children}
    </Button>
  );
}
