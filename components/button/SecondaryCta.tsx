"use client";

import Button from "./Button";

interface SecondaryCta {
  children: string | JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  shadow?: string;
  margin?: string;
}

export default function SecondaryCta({
  onClick,
  children,
  shadow,
  margin,
}: SecondaryCta) {
  return (
    <Button
      textColor="text-primary40"
      paddingY="py-small"
      paddingX="px-subLarge"
      rounded="rounded-extraSmall"
      hover="hover"
      border="border-primary40 border-2"
      textSize="body"
      onClick={onClick}
      margin={margin}
      shadow={shadow}
    >
      {children}
    </Button>
  );
}
