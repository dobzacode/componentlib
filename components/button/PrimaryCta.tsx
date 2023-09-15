"use client";

import Button from "./Button";

interface PrimaryCta {
  children: string | JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PrimaryCta({ onClick, children }: PrimaryCta) {
  return (
    <Button
      bgColor="bg-black"
      textColor="text-white"
      paddingY="py-4"
      paddingX="px-8"
      rounded="rounded-lg"
      textSize="text-2xl"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
