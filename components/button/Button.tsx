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
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string | JSX.Element;
  type?: string;
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
  type,
}: ButtonProps) {
  return (
    <button
      onClick={onClick ? onClick : () => console.log()}
      type={type}
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
