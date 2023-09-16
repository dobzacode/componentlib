"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./form/Input";
import Label from "./form/Label";

import H1 from "./text/H1";
import Field from "./form/Field";
import Button from "./button/Button";

interface FormData {
  nom: string;
  prenom: string;
  email: string;
}

export default function Form({
  title,
  bgColor = "",
}: {
  title?: string;
  bgColor?: string;
}) {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    prenom: "",
    email: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("submit");
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
        <Field
          flex="flex flex-col gap-small"
          nom="nom"
          value={formData.nom}
          onChange={handleChange}
        ></Field>
        <Field
          flex="flex flex-col gap-small"
          nom="prenom"
          value={formData.prenom}
          onChange={handleChange}
        ></Field>
        <Field
          flex="flex flex-col gap-small"
          nom="email"
          value={formData.email}
          onChange={handleChange}
        ></Field>
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
