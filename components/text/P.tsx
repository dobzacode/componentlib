interface PProps {
  children: string | JSX.Element;
  textColor?: string;
  bgColor?: string;
  type: "body";
}

export default function P({ children, type, textColor, bgColor }: PProps) {
  return (
    <p
      className={`${type} ${textColor ? textColor : ""} ${
        bgColor ? bgColor : ""
      }`}
    >
      {children}
    </p>
  );
}
