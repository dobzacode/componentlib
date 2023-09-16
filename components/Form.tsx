"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./form/InputText";
import Label from "./form/Label";

import H1 from "./text/H1";
import InputText from "./form/InputText";
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
        <InputText
          flex="flex flex-col gap-small"
          name="nom"
          id="nom"
          value={formData.nom}
          onChange={handleChange}
        ></InputText>
        <InputText
          flex="flex flex-col gap-small"
          name="prenom"
          id="prenom"
          value={formData.prenom}
          onChange={handleChange}
        ></InputText>
        <InputText
          flex="flex flex-col gap-small"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        ></InputText>
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
