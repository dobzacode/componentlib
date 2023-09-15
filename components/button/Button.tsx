"use client";

interface ButtonProps {
  textSize: string;
  bgColor?: string;
  textColor: string;
  paddingY: string;
  paddingX: string;
  rounded?: string;
  hover?: string;
  border?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string | JSX.Element;
}

export default function Button({
  bgColor,
  textColor,
  paddingY,
  paddingX,
  rounded,
  onClick,
  children,
  border,
  textSize,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={` ${
        bgColor ? bgColor : ""
      } ${textColor} ${paddingY} ${paddingX} ${rounded ? rounded : ""} ${
        border ? border : ""
      } ${textSize} `}
    >
      {children}
    </button>
  );
}
