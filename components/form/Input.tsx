"use client";

import { EventHandler } from "react";

interface InputProps {
  required?: boolean;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  required,
  type,
  id,
  name,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      className={`bg-black text-white p-4 rounded-lg`}
      required={required}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    ></input>
  );
}
