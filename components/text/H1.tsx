interface H1Props {
  children: string | JSX.Element;
  type: "headingExtraLarge" | "headingLarge" | "heading";
  color?: string;
  bgColor?: string;
}

export default function H1({ children, type, color, bgColor }: H1Props) {
  return (
    <h1 className={`${type} ${color ? color : ""} ${bgColor ? bgColor : ""} `}>
      {children}
    </h1>
  );
}
