interface H3Props {
  children: string | JSX.Element;
  textColor?: string;
  bgColor?: string;
}

export default function H3({ children, textColor, bgColor }: H3Props) {
  return (
    <h3
      className={`subHeading ${textColor ? textColor : ""} ${
        bgColor ? bgColor : ""
      }`}
    >
      {children}
    </h3>
  );
}
