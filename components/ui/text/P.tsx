import { cn } from "@/utils/utils";
import { VariantProps } from "class-variance-authority";
import { FC, HTMLProps } from "react";
import { textVariants } from "./H1";



interface PProps
  extends HTMLProps<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children?: React.ReactNode;
}

const P: FC<PProps> = ({
  children,
  className,
  textType, intent, hover, 
  ...props
}) => {
  return (
    <p className={cn(
      textVariants({
        className,
        intent,
        textType,
        hover,
      }),
    )} {...props}>
      {children}
    </p>
  );
};

export default P;
