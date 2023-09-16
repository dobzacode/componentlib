"use client";

import { EventHandler } from "react";
import Label from "./Label";
import { v4 as uuidv4 } from "uuid";
interface InputProps {
  required?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "neutral"
    | "error"
    | "warning"
    | "success"
    | "info";
  id: string;
  name: string;
  value?: string;

  placeholder?: string;

  hiddenLabel?: boolean;
  choices: string[];
}

export default function InputSelect({
  required,
  id,
  name,
  value,
  color = "neutral",
  placeholder,
  hiddenLabel = false,
  choices,
}: InputProps) {
  const determineColor = () => {
    //bg-primary5 placeholder:text-primary90/[.4] text-primary90 border-primary90/[.2] outline-primary90/[.2]
    //bg-secondary5 placeholder:text-secondary90/[.4] text-secondary90 border-secondary90/[.2] outline-secondary90/[.2]
    //bg-tertiary5 placeholder:text-tertiary90/[.4] text-tertiary90 border-tertiary90/[.2] outline-tertiary90/[.2]
    //bg-success5 placeholder:text-success90/[.4] text-success90 border-success90/[.2] outline-success90/[.2]
    //bg-info5 placeholder:text-info90/[.4] text-info90 border-info90/[.2] outline-info90/[.2]
    //bg-warning5 placeholder:text-warning90/[.4] text-warning90 border-warning90/[.2] outline-warning90/[.2]
    //bg-error5 placeholder:text-error90/[.4] text-error90 border-error90/[.2] outline-error90/[.2]
    //bg-neutral5 placeholder:text-neutral90/[.4] text-neutral90 border-neutral90/[.2] outline-neutral90/[.2]
    return `bg-${color}5 placeholder:text-${color}90/[.4] text-${color}90 border-${color}90/[.2] outline-${color}90/[.2]`;
  };

  return (
    <>
      <Label style={`text-${color}90 body`} hidden={hiddenLabel} htmlFor={name}>
        {name}
      </Label>
      <select
        className={`${determineColor()} body placeholder:body p-extra-small rounded-lg box-border border shadow-inner minimal`}
        required={required}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder ? placeholder : ""}
        aria-label={name}
      >
        {placeholder && (
          <option className={`text-white`} value="" disabled selected hidden>
            {placeholder}
          </option>
        )}
        {choices.map((choice) => {
          return (
            <option key={uuidv4()} value={choice}>
              {choice}
            </option>
          );
        })}
      </select>
    </>
  );
}
