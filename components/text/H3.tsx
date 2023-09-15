interface H3Props {
  children: string | JSX.Element;
  color?: string;
  bgColor?: string;
}

export default function H3({ children, color, bgColor }: H3Props) {
  return (
    <h3
      className={`subHeading ${color ? color : ""} ${bgColor ? bgColor : ""}`}
    >
      {children}
    </h3>
  );
}
