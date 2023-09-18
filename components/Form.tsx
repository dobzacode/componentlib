"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./form/Input";
import Label from "./form/Label";

import H1 from "./text/H1";

import Button from "./button/Button";

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  selectValue: string;
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
    selectValue: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("submit");
    console.log(formData);
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
          id="nom"
          value={formData.nom}
          onChange={handleChange}
        ></Input>
        <Input
          hiddenLabel={true}
          placeholder="Prénom"
          color="primary"
          type="text"
          flex="flex flex-col gap-small"
          id="prenom"
          value={formData.prenom}
          onChange={handleChange}
        ></Input>
        <Input
          hiddenLabel={true}
          placeholder="Email"
          color="primary"
          type="text"
          flex="flex flex-col gap-small"
          id="email"
          value={formData.email}
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
