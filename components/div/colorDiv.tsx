interface ColorDivProps {
  children?: JSX.Element;
  color: string;
  padding?: string;
  margin?: string;
  rounded?: string;
  flex?: string;
}

export default function ColorDiv({
  children,
  color,
  padding = "",
  margin = "",
  rounded = "",
  flex = "",
}: ColorDivProps) {
  return (
    <div className={`${color} ${padding} ${margin} ${rounded} ${flex} `}>
      {children}
    </div>
  );
}
