interface LabelProps {
  children: string;
  htmlFor: string;
  hidden: boolean;
}

export default function Label({ children, htmlFor, hidden }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={hidden ? "--visually-hidden" : ""}>
      {children}
    </label>
  );
}
