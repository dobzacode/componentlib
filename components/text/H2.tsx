interface H2Props {
  children: string | JSX.Element;
  type: "headingLarge" | "heading" | "subHeading";
  color?: string;
  bgColor?: string;
}

export default function H2({ children, type, color, bgColor }: H2Props) {
  return (
    <h2 className={`${type} ${color ? color : ""} ${bgColor ? bgColor : ""}`}>
      {children}
    </h2>
  );
}
