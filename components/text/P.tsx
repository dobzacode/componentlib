interface PProps {
  children: string | JSX.Element;
  color?: string;
  bgColor?: string;
  type: "body";
}

export default function P({ children, type, color, bgColor }: PProps) {
  return (
    <p className={`${type} ${color ? color : ""} ${bgColor ? bgColor : ""}`}>
      {children}
    </p>
  );
}
