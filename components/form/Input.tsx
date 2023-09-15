"use client";

import { EventHandler } from "react";

interface InputProps {
  required?: boolean;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export default function Input({
  required,
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <input
      className={`bg-black text-white p-extraSmall rounded-lg placeholder:text-white`}
      required={required}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder ? placeholder : ""}
    ></input>
  );
}
