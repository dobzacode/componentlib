"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./form/Input";
import Label from "./form/Label";
import PrimaryCta from "./button/PrimaryCta";

interface FormData {
  nom: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
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
    <form className="text-2xl" onSubmit={handleSubmit}>
      <Label htmlFor="Nom">Nom</Label>
      <Input
        required={true}
        type="text"
        id="nom"
        name="nom"
        value={formData.nom}
        onChange={handleChange}
      ></Input>
      <PrimaryCta type="submit">ENVOYER</PrimaryCta>
    </form>
  );
}
