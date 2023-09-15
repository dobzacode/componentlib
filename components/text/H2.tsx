interface H2Props {
  children: string | JSX.Element;
  type: "headingLarge" | "heading" | "subHeading";
  textColor?: string;
  bgColor?: string;
}

export default function H2({ children, type, textColor, bgColor }: H2Props) {
  return (
    <h2
      className={`${type} ${textColor ? textColor : ""} ${
        bgColor ? bgColor : ""
      }`}
    >
      {children}
    </h2>
  );
}
