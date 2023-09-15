"use client";

import Button from "./Button";

interface SecondaryCta {
  children: string | JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SecondaryCta({ onClick, children }: SecondaryCta) {
  return (
    <Button
      textColor="text-primary40"
      paddingY="py-small"
      paddingX="px-subLarge"
      rounded="rounded-lg"
      hover="hover"
      border="border-primary40 border-2"
      textSize="body"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
