interface H1Props {
  children: string | JSX.Element;
  type: "headingExtraLarge" | "headingLarge" | "heading";
  textColor?: string;
  bgColor?: string;
  padding?: string;
  rounded?: string;
}

export default function H1({
  children,
  type,
  textColor,
  bgColor,
  padding,
  rounded,
}: H1Props) {
  return (
    <h1
      className={`${type} ${textColor ? textColor : ""} ${
        bgColor ? bgColor : ""
      } ${padding ? padding : ""} ${rounded ? rounded : ""}`}
    >
      {children}
    </h1>
  );
}
