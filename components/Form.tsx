"use client";

import { ChangeEvent, useState } from "react";
import Input from "./form/Input";
import Label from "./form/Label";

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
    console.log(formData);
  };

  return (
    <form className="text-2xl">
      <Label htmlFor="Nom">Nom</Label>
      <Input
        required={true}
        type="text"
        id="nom"
        name="nom"
        value={formData.nom}
        onChange={handleChange}
      ></Input>
    </form>
  );
}
