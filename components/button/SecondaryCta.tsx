"use client";

import Button from "./Button";

interface SecondaryCta {
  children: string | JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SecondaryCta({ onClick, children }: SecondaryCta) {
  return (
    <Button
      textColor="text-black"
      paddingY="py-4"
      paddingX="px-8"
      rounded="rounded-lg"
      hover="hover"
      border="border-black border-2"
      textSize="text-2xl"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
