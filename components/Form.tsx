"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./form/Input";
import Label from "./form/Label";

import H1 from "./text/H1";

import Button from "./button/Button";

interface FormData {
  name: string;
  password: string;
  email: string;
  selectValue: string;
  radioValue: string;
}

export default function Form({
  title,
  bgColor = "",
}: {
  title?: string;
  bgColor?: string;
}) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    password: "",
    email: "",
    selectValue: "",
    radioValue: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(formData);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className={`flex flex-col gap-medium items-center ${bgColor} rounded-extra-small shadow-primary-medium `}
    >
      {title && (
        <H1
          type="heading"
          textColor="text-primary0 "
          bgColor="bg-primary40"
          padding="py-small px-sub-large"
          rounded="rounded-t-extra-small"
        >
          {title}
        </H1>
      )}
      <form
        className={`body flex flex-col gap-sub-medium pb-sub-large `}
        onSubmit={handleSubmit}
      >
        <Input
          hiddenLabel={true}
          placeholder="Nom"
          color="primary"
          type="text"
          flex="flex flex-col gap-small"
          id="name"
          value={formData.name}
          onChange={handleChange}
        ></Input>

        <Input
          hiddenLabel={true}
          placeholder="Email"
          color="primary"
          type="email"
          flex="flex flex-col gap-small"
          id="email"
          value={formData.email}
          onChange={handleChange}
        ></Input>
        <Input
          hiddenLabel={true}
          placeholder="Password"
          color="primary"
          type="password"
          flex="flex flex-col gap-small"
          id="password"
          value={formData.password}
          onChange={handleChange}
        ></Input>
        <Input
          type="select"
          hiddenLabel={true}
          placeholder="Your choice"
          color="primary"
          id="selectValue"
          choices={["First choice", "Second choice", "Third choice"]}
          value={formData.selectValue}
          onChange={handleChange}
        ></Input>

        <Input
          type="radio"
          hiddenLabel={true}
          color="primary"
          id="radioValue"
          choices={["First choice", "Second choice"]}
          value={formData.radioValue}
          onChange={handleChange}
        ></Input>

        <Button
          type="submit"
          size="small"
          color="primary"
          margin="mx-large mt-small"
        >
          ENVOYER
        </Button>
      </form>
    </div>
  );
}
