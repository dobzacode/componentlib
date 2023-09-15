"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./form/Input";
import Label from "./form/Label";
import PrimaryCta from "./button/PrimaryCta";
import H1 from "./text/H1";
import Field from "./form/Field";

interface FormData {
  nom: string;
  prenom: string;
  email: string;
}

export default function Form({
  title,
  bgColor,
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
      className={`flex flex-col gap-medium items-center ${bgColor} rounded-b-lg`}
    >
      {title && (
        <H1
          type="heading"
          textColor="text-primary0 "
          bgColor="bg-primary40"
          padding="py-small px-subLarge"
          rounded="rounded-t-lg"
        >
          {title}
        </H1>
      )}
      <form
        className={`body flex flex-col gap-subMedium pb-subLarge `}
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
        <PrimaryCta
          type="submit"
          marginX="mx-large"
          marginY="mt-small"
          bgColor="bg-primary4
          0"
          textColor="text-primary0 "
        >
          ENVOYER
        </PrimaryCta>
      </form>
    </div>
  );
}
