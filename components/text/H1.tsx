interface H1Props {
  children: string | JSX.Element;
}

export default function H1({ children }: H1Props) {
  return <h1 className="body heading">{children}</h1>;
}
