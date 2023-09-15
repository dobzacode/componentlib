"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./form/Input";
import Label from "./form/Label";
import PrimaryCta from "./button/PrimaryCta";

interface FormData {
  nom: string;
  email: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
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
    <form className="body flex flex-col gap-subMedium " onSubmit={handleSubmit}>
      <div className="flex flex-col gap-small">
        <Label htmlFor="nom" hidden>
          Nom
        </Label>
        <Input
          required={true}
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="test"
        ></Input>
      </div>
      <div className="flex flex-col gap-small">
        <Label htmlFor="email" hidden>
          Email
        </Label>
        <Input
          required={true}
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></Input>
      </div>
      <PrimaryCta
        type="submit"
        marginX="mx-large"
        marginY="mt-small"
        bgColor="bg-white"
        textColor="text-black"
      >
        ENVOYER
      </PrimaryCta>
    </form>
  );
}
